"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import axios from "axios"; 

const TourCards = ({ data = [] }) => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [liked, setLiked] = useState({}); // Track liked state per card

  const postToWishlist = async (items) => {
    try {
      const response = await axios.post("http://localhost:5000/wishlist", items);
      console.log("Added to wishlist:", response.data);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const toggleLike = (index, items) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    console.log(items, 'items')
    if (liked) {
      postToWishlist(items);
    }
  };

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No tours available.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center w-full">
        {data.slice(0, visibleCount).map((items, index) => (
          <Link
            href={`/${items.link}`}
            className={`relative m-1 h-[250px] md:h-[300px] lg:h-[440px] ${
              index === 0 ? "w-[91%] lg:w-[98%]" : "w-[45%] lg:w-[24%]"
            }`}
            key={index}
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src={items.imageUrl}
                fill
                className="object-cover"
                alt={items.name}
              />
            </div>
            <div className="forShadow inset-0 -z-10 flex flex-col justify-between h-full px-3 pb-3">
              <a
                type="button"
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  toggleLike(index, items);
                }}
                className="flex justify-end m-4"
              >
                <figure className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300 ease-in-out">
                  <FaHeart color={liked[index] ? "#de1616" : "#1A2B48"} />
                </figure>
              </a>

              <div>
                <span className="text-[18px] md:text-[20px] lg:text-[24px] text-white">
                  {items.name}
                </span>
                <div className="flex flex-wrap gap-1 md:gap-2 text-white text-[13px] md:text-[16px] w-full">
                  <span>{items.duration}</span>
                  <span>From Rs{items.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < data.length && (
        <button
          onClick={handleShowMore}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default TourCards;
