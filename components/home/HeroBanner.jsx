"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from 'next/navigation';



const HeroBanner = () => {
  const [videoPopUp, setVideoPopUp] = useState(false);
  const [destinationName, setdestinationName] = useState("");
  const [noOFGuests, setNoOfGuests] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guestError, setGuestError] = useState("");
  const [dateError, setDateError] = useState("");
  const router = useRouter(); 

  const playVideo = () => {
    setVideoPopUp(!videoPopUp);
    console.log("startplaying changd");
  };
  const closeModal = () => {
    setVideoPopUp(false);
  };

  const toggleValidate = (name, numOfGuests, date) => {
    let isValid = true;
    if ( !destinationName || numOfGuests < 1 || numOfGuests > 25 || isNaN(numOfGuests)) {
      setGuestError("Select between 1 and 25.");
      isValid = false;
    } else {
      setGuestError("");
    }

    const today = new Date();
    const selectedDate = new Date(date);
    if (selectedDate < today) {
      setDateError("Invalid Date.");
      isValid = false;
    } else {
      setDateError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    const isValid = toggleValidate(destinationName, noOFGuests, travelDate);
    if (isValid) {
      const url = `/tours/${destinationName}?guestnumber=${noOFGuests}&date=${travelDate}`;
      console.log("Form is valid!");
      router.push(url); 
    }
  };
  const todayDate = new Date().toISOString().split('T')[0];


  return (
    <div className="hero-banner-wrapper">
      <div className="hero-background-video-gradient"></div>

      <video autoPlay muted loop className="hero-background-video">
        <source
          src="/assets/media/home/herobanner/herobanner/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-banner-information">
        <div className="hero-banner-title">
          <h1>We Find The Best Tours For You</h1>
        </div>

        <div className="hero-banner-description">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="hero-banner-play">
          <div className="hero-banner-play-btn" onClick={playVideo}>
            <FaPlay />
          </div>

          <div className="hero-banner-play-info ">Watch Video</div>
        </div>
      </div>

      <div className="hero-banner-searchbox">
        <div className="searchbox-content">
          {/* Location Field */}
          <div className="hero-searchbox-item-1">
            <div className="searchbox-items-icon">
              <FaLocationDot />
            </div>
            <div className="searchbox-items-info">
              <p>Location</p>
              <input
                name="query"
                placeholder="Search for a destination"
                onChange={(e) => setdestinationName(e.target.value)}
              />
            </div>
          </div>

          {/* Guests Field */}
          <div className="hero-searchbox-item-1">
            <div className="searchbox-items-icon">
              <PiUsersFill />
            </div>
            <div className="searchbox-items-info">
              <p>Guests</p>
              <input
                type="number"
                name="guests"
                placeholder="How many guests?"
                value={noOFGuests} 
                className="relative"
                onChange={(e) => setNoOfGuests(e.target.value)}
                onBlur={() => toggleValidate( destinationName, noOFGuests, travelDate)} 
                min="1"
                step="1"
              />
          
            </div>
          </div>

          {/* Date Field */}
          <div className="hero-searchbox-item-1">
            <div className="searchbox-items-icon">
              <SlCalender />
            </div>
            <div className="searchbox-items-info">
              <p>Date</p>
              <input
                type="date"
                placeholder="Pick a date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
              onBlur={() => toggleValidate(destinationName, noOFGuests, travelDate)} // Trigger validation on blur
              min={todayDate} 
            />
              
            </div>
          </div>

          {/* Submit Button */}
          <div className="searchbox-searchbar">
            <div className="btn-type-2" onClick={handleSubmit}>
              Search
            </div>
          </div>
        </div>
      </div>

      {/* Modal-video */}
      {videoPopUp && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-modal-header">
              <button onClick={closeModal} className="close-btn">
                <IoIosCloseCircle />
              </button>
            </div>
            <div className="video-player-container">
              <video width="100%" height="100%" controls autoPlay>
                <source
                  src="/assets/images/hero-banner-3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
