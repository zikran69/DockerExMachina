import { useState } from "react";
import drink from "../../global-menu/drink";

export default function Drinkcard() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === drink.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? drink.length - 1 : prevSlide - 1,
    );
  };

  return (
    <div className="bg-white w-[350px] h-[300px] rounded-xl shadow-md shadow-slate-400 relative overflow-hidden">
      {/* Carousel */}
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{
          transform: `translateX(-${activeSlide * 100}%)`,
          height: "100%",
        }}
      >
        {drink.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-4"
            style={{ flex: "0 0 100%" }}
          >
            <div className="pt-2">
              <img
                className="w-[220px] h-[220px] rounded-[40px] brightness-75 shadow-amber-700 shadow-md"
                src={item.img}
                alt=""
              />
            </div>
            <div className="bg-amber-700 font-secondary font-bold text-[20px] text-white p-2 mt-2 rounded-2xl shadow-amber-700 shadow-md">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Next dan Prev */}
      <button
        onClick={prevSlide}
        className="text-[40px] text-slate-800 ri-arrow-left-s-line absolute top-1/2 left-2 transform -translate-y-1/2"
      ></button>
      <button
        onClick={nextSlide}
        className="text-[40px] text-slate-800 ri-arrow-right-s-line absolute top-1/2 right-2 transform -translate-y-1/2"
      ></button>
    </div>
  );
}
