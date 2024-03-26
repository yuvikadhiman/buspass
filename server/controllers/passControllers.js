import stripe from 'stripe';
import Buses from '../models/Buses.js';
import Pass from '../models/Pass.js';
import { buses } from '../utils/data.js';

export const bookMyPass = async (req, res) => {
  try {
    const busId = req.body.busId;
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
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/failed`,
    });

    console.log(session.id);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    const newPass = new Pass({
      from: bus[0].from,
      to: bus[0].to,
      validity: expirationDate.toISOString(),
      userId: req.user.user._id,
    });

    await newPass.save();

    res.status(201).json({
      id: session.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

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

export const searchPass = (req, res) => {
  try {
    const { from, to } = req.body;
    if (!from && !to) {
      return res.json(buses);
    }
    if (!from) {
      bus = buses.fi;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
