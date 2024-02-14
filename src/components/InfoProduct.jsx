import cartWhite from "../assets/images/icon-cart-withe.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

function InfoProduct({
  contador,
  setContador,
  handleAddToTotalContador,
  efectCont,
}) {
  const handleContadorMas = () => {
    setContador(contador + 1);
  };

  const handleContadorMenos = () => {
    setContador(contador > 0 ? contador - 1 : contador);
  };

  return (
    <section
      className={`w-full p-5 md:w-1/2 xl:w-2/5 flex flex-col gap-4  md:gap-8 ${
        efectCont ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } duration-300`}
    >
      <span className="text-Orange uppercase text-16">sneaker company</span>
      <h1 className="text-2xl font-bold">Fall Limeted Edition Sneakers</h1>
      <p className="text-16 text-left text-Darkgrayishblue ">
        These low-profile sneakers are your perfect casual wear companion.
        featuring a durable rubber outer sole, they withtstand everything the
        weather can ofter
      </p>
      <div className="flex flex-row md:flex-col justify-between md:space-y-2  ">
        <div className="flex space-x-10  ">
          <span className="text-xl font-bold">125.00</span>
          <span className="text-md flex items-center text-Orange font-semibold">
            50%
          </span>
        </div>
        <span className="line-through text-Grayishblue text-sm">$250.00</span>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:space-x-6 ">
        <div className="flex p-3 md:p-0 items-center justify-between md:space-x-10 w-full md:w-1/3">
          <button className="cursor-pointer" onClick={handleContadorMenos}>
            <img src={minus} alt="minus" className="" />
          </button>
          <span className="text-xl">{contador}</span>
          <button className="cursor-pointer">
            <img
              src={plus}
              alt="plus"
              className=""
              onClick={handleContadorMas}
            />
          </button>
        </div>

        <button
          className="w-full md:w-2/3  flex items-center justify-center  py-4 md:py-2   bg-Orange text-white font-semibold rounded-md hover:opacity-60 transition-opacity"
          onClick={handleAddToTotalContador}
        >
          <img src={cartWhite} alt="" className="pr-5  text-16 md:text-sm" />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default InfoProduct;
