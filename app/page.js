import HeroBanner from "@/components/home/HeroBanner";
import  PopularCity from "@/components/home/PopularCity";
import Gallery from "@/components/Gallery";
import TrendingCity from "@/components/home/TrendingCity";
import Blogs from "@/components/home/Blogs";
import Destinations from "@/components/Destinations";
import TrendingTour from "@/components/TrendingTour";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <section className="home-hero-banner-section-wrapper">
        <HeroBanner />
      </section>

      <section className="home-searchBanner-section-wrapper">
        <div className="container">
          <PopularCity />
        </div>
      </section>

      <section className="home-trending-tour-section-wrapper">
        <TrendingTour />
      </section>

      <section className="home-featured-destinations-section-wrapper">
       
          <Destinations />
        
      </section>

      <section className="home-trending-city-section-wrapper">
        <TrendingCity />
      </section>

      <section className="home-gallery-section-wrapper ">
        <div className="container">
          <Gallery />
        </div>
      </section>

      <section className="home-latest-blogs-section-wrapper ">
        <div className="container">
          <Blogs />
        </div>
      </section>
    </div>
  );
}
