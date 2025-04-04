"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import sampleIMage from "../../public/assets/media/list/london/london1.png";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import { Swiper as SwiperCore, Navigation } from "swiper";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

import Loadingscreen from "@/components/Loadingscreen";

const List = () => {
  const [isDateOpen, setIsDateOpen] = useState(true);
  const [isThemeOpen, setIsThemeOpen] = useState(true);
  const [isDurationOpen, setIsDurationOpen] = useState(true);
  const [isDestinationOpen, setIsDestinationOpen] = useState(true);
  const [todayDate, setTodayDate] = useState("");
  const [cardNumber, setCardNumber] = useState(5);

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTodayDate(today);
  }, []);

  const moreCards = () => {
    setCardNumber(cardNumber + 3);
  };

  const handleDateChange = (event) => {
    setTodayDate(event.target.value);
  };

  const toggleDate = () => {
    setIsDateOpen(!isDateOpen);
  };

  const toggleTheme = () => {
    setIsThemeOpen(!isThemeOpen);
  };
  const toggleDuration = () => {
    setIsDurationOpen(!isDurationOpen);
  };
  const toggleDestination = () => {
    setIsDestinationOpen(!isDestinationOpen);
  };

  useEffect(() => {

    async function fetchTours() {
      try {
        const response = await fetch("/api/tours");
        const result = await response.json();
        console.log("Fetched tours data:", result);

        if (result.success && Array.isArray(result.data)) {
          setTours(result.data);
          setLoading(false);
        } else {
          console.error("API did not return an array:", result);
          setTours([]);
        }
      } catch (error) {
        console.error("Error fetching tours:", error);
        setTours([]);
      }
    }

    fetchTours();
  }, []);

  if (loading) return <Loadingscreen />;

  return (
    <div className="tour-list-wrapper">
      <div className="tour-list-top-menu-wrapper">
        <div className="container">
          <div className="tour-list-top-menu">
            <div className="tour-list-heading">
              <h3>Things to do in London</h3>
              <p> {tours.length} activities found</p>
            </div>
            <div className="tour-list-search-toolbars">
              <div className="tour-list-sorting">
                <strong>Sort By:</strong>

                <select className="tour-list-dropdown" name="" id="">
                  <option value="">Popularity</option>
                  <option value="">Name</option>
                  <option value="">Date</option>
                  <option value="">Price</option>
                </select>
              </div>

              <div className="hidden tour-list-filters">
                <strong>Filters: </strong>

                <select name="" id="" className="tour-list-dropdown">
                  <option value="">Availability</option>
                  <option value="">Theme</option>
                  <option value="">Duration</option>
                  <option value="">Destination</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tour-list-main">
          <div className="tour-list-main-left-filter-wrapper">
            <div className="list-main-left-filter-accordion-wrapper">
              <div className="accordion-header" onClick={toggleDate}>
                <p className="accordion-title">Date</p>
                <span className="accordion-toggle">
                  {isDateOpen ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>
              {isDateOpen && (
                <div className="accordion-body">
                  <div className="list-accordian-option-date">
                    <label htmlFor="option1" className="checkbox-label-date">
                      From
                    </label>
                    <input
                      type="date"
                      value={todayDate}
                      id="option1"
                      onChange={handleDateChange}
                      className="date-box"
                    />
                  </div>

                  <div className="list-accordian-option-date">
                    <label htmlFor="option1" className="checkbox-label-date">
                      To
                    </label>
                    <input type="date" id="option1" className="date-box" />
                  </div>

                  <div className="btn-type-4">
                    <p>Check Availability</p>
                  </div>
                </div>
              )}
            </div>

            {/* 2st filter */}
            <div className="list-main-left-filter-accordion-wrapper">
              <div className="accordion-header" onClick={toggleTheme}>
                <p className="accordion-title">Theme</p>
                <span className="accordion-toggle">
                  {isThemeOpen ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>
              {isThemeOpen && (
                <div className="accordion-body">
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Water activities
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option2" className="checkbox" />
                    <label htmlFor="option2" className="checkbox-label">
                      Good for social distancing
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option3" className="checkbox" />
                    <label htmlFor="option3" className="checkbox-label">
                      Adrenaline
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Nature
                    </label>
                  </div>

                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Hidden gems
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Street art & grafitti
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Food
                    </label>
                  </div>

                  <div className="list-accordian-option-more">
                    <p>Show More Destinations</p>
                  </div>
                </div>
              )}
            </div>
            {/* 3rd filter */}

            <div className="list-main-left-filter-accordion-wrapper">
              <div className="accordion-header" onClick={toggleDuration}>
                <p className="accordion-title">Duration</p>
                <span className="accordion-toggle">
                  {isDurationOpen ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>
              {isDurationOpen && (
                <div className="accordion-body">
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      0-3 hours
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option2" className="checkbox" />
                    <label htmlFor="option2" className="checkbox-label">
                      3-5 hours
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option3" className="checkbox" />
                    <label htmlFor="option3" className="checkbox-label">
                      5-7 hours
                    </label>
                  </div>

                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Full day (7+ hours)
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Multi-day
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* 4nd filter */}
            <div className="list-main-left-filter-accordion-wrapper">
              <div className="accordion-header" onClick={toggleDestination}>
                <p className="accordion-title">Destinations</p>
                <span className="accordion-toggle">
                  {isDestinationOpen ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>
              {isDestinationOpen && (
                <div className="accordion-body">
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Biscayne Bay
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option2" className="checkbox" />
                    <label htmlFor="option2" className="checkbox-label">
                      Downtown Miami
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option3" className="checkbox" />
                    <label htmlFor="option3" className="checkbox-label">
                      Everglades National Park
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Port of Miami
                    </label>
                  </div>

                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Fisher Island
                    </label>
                  </div>
                  <div className="list-accordian-option">
                    <input type="checkbox" id="option1" className="checkbox" />
                    <label htmlFor="option1" className="checkbox-label">
                      Coconut Grove
                    </label>
                  </div>

                  <div className="list-accordian-option-more">
                    <p>Show More Destinations</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="tour-list-main-right-cards-wrapper">
            {tours.map((tour, index) => (
              <Link key={tour.id} href={`/tours/london/${tour.tourSlug}`}>
                <div className="tour-list-main-card">
                  <div className="tour-list-main-card-left-info">
                    <div className="tour-list-main-card-left-info-image">
                      <Image
                        src={tour.image}
                        alt={tour.tourName}
                        width={150}
                        height={140}
                      />
                    </div>
                    <div className="tour-list-main-card-left-info-details">
                      <div className="tour-list-main-card-left-info-details-top">
                        <span className="info-details-top-activity">
                          {/* {tour.title} */}
                          {tour.category ? tour.category : `Activity ${index + 1}`}
                          
                        </span>
                        <span className="info-details-top-stars">
                          {Array.from({
                            length: Math.floor(Number(tour?.stars) || 0),
                          }).map((_, i) => (
                            <IoMdStar key={i} />
                          ))}
                        </span>
                        <span className="info-details-top-reviews">
                          ({tour.reviews} reviews)
                        </span>
                      </div>
                      <div className="tour-list-main-card-left-info-details-middle">
                        <h4>{tour.tourName}</h4>
                      </div>
                      <div className="tour-list-main-card-left-info-details-bottom">
                        <span>
                          <MdOutlineAccessTime /> {tour.duration}{" "}
                        </span>
                        {tour.transport && (
                          <span>
                            <FaCarSide /> Transport
                          </span>
                        )}
                        {tour.familyPlan && (
                          <span>
                            <MdOutlinePeopleOutline /> Family plan
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="tour-list-main-card-right-price">
                    <div className="featured-destinations-slider-footer-right">
                      <h3>${Number(tour.price || 0).toFixed(2)}</h3>

                      <p className="mb-[5px]">per person</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="tour-list-main-cards-more" onClick={moreCards}>
              <p>Load More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
