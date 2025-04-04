"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import TestImage from "../public/assets/images/gallery/lake.jpg";
import testCurve from "../public/assets/media/trending-tour/svgbefore.png";

import { FcLike } from "react-icons/fc";
import { IoIosShareAlt } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const TrendingTour = () => {
  return (
    <div className="trending-tour-wrapper">
      <div className="trending-tour-gradient-overlay"></div>

      <div className="container">
        <Swiper
          className="trending-tour-swiper-wrapper"
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={false}
          loop={true}
        >
          <SwiperSlide className="trending-tour-swiper-slide-wrapper">
            <div className="trending-tour-swiper-slide">
              <div className=" trending-tour-swiper-slide-image">
                <Image
                  className="trending-tour-mask-image"
                  src={TestImage}
                  alt="Banner Image"
                  width={200}
                  height={200}
                />
              </div>
              <div className="trending-tour-swiper-slide-information">
                <div
                  className="trending-tour-swiper-slide-information-title"
                  style={{ alignItems: "center" }}
                >
                  <strong>Trending now</strong>
                  <h3> WilderLife of Alaska</h3>
                  <div className="trending-tour-swiper-slide-information-title-subinfo ">
                    <span className="inline-flex">
                      {" "}
                      <IoLocation />{" "}
                    </span>
                    Alaska, USA
                    <p className="review-stars ">
                      <span>
                        <IoMdStar />

                        <IoMdStar />

                        <IoMdStar />
                        <IoMdStar />

                        <IoMdStar />
                      </span>
                    </p>
                    {""} 4.9 stars ( 300 reviews)
                  </div>
                  <p className="mt-[10px]">
                    This is the first slide it is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout.
                  </p>
                </div>
                <div className="trending-tour-swiper-slide-information-links">
                  <div className="trending-tour-swiper-slide-information-links-btn">
                    <Link href="/">
                      <div className="btn-type-2">Book now</div>
                    </Link>
                  </div>

                  <div className="trending-tour-swiper-slide-information-links-elements">
                    <FcLike className="whitelikebtn" />
                  </div>

                  <div className="trending-tour-swiper-slide-information-links-elements">
                    <IoIosShareAlt className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="trending-tour-swiper-slide-wrapper">
            <div className="trending-tour-swiper-slide">
              <div className=" trending-tour-swiper-slide-image">
                <Image
                  className="trending-tour-mask-image"
                  src={TestImage}
                  alt="Banner Image"
                  width={200}
                  height={200}
                />
              </div>
              <div className="trending-tour-swiper-slide-information">
                <div className="trending-tour-swiper-slide-information-title">
                  <strong>Trending now</strong>

                  <h3> WilderLife of Alaska</h3>
                  <div className="trending-tour-swiper-slide-information-title-subinfo">
                    <span className="inline-flex">
                      {" "}
                      <IoLocation />{" "}
                    </span>
                    Alaska, USA
                    <p className="review-stars ">
                      <span>
                        <IoMdStar />

                        <IoMdStar />

                        <IoMdStar />
                        <IoMdStar />

                        <IoMdStar />
                      </span>
                    </p>
                    {""} 4.9 stars ( 300 reviews)
                  </div>
                  <p className="mb-[20px]">
                    This is the first slide it is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout.
                  </p>
                </div>
                <div className="trending-tour-swiper-slide-information-links">
                  <div className="trending-tour-swiper-slide-information-links-btn">
                    <Link href="/">
                      <div className="btn-type-2">Book now</div>
                    </Link>
                  </div>

                  <div className="trending-tour-swiper-slide-information-links-elements">
                    <FcLike className="whitelikebtn" />
                  </div>

                  <div className="trending-tour-swiper-slide-information-links-elements">
                    <IoIosShareAlt className="whitelikebtn" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingTour;
