import { useEffect, useState } from "react";
import drink from "../../global-menu/drink";
export default function Orderdrink() {
  const [storage, setStorage] = useState(() => {
    const storedData = window.localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("storage", JSON.stringify(storage));
  }, [storage]);

  const handleClick = (title, price) => {
    setStorage([...storage, { title: title, price: price }]);
  };
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center items-center">
        <h1 className="font-primary text-[30px] lg:text-[50px] text-slate-800">
          Drinks
        </h1>
      </div>
      <div className="w-full p-2 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-6">
          {drink.map((item, index) => (
            <div
              key={index}
              className=" w-[180px] lg:w-[250px] lg:h-[300px] bg-base-100 ring-4 ring-amber-500 shadow-xl shadow-black/30 rounded-xl"
            >
              <div className="justify-center items-center m-2">
                <img
                  className="w-[200px] lg:w-[240px] h-[130px] lg:h-[190px] rounded-xl"
                  src={item.img}
                />
              </div>
              <div className=" lg:h-[120px] pl-4">
                <h3 className="text-[15px] font-primary font-bold">
                  {item.title}
                </h3>
                <p className="text-[12px] font-secondary font-semibold">
                  Rp.{item.price}000{" "}
                </p>
                <button
                  onClick={() => handleClick(item.title, item.price)}
                  className="border-2 border-amber-500 rounded-full mb-4 px-2 py-0 lg:px-4 lg:py-1 font-semibold hover:bg-amber-700 hover:text-white"
                >
                  + Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
