import { useState } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import ProductCarrusel from "./ProductCarrusel";
import ProductCarruselMobile from "./ProductCarruselMobile";

function Product({ efectCont }) {
  const [openCarrusel, setOpenCarrusel] = useState(false);

  const handleOpenCarrusel = () => {
    setOpenCarrusel(!openCarrusel);
  };
  return (
    <div className="w-full md:w-1/2 xl:w-2/5 ">
      <section className="hidden md:block  w-full">
        <div
          className={`space-y-6 transform ${
            efectCont
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } duration-300`}
        >
          <div className="w-full">
            <img src={product1} alt="" className="w-full rounded-2xl" />
          </div>
          <div className="w-full grid grid-cols-4 gap-10">
            <div className="relative rounded-lg" onClick={handleOpenCarrusel}>
              <img
                src={thumbnail1}
                alt="thumbnail1"
                className="rounded-lg cursor-pointer hover:opacity-60 transition-opacity "
              />
              <div className="w-full h-full cursor-pointer absolute top-0 left-0 bg-white bg-opacity-60 border border-Orange rounded-lg  "></div>
            </div>

            <div className="relative rounded-lg" onClick={handleOpenCarrusel}>
              <img
                src={thumbnail2}
                alt="thumbnail2"
                className="rounded-lg cursor-pointer hover:opacity-60 transition-opacity"
              />
            </div>
            <div className="relative rounded-lg" onClick={handleOpenCarrusel}>
              <img
                src={thumbnail3}
                alt="thumbnail3"
                className="rounded-lg cursor-pointer hover:opacity-60 transition-opacity"
              />
            </div>
            <div className="relative rounded-lg" onClick={handleOpenCarrusel}>
              <img
                src={thumbnail4}
                alt="thumbnail4"
                className="rounded-lg cursor-pointer hover:opacity-60 transition-opacity"
              />
            </div>
          </div>
        </div>
        {/* producto carrusel dektop */}
        <ProductCarrusel
          handleOpenCarrusel={handleOpenCarrusel}
          openCarrusel={openCarrusel}
        />
      </section>

      {/* carrusel product mobile */}
      <ProductCarruselMobile />
    </div>
  );
}

export default Product;
