import Navbar from '../components/Navbar';
import FindMyJourney from '../components/FindMyJourney';
// import HomepageCards from '../components/LearnMoreCards';
// import Mountain from '../components/Mountain';
// import DestinationCard from '../components/DestinationCard';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <FindMyJourney />
      {/* <HomepageCards /> */}
      {/* <Mountain /> */}
      {/* <DestinationCard /> */}
      <Footer />
    </div>
  );
};
export default Homepage;
