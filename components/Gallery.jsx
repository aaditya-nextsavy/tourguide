"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [allImages, setAllImages] = useState(false);

  useEffect(() => {
    import("../public/assets/data/gallery.json")
      .then((data) => setGalleryImages(data.default))
      .catch((err) => console.error("Failed to load gallery data", err));
  }, []);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const visibleImages = allImages ? galleryImages : galleryImages.slice(0, 8);

  return (
    <motion.div
      className="gallery-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="gallery-title ">
        <div className="gallery-tourguide-info-text">
          <h1 className="tourguide-title-text">From the Gallery</h1>
          <p className="tourguide-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <button className="btn-type-3" onClick={() => setAllImages(!allImages)}>
          {allImages ? "View Less" : "View All"}
        </button>
      </div>

      <div className="gallery-cards-wrapper grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleImages.map((item,index) => (
          <motion.div
            key={item.id}
            className="gallery-card-image"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.url}
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
