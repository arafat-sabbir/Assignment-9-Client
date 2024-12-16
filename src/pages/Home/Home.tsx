import Banner from "@/components/Home/Banner";
import PopularCategories from "@/components/Home/PopularCategories";
import WeeklyDiscount from "@/components/Home/WeeklyDiscount";
import Navbar from "@/components/shared/Navbar";
// @ts-ignore
import Footer from "@/components/shared/Footer";
import LatestProduct from "@/components/Home/LatestProduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <LatestProduct />
      <PopularCategories />
      <WeeklyDiscount />
      <Footer />
    </>
  );
};

export default Home;
