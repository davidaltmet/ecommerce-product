import { useState, useEffect } from "react";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../assets/images/icon-delete.svg";

function Cart({ openCart, totalContador, setTotalContador }) {
  const [eliminarProducto, setEliminarProducto] = useState(false);

  const handleEliminarProducto = () => {
    if (totalContador > 0) {
      setTotalContador(0);
      setEliminarProducto(true);
    }
  };

  useEffect(() => {
    if (totalContador > 0 && eliminarProducto) {
      setEliminarProducto(false);
    }
  }, [totalContador, eliminarProducto]);

  const calcularTotal = () => {
    const precio = 125.0;
    const total = precio * totalContador;
    return total.toFixed(2);
  };

  return (
    <div
      className={`w-full md:w-1/2 xl:w-1/3 p-4 h-56 md:h-64 absolute  top-28  md:top-16
      right-0 md:right-0 z-40 e transform ${
        openCart ? "scale-100" : "scale-0"
      } transition-transform `}
    >
      <div className={` h-full  p-4  rounded-md shadow-2xl bg-white  `}>
        <h3 className="text-Verydarkblue font-bold">Cart</h3>
        {totalContador > 0 && eliminarProducto === false && (
          <div className="w-full">
            <div className="w-full flex space-x-3 pt-4">
              <div className="w-14">
                <img
                  src={thumbnail1}
                  alt="thumbalain1"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-2/3 flex flex-col gap-1">
                <span className="text-16">Fall Limited Edition Sneakers</span>
                <div className="space-x-2">
                  <span className="">$125.00</span>
                  <span className="">{`x ${totalContador}`}</span>
                  <span className="">{calcularTotal()}</span>
                </div>
              </div>
              <div className="w/14 flex items-center">
                <img
                  src={iconDelete}
                  alt="delete"
                  className="cursor-pointer"
                  onClick={handleEliminarProducto}
                />
              </div>
            </div>

            <button className="w-full mt-5 bg-Orange py-2 rounded-md text-white font-semibold">
              Checkout
            </button>
          </div>
        )}
        {totalContador === 0 && (
          <div className="w-full h-full justify-center items-center flex">
            <span className="text-16 text-Verydarkblue">
              Your cart is empty
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
