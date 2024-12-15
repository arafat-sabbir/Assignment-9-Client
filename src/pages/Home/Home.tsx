import Banner from "@/components/Home/Banner";
import PopularCategories from "@/components/Home/PopularCategories";
import WeeklyDiscount from "@/components/Home/WeeklyDiscount";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PopularCategories/>
      <WeeklyDiscount/>
      <Footer/>
    </>
  );
};

export default Home;
