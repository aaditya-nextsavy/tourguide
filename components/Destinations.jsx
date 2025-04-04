
"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import TestImage from "../public/assets/media/featuredDestination/fd1.png";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Destinations = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = ".swiper-button-prev";
      swiperInstance.params.navigation.nextEl = ".swiper-button-next";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="home-featured-destinations-wrapper">
      <div className="container">
        <div className="destinations-title-heading">
          <h1 className="tourguide-title-text">Featured Destinations</h1>
          <p className="tourguide-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit
          </p>
        </div>
      </div>

      <div className="home-featured-destinations-swiper-wrapper destination-slider-wrapp">
        <Swiper
          className="featured-destinations-swiper-wrapper"
          spaceBetween={10}
          slidesPerView={"auto"}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
          }}
          loop={false}
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          navigation={{  prevEl: ".swiper-button-prev",nextEl: ".swiper-button-next" }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SwiperSlide key={index} className="featured-destinations-swiper-slide">
              <div className="featured-destinations-slider-image">
                <Image
                  src={TestImage}
                  alt="relatedImage"
                  width={250}
                  height={180}
                />
              </div>
              <div className="featured-destinations-slider-information">
                <h3>Westminster to Greenwich River Thames</h3>
                <div className="featured-destinations-slider-information-activities">
                  <span>
                    <MdOutlineAccessTime />
                  </span>{" "}
                  Duration 2 Hour
                </div>
                <div className="featured-destinations-slider-information-activities">
                  <span>
                    <FaCarSide />
                  </span>{" "}
                  Transport Facility
                </div>
                <div className="featured-destinations-slider-information-activities">
                  <span>
                    <MdOutlinePeopleOutline />{" "}
                  </span>
                  Family Plan
                </div>
              </div>

              <div className="featured-destinations-slider-information-footer">
                <div className="featured-destinations-slider-information-footer-left">
                  <div className="featured-destinations-slider-information-footer-review-stars">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <span>
                      <IoMdStar />
                    </span>
                  </div>
                  <p>548 reviews</p>
                </div>

                <div className="featured-destinations-slider-information-footer-right">
                  <h3>$ 35.00</h3>
                  <p> per person</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
         

        </Swiper>

        <div className="slider-nav-btns">
          <div className="swiper-button-prev">
            <MdKeyboardArrowLeft />
          </div>
          <div className="swiper-button-next">
            <MdKeyboardArrowRight />
            
          </div>
        </div>

        
       
      </div>
    </div>
  );
};

export default Destinations;
