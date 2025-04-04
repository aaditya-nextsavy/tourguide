import React from "react";

import List from "@/components/listings/List";
import Gallery from "@/components/Gallery";
import Blogs from "@/components/home/Blogs";
import RelatedTour from "@/components/listings/RelatedTour";

const page = () => {
  return (
    <div className="tours-list-wrapper">


      <section className="tour-list-section-wrapper">
        <List />
      </section>

      <section className="home-featured-destinations-section-wrapper">
        <div className="container">
          <RelatedTour />
        </div>
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
};

export default page;
