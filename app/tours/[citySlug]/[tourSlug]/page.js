"use client";
import React, { useRef, useState, useEffect } from "react";
import tourDetails from "@/public/assets/data/details.json";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { TbShare3 } from "react-icons/tb";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { TiCancel } from "react-icons/ti";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Related from "@/components/details/Related";
import Loadingscreen from "@/components/Loadingscreen";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const [navSlider, setNavSlider] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTodayDate(today);

    // console.log(" price check : ", tourData.booking_data)
  }, []);

  useEffect(() => {
    if (tourDetails) {
      setLoading(false);
      console.log(tourDetails);

      const city = tourDetails.cities.find((city) => city.slug === "london");
      if (city) {
        const tour = city.tours.find(
          (tour) =>
            tour.slug == "vintage-double-decker-bus-tour-thames-river-cruise"
        );
        setLoading(false);
        setTourData(tour || {});
        console.log("tour details:", tour);
      } else {
        setTourData({});
        setLoading(true);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Updated tourData:", tourData);
  }, [tourData]);

  const handleDateChange = (event) => {
    setTodayDate(event.target.value);
  };

  useEffect(() => {
    if (thumbSliderRef.current) {
      setNavSlider(thumbSliderRef.current);
    }
  }, []);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: false,
    asNavFor: navSlider,
  };

  const settingsNav = {
    slidesToShow: 5.7,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 5 } },
      { breakpoint: 580, settings: { slidesToShow: 4 } },
      { breakpoint: 425, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <>
      <section className="tour-details-sections-wrapper">
        {loading ? (
          <Loadingscreen />
        ) : (
          <>
            <div className="container">
              <div className="tour-details-wrapper">
                <div className="tour-details-heading">
                  <div className="tour-details-heading-title">
                    <h2>{tourData.title}</h2>
                  </div>
                  <div className="tour-details-heading-title-info">
                    <div className="tour-details-heading-title-contact">
                      <p>
                        <MdLocationPin />
                        {tourData.location}
                      </p>
                      <span className="hidden-bar">|</span>
                      <p>
                        <span className="review-stars">
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </span>{" "}
                        ( {tourData.reviews} reviews )
                      </p>
                    </div>
                  </div>
                </div>

                <div className="tour-details-content">
                  {/* main details */}

                  <div className="tour-details-content-details">
                    <div className="tour-details-content-details-image">
                      <div className="details-big-image">
                        <Slider ref={mainSliderRef} {...settingsFor}>
                          {tourData.gallery.map((image, index) => (
                            <div key={index}>
                              <Image
                                className="big-image-div"
                                src={image}
                                alt={`Tour Image ${index + 1}`}
                                width={800}
                                height={460}
                                quality={100}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                      <div className="details-selection-images">
                        <Slider ref={thumbSliderRef} {...settingsNav}>
                          {tourData.gallery.map((image, index) => (
                            <div
                              key={index}
                              className={`selection-box-image ${
                                selectedImage === image ? "active" : ""
                              }`}
                              onClick={() => setSelectedImage(image)}
                            >
                              <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                width={120}
                                height={100}
                                quality={90}
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>

                    <div className="tour-details-content-details-summary-box">
                      <div className="summary-box-item">
                        <div className="summary-box-item-icon">
                          <TiCancel />
                        </div>
                        <div className="summary-box-item-info">
                          <p>
                            <strong>Free cancellation</strong>
                          </p>
                          <p>
                            Cancel up to 24 hours in advance to receive a full
                            refund
                          </p>
                        </div>
                      </div>
                      <div className="summary-box-item">
                        <div className="summary-box-item-icon">
                          <TiCancel />
                        </div>
                        <div className="summary-box-item-info">
                          <p>
                            <strong>Health precautions</strong>
                          </p>
                          <p>
                            Special health and safety measures apply. Learn more
                          </p>
                        </div>
                      </div>
                      <div className="summary-box-item">
                        <div className="summary-box-item-icon">
                          <TiCancel />
                        </div>
                        <div className="summary-box-item-info">
                          <p>
                            <strong>Mobile ticketing</strong>
                          </p>
                          <p>Use your phone or print your voucher</p>
                        </div>
                      </div>
                      <div className="summary-box-item">
                        <div className="summary-box-item-icon">
                          <TiCancel />
                        </div>
                        <div className="summary-box-item-info">
                          <p>
                            <strong>Duration {tourData.duration} </strong>
                          </p>
                          <p>Check availability to see starting times.</p>
                        </div>
                      </div>
                      <div className="summary-box-item">
                        <div className="summary-box-item-icon">
                          <TiCancel />
                        </div>
                        <div className="summary-box-item-info">
                          <p>
                            <strong>Instant confirmation</strong>
                          </p>
                          <p>Don’t wait for the confirmation!</p>
                        </div>
                      </div>{" "}
                      <div className="summary-box-item">
                        <div className="summary-box-item-icon">
                          <TiCancel />
                        </div>
                        <div className="summary-box-item-info">
                          <p>
                            <strong>Live tour guide in English</strong>
                          </p>
                          <p>English</p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    
                  <div className="tour-details-content-booking-info-wrapper responsive-mobile">
                    <div className="tour-details-content-booking-info">
                      <div className="booking-info-title">
                        <p>Booking</p>
                      </div>
                      <div className="details-booking-body">
                        <div className="details-booking-body-option-date">
                          <label
                            htmlFor="option1"
                            className="checkbox-label-date"
                          >
                            From
                          </label>
                          <input
                            type="date"
                            value={todayDate}
                            id="option1"
                            onChange={handleDateChange}
                            className="details-date-box"
                          />
                        </div>

                        <div className="details-booking-body-option-date">
                          <label
                            htmlFor="option1"
                            className="checkbox-label-date"
                          >
                            To
                          </label>
                          <input
                            type="date"
                            id="option1"
                            className="details-date-box"
                          />
                        </div>

                        <div className="details-booking-body-option-date">
                          <label
                            htmlFor="option1"
                            className="checkbox-label-date"
                          >
                            No. of Guests
                          </label>
                          {/* <input
                        type="date"
                        id="option1"
                        className="details-date-box"
                      /> */}
                          <select className="details-date-box">
                            <option>1 adults</option>
                            <option>2 adults</option>
                            <option>3 adults</option>
                            <option>4 adults</option>
                            <option>5 adults</option>
                          </select>
                        </div>
                        <div className="booking-total">
                          <span>subtotal</span>
                          <p>${tourData.booking_data.price_per_person}</p>
                        </div>

                        <div className="details-booking-body-btns">
                          <div className="btn-type-5"> Confirm Booking</div>
                          <div className="btn-type-6">
                            <CiHeart /> Save to wishlist
                          </div>
                          <div className="btn-type-6">
                            {" "}
                            <TbShare3 /> share the activity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  

                    <div className="tours-details-info-wrapper ">
                      <div className="tour-details-info">
                        <h3>{tourData.tour_info.description.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: tourData.tour_info.description.info,
                          }}
                        />
                      </div>
                    </div>

                    <div className="tour-details-activity-wrapper">
                      <div className="tour-details-info">
                        <h3> {tourData.tour_info.activity.title} </h3>
                        <h4> {tourData.tour_info.activity.subhead}</h4>

                        <ul>
                          {tourData.tour_info.activity.list.map(
                            (item, index) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="tour-details-inclusion-wrapper">
                      <div className="tour-details-info">
                        <h3> {tourData.tour_info.inclusion.title}</h3>

                        <div className="inclusion-box">
                          <div className="tour-details-info">
                            <h4>
                              {" "}
                              {tourData.tour_info.inclusion.included.subhead}
                            </h4>
                            <ul>
                              {tourData.tour_info.inclusion.included.list.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="tour-details-info">
                            <h4>
                              {" "}
                              {
                                tourData.tour_info.inclusion.not_included
                                  .subhead
                              }
                            </h4>
                            <ul>
                              {tourData.tour_info.inclusion.not_included.list.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tour-details-saftey-wrapper">
                      <div className="tour-details-info">
                        <h3> {tourData.tour_info.saftey.title} </h3>
                        <h4> {tourData.tour_info.saftey.subhead}</h4>

                        <ul>
                          {tourData.tour_info.saftey.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="tour-details-summary-wrapper">
                      <div className="tour-details-info">
                        <h3> {tourData.tour_info.details.title}</h3>

                        <div className="inclusion-box">
                          {tourData.tour_info.details.columns.map(
                            (item, index) => (
                              <div key={index} className="tour-details-info">
                                <h4>{item.subhead}</h4>
                                <ul>
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex}>{listItem}</li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </div>

                        <h4> {tourData.tour_info.meeting_point.subhead}</h4>
                        <ul className="beforeiframe">
                          {tourData.tour_info.meeting_point.address.map(
                            (item, index) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ul>

                        <Link href={tourData.tour_info.meeting_point.link}>
                          Open in google Maps
                        </Link>

                        <div className="iframe-gmaps">
                          <iframe
                            src={tourData.tour_info.meeting_point.google_maps}
                            width="600"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>

                    {/* <div></div> */}
                  </div>

                  {/* booking-data */}

                  <div className="tour-details-content-booking-info-wrapper responsive-desktop">
                    <div className="tour-details-content-booking-info">
                      <div className="booking-info-title">
                        <p>Booking</p>
                      </div>
                      <div className="details-booking-body">
                        <div className="details-booking-body-option-date">
                          <label
                            htmlFor="option1"
                            className="checkbox-label-date"
                          >
                            From
                          </label>
                          <input
                            type="date"
                            value={todayDate}
                            id="option1"
                            onChange={handleDateChange}
                            className="details-date-box"
                          />
                        </div>

                        <div className="details-booking-body-option-date">
                          <label
                            htmlFor="option1"
                            className="checkbox-label-date"
                          >
                            To
                          </label>
                          <input
                            type="date"
                            id="option1"
                            className="details-date-box"
                          />
                        </div>

                        <div className="details-booking-body-option-date">
                          <label
                            htmlFor="option1"
                            className="checkbox-label-date"
                          >
                            No. of Guests
                          </label>
                        
                          <select className="details-date-box">
                            <option>1 adults</option>
                            <option>2 adults</option>
                            <option>3 adults</option>
                            <option>4 adults</option>
                            <option>5 adults</option>
                          </select>
                        </div>
                        <div className="booking-total">
                          <span>subtotal</span>
                          <p>${tourData.booking_data.price_per_person}</p>
                        </div>

                        <div className="details-booking-body-btns">
                          <div className="btn-type-5"> Confirm Booking</div>
                          <div className="btn-type-6">
                            <CiHeart /> Save to wishlist
                          </div>
                          <div className="btn-type-6">
                            {" "}
                            <TbShare3 /> share the activity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* <section className="details-related-tours">
          <div className="container">
            <Related />
          </div>
        </section> */}

      </section>
    </>
  );
};

export default Page;
