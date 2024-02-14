import previous from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";

export const PrevArrow = (e) => {
  const { onClick } = e;
  return (
    <img
      src={previous}
      alt="previuos"
      className="absolute p-6 bg-white top-1/2 left-0    md:-left-7 z-20 rounded-full cursor-pointer"
      onClick={onClick}
    />
  );
};

export const NextArrow = (e) => {
  const { onClick } = e;
  return (
    <img
      src={next}
      alt="next"
      className=" absolute  top-1/2  right-0  md:-right-7 z-20 p-6 bg-white rounded-full cursor-pointer"
      onClick={onClick}
    />
  );
};
