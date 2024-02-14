import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import closeOrange from "../assets/images/closeOrange.svg";
import { PrevArrow, NextArrow } from "./Arrows";
import imgProduct1 from "../assets/images/image-product-1.jpg";
import imgProduct2 from "../assets/images/image-product-2.jpg";
import imgProduct3 from "../assets/images/image-product-3.jpg";
import imgProduct4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

function ProductCarrusel({ handleOpenCarrusel, openCarrusel }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div
      className={`w-full h-screen absolute top-0 left-0 z-20 bg-black bg-opacity-75 flex justify-center items-center  ${
        openCarrusel ? "translate-y-0 " : "-translate-y-full "
      } transition-transform`}
    >
      <div className="w-30  space-y-2">
        <div className="w-full relative ">
          <div className="w-full py-2 flex justify-end cursor-pointer ">
            <img
              src={closeOrange}
              alt="close"
              className="w-5"
              onClick={handleOpenCarrusel}
            />
          </div>
          <Slider {...settings} initialSlide={currentSlide}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`imgProduct${index + 1}`}
                className="w-full object-cover rounded-2xl"
              />
            ))}
          </Slider>
        </div>
        <div className="px-5">
          <div className="w-full grid grid-cols-4 gap-2 mt-2">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className={`relative rounded-lg cursor-pointer `}
              >
                <img
                  src={thumbnail}
                  alt={`thumbnail-${index + 1}`}
                  className="rounded-lg cursor-pointer hover:opacity-60 "
                />
                <div
                  className={`w-full h-full cursor-pointer absolute top-0 left-0 ${
                    index === currentSlide
                      ? "bg-white bg-opacity-60 border border-Orange rounded-lg"
                      : "hidden"
                  } `}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarrusel;
