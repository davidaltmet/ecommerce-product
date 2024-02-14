import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Arrows";
import imgProduct1 from "../assets/images/image-product-1.jpg";
import imgProduct2 from "../assets/images/image-product-2.jpg";
import imgProduct3 from "../assets/images/image-product-3.jpg";
import imgProduct4 from "../assets/images/image-product-4.jpg";

const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

function ProductCarruselMobile() {
  const settings = {
    dots: false,
    Infinity: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section className="w-full  md:hidden relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`imgProduct ${index + 1}`}
            className="w-full   object-center "
          />
        ))}
      </Slider>
    </section>
  );
}

export default ProductCarruselMobile;
