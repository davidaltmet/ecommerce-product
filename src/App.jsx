import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import InfoProduct from "./components/InfoProduct";
import Loading from "./components/Loading";

const mostraEfectoMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return { openMenu, handleMenuOpen };
};

const AnimationInicial = () => {
  const [efectCont, setEfectCont] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEfectCont(true);
    }, 3000);
  }, []);

  return { efectCont };
};

const efectLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return { loading };
};

function App() {
  const { loading } = efectLoading();
  const { efectCont } = AnimationInicial();
  const { openMenu, handleMenuOpen } = mostraEfectoMenu();

  const [contador, setContador] = useState(0);
  const [totalContador, setTotalContador] = useState(0);

  const handleAddToTotalContador = () => {
    setTotalContador(totalContador + contador);
    setContador(0);
  };

  return (
    <main className="w-full min-h-screen relative">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="md:px-10 md:pt-4 xl:px-28 xl:pt-6 relative">
            <Header
              totalContador={totalContador}
              setTotalContador={setTotalContador}
              openMenu={openMenu}
              handleMenuOpen={handleMenuOpen}
              efectCont={efectCont}
            />
            <div className="w-full md:px-6 xl:px-14 pt-4 md:pt-10 flex flex-col md:flex-row  md:space-x-16 xl:space-x-40  items-centerco overflow-hidden ">
              <Product efectCont={efectCont} />
              <InfoProduct
                contador={contador}
                setContador={setContador}
                handleAddToTotalContador={handleAddToTotalContador}
                efectCont={efectCont}
              />
            </div>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20 
      ${openMenu ? "block" : "hidden"}`}
          ></div>
        </>
      )}
    </main>
  );
}

export default App;
