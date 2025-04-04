"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileData from "@/public/assets/data/profile.json";
import { FaCakeCandles } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Page = () => {
  const [currentCategory, setCurrentCategory] = useState("profileInfo");
  const [profile, setProfile] = useState({
    name: profileData.name,
    dob: profileData.dob,
    phone: profileData.phone,
    email: profileData.email,
    location: profileData.location,
    password: profileData.password,
    confirmPassword: ""
  });

  useEffect(() => {
    console.log(profileData);
  }, []);

  const toggleCategory = (categoryChange) => {
    setCurrentCategory(categoryChange);
  };
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <section className="profile-section-wrapper">
      <div className="profile-wrapper">
        <div className="profile-top-menu-wrapper">
          <div className="container">
            <div className="profile-top-menu">
              <div className="profile-heading">
                <h3>My Profile</h3>
                <p>
                  <Link href={"/"}>Home </Link> / My Profile
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="profile-content">
            <div className="profile-section">
              <div className="profile-section-data">
                <div className="profile-section-data-image-wrapper">
                  <div className="profile-section-data-image">
                    <Image
                      src={profileData.photoURL}
                      alt="profile image"
                      width={120}
                      height={120}
                    />
                    <div className="edit-icon">
                      <MdEdit />
                    </div>
                  </div>
                </div>
                <div className="profile-section-data-info">
                  <div className="profile-section-data-info-name">
                    <p>{profileData.name}</p>
                  </div>
                  <div className="profile-section-data-info-contact">
                    <p>
                      <MdLocationPin />
                      {profileData.location}
                    </p>
                    <span>|</span>
                    <p>
                      <FaCakeCandles />
                      {profileData.birthDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="profile-section-categories">
                <ul className="profile-section-category-list-wrapper">
                  <li
                    className={`profile-section-category-list 
                  ${
                    currentCategory === "profileInfo" ? "activeCategory" : ""
                  }                         
                   `}
                    onClick={() => {
                      toggleCategory("profileInfo");
                    }}
                  >
                    Profile Informations
                  </li>
                  <li
                    className={`profile-section-category-list 
                  ${
                    currentCategory === "bookingHistory" ? "activeCategory" : ""
                  }                         
                   `}
                    onClick={() => {
                      toggleCategory("bookingHistory");
                    }}
                  >
                    Bookings History
                  </li>

                  <li
                    className={`profile-section-category-list 
                  ${
                    currentCategory === "newsLetter" ? "activeCategory" : ""
                  }                  
                   `}
                    onClick={() => {
                      toggleCategory("newsLetter");
                    }}
                  >
                    Newsletter Subscription
                  </li>

                  <li
                    className={`profile-section-category-list 
                  ${
                    currentCategory === "notifications" ? "activeCategory" : ""
                  }                         
                   `}
                    onClick={() => {
                      toggleCategory("notifications");
                    }}
                  >
                    Manage Notifications
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-information">
              {currentCategory === "profileInfo" && (
                <div className="profile-information-personal-information">
                  <div className="personal-information">
                    <div className="personal-information-title">
                      <p>Personal Information</p>
                    </div>
                    <div className="info-field">
                      <label>Name: </label>
                      <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={profile.name}
                      />
                    </div>
                    <div className="info-field">
                      <label>Date of Birth:</label>
                      <input
                        name="dob"
                        type="date"
                        onChange={handleChange}
                        value={profile.dob}
                      />
                    </div>
                    <div className="info-field">
                      <label>Phone:</label>
                      <input
                        name="phone"
                        type="tel"
                        onChange={handleChange}
                        value={profile.phone}
                      />
                    </div>
                    <div className="info-field">
                      <label>Location:</label>
                      <input
                        name="location"
                        type="text"
                        onChange={handleChange}
                        value={profile.location}
                      />
                    </div>
                    <div className="btn-type-5">save</div>
                  </div>
                  <div className="security-information">
                    <div className="security-information-title">
                      <p>Security</p>
                    </div>
                    <div className="info-field">
                      <label>email address: </label>
                      <input
                        className="no-cap-placeholder"
                        name="email"
                        type="text"
                        onChange={handleChange}
                        value={profile.email}
                      />
                    </div>
                    <div className="info-field">
                      <label>Password:</label>
                      <input
                        name="dob"
                        type="password"
                        className="no-cap-placeholder"
                        onChange={handleChange}
                        value={profile.password}
                      />
                    </div>
                    <div className="info-field">
                      <label>Confirm Password:</label>
                      <input
                        name="confirm-phone"
                        className="no-cap-placeholder"
                        type="password"
                        onChange={handleChange}
                        value={profile.confirmPassword}
                      />
                    </div>
                  
                    <div className="btn-wrapper">
                      <div className="btn-type-5">
                          save
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {currentCategory === "bookingHistory" && (
                <div className="profile-information-personal-bookingHistory">
                  Bookings History{" "}
                </div>
              )}
              {currentCategory === "newsLetter" && (
                <div className="profile-information-newsLetter">
                  Newsletter Subsciption{" "}
                </div>
              )}
              {currentCategory === "notifications" && (
                <div className="profile-information-notifications">
                  Manage Notifications
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
