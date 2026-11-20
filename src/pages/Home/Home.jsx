import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import FlashSale from "../../components/FlashSale/FlashSale";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import products from "../../data/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <Categories />
      <FlashSale />
      <FeaturedProducts
  title="Featured Products"
  products={products.slice(0,4)}
/>

<FeaturedProducts
  title="New Arrivals"
  products={products.slice(4,8)}
/>
      
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}