import AreaProperties from "../components/landing/AreaProperties";
import Banner from "../components/landing/Banner";
import FeaturedListings from "../components/landing/FeaturedListings";
import Hero from "../components/landing/Hero"
// import Newsletter from "../components/landing/Newsletter";
import Showcase from "../components/landing/Showcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container-layout">
        <Showcase/>
        <AreaProperties/>
        <FeaturedListings/>
      </div>
      <Banner/>
         {/* <Newsletter/> */}

    </div>
  );
}

export default Home
