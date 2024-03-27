import stripe from 'stripe';
import Buses from '../models/Buses.js';
import Pass from '../models/Pass.js';

export const getMyPass = async (req, res) => {
  try {
    const passes = await Pass.find({ userId: req.user.user._id });

    if (!passes || passes.length === 0) {
      return res.status(404).json({ msg: "You don't have any passes" });
    }

    res.json({ myPasses: passes });
  } catch (error) {
    console.error('Error in getMyPass:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const bookMyPass = async (req, res) => {
  try {
    const busId = req.body.busId;
    const userId = req.user.user._id;
    const bus = await Buses.find({ _id: busId });
    if (!bus) {
      return res.status(400).json({ error: 'Invalid pass id' });
    }
    const price = bus[0].price;
    const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: bus.map((b) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: b.name,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?busId=${busId}&userId=${userId}`,
      cancel_url: `${process.env.CLIENT_URL}/failed`,
    });

    bookUserPass(busId, userId);
    res.status(201).json({
      id: session.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const bookMyPassCrypto = async (req, res) => {
  try {
    const busId = req.body.busId;
    const userId = req.user.user._id;
    const price = req.body.price;

    const url =
      'https://blockchain.info/rawaddr/13eQC8tk8pCrkASSDyEqWvZoQQEour4XYL';
    const response = await fetch(url);
    const data = await response.json();
    const transactions = data.txs;
    const amount = 62952;
    const intervalDuration = 30000;
    const totalAttempts = 2;
    let attemptCount = 0;

    const checkTransactionStatus = () => {
      const latestTx = transactions[0];

      if (latestTx.out[0].value === amount) {
        clearInterval(intervalId);
        bookUserPass(busId, userId);
        res.json({ msg: 'success' });
      } else {
        attemptCount++;
        if (attemptCount >= totalAttempts) {
          clearInterval(intervalId);
          res.json({ error: 'Failure. Please try again or contact support.' });
        }
      }
    };

    const intervalId = setInterval(checkTransactionStatus, intervalDuration);

    checkTransactionStatus();
  } catch (error) {
    console.error('Error in getMyPass:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const bookUserPass = async (busId, userId) => {
  const bus = await Buses.find({ _id: busId });

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  const newPass = new Pass({
    from: bus[0].from,
    to: bus[0].to,
    validity: expirationDate.toISOString(),
    userId,
  });

  await newPass.save();
};
