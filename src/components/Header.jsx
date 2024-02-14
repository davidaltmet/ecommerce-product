import { useState } from "react";
import { GenerarNavItems, navItems } from "./GenerarNavItems";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";
import Cart from "./Cart";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

function Header({
  totalContador,
  setTotalContador,
  openMenu,
  handleMenuOpen,
  efectCont,
}) {
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="w-full p-5 md:p-0 flex justify-between items-center relative">
      <div className="flex md:space-x-10">
        <div className="flex md:block space-x-3 md:space-x-0">
          <img
            src={iconMenu}
            alt="hamburguer"
            className="w-6 md:hidden"
            onClick={handleMenuOpen}
          />
          <img src={logo} alt="logo" className="" />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">{GenerarNavItems(navItems)}</ul>
        </nav>
      </div>
      <div className="flex space-x-3 md:space-x-8 items-center">
        <div className="relative cursor-pointer" onClick={handleOpenCart}>
          <img
            src={cart}
            alt="cart"
            className={`transform ${
              efectCont ? "scale-100" : "scale-0"
            } duration-300`}
          />
          <span className="w-5 h-5 absolute -top-2 -right-2 rounded-full bg-Orange flex justify-center items-center ">
            {totalContador}
          </span>
        </div>
        <img
          src={avatar}
          alt="avatar"
          className={`w-10 cursor-pointer border-2 border-transparent rounded-full hover:border-Orange transition-colors  transform ${
            efectCont ? "pacity-100" : "opacity-0"
          } duration-300`}
        />
      </div>

      {/* nav mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-white p-5 z-30 space-y-12 transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="w-6" onClick={handleMenuOpen}>
          <img src={iconClose} alt="iconClase" className="w-full" />
        </div>
        <nav className="">
          <ul className="text-16 font-bold">{GenerarNavItems(navItems)}</ul>
        </nav>
      </div>
      <Cart
        openCart={openCart}
        totalContador={totalContador}
        setTotalContador={setTotalContador}
      />
    </div>
  );
}

export default Header;
