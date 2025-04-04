"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import TestImage from "../../public/assets/media/featuredDestination/fd1.png";
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
      swiperInstance.params.navigation.prevEl = ".activity-swiper-button-prev";
      swiperInstance.params.navigation.nextEl = ".activity-swiper-button-next";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="home-featured-destinations-wrapper">
     
        <div className="list-destinations-title-heading">
          <div className="activity-title">
            <p>Water Activities</p>
          </div>
          <div className="activity-slider-nav-btns">
            <div className="activity-swiper-button-prev">
              <MdKeyboardArrowLeft />
            </div>
            <div className="activity-swiper-button-next">
              <MdKeyboardArrowRight />
            </div>
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
          navigation={{
            prevEl: ".activity-swiper-button-prev",
            nextEl: ".activity-swiper-button-next",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SwiperSlide
              key={index}
              className="featured-destinations-swiper-slide"
            >
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
      </div>
    </div>
  );
};

export default Destinations;
