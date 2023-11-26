import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const items = [
  {
    img: "./src/assets/balik1.png",
    text: "Balik Bukan Berarti Pulang",
  },
  {
    img: "./src/assets/balik2.png",
    text: "Rumah Bukan Satu-Satunya Tempat Pulang",
  },
  {
    img: "./src/assets/balik3.png",
    text: "Kopi Mungkin Teman Pulang Terbaik",
  },
];

const Carousel = () => {
  const slider = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "4px", width: "100%" }}>
        <ul style={{ margin: "0", padding: "0", textAlign: "center" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <span
        style={{
          width: "5px",
          height: "5px",
          margin: "10px 5px",
          borderRadius: "50%",
          background:
            i === !slider.current?.state.currentSlide ? "black" : "white",
          transition: "background 0.3s ease",
          display: "inline-block",
        }}
      ></span>
    ),
  };

  return (
    <div className="relative items-center justify-items-center lg:w-[1000px] w-[350px] lg:h-[300px] h-[150px] mt-[10px] rounded-3xl m-2 shadow-lg shadow-black">
      <Slider {...settings} ref={(ref) => (slider.current = ref)}>
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-center rounded-xl">
              <img
                className="lg:w-[1000px] w-[350px] lg:h-[300px] h-[150px] rounded-3xl object-cover  brightness-75 "
                src={item.img}
                alt=""
              />
              <div className="absolute text-white font-custom1 font-semibold text-[23px] lg:text-[50px] p-6 bottom-0 left-0 bg-opacity-75">
                {item.text}
              </div>

              <div className="absolute flex justify-between items-center w-full px-4">
                <button
                  className="ri-arrow-left-s-line text-slate-700 bg-white/50 rounded-full text-[20px] w-[25px]"
                  onClick={() => slider.current && slider.current.slickPrev()}
                />
                <button
                  className="ri-arrow-right-s-line text-slate-700 bg-white/50 rounded-full text-[20px] w-[25px]"
                  onClick={() => slider.current && slider.current.slickNext()}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
