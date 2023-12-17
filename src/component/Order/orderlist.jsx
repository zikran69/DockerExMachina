import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Orderlist() {
  // let navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/order");
  // };
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    const storedData = window.localStorage.getItem("storage");
    setStorage(JSON.parse(storedData));
  }, []);

  const groupByTitle = () => {
    const groupedItems = {};
    storage.forEach((item) => {
      if (!groupedItems[item.title]) {
        groupedItems[item.title] = { totalLength: 0, items: [] };
      }
      groupedItems[item.title].totalLength += item.title.length;
      groupedItems[item.title].items.push(item);
    });
    return groupedItems;
  };

  const groupedItems = groupByTitle();

  return (
    <div className="bg-black/50 w-screen h-screen flex justify-center ">
      <div className="m-2 border-2 rounded-xl bg-white w-[300px] lg:w-[1000px] px-4 mt-[60px] lg:mt-[120px]">
        <div className="flex justify-between items-center lg:text-[30px] text-[20px]">
          <h1 className="font-primary text-stone-700">your order:</h1>
          <p
            // onClick={handleClick}
            className="ring-2 ring-red-500 rounded-full w-[30px] h-[30px] items-center justify-center flex font-none pb-2 hover:bg-red-600 hover:text-white"
          >
            x
          </p>
        </div>
        <hr className="bg-slate-500 w-full h-1" />
        <div className="flex flex-row justify-between items-center font-secondary text-[11px] ">
          <div className="flex-1">Name Order</div>
          <div className="flex-1">Total Item</div>
          <div className="flex-1">Total Price</div>
          <div className="flex-1">Action</div>
        </div>
        <hr className="bg-slate-500 w-full h-1" />
        <div className="flex flex-col gap-2 font-custom1 font-semibold text-[15px] lg:text-[20px]">
          {Object.entries(groupedItems).map(
            ([title, { totalLength, items }], index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-start mt-2"
              >
                <div className="flex-1">{title}</div>
                <div className="flex-1 ml-6">{totalLength}</div>
                <div className="flex-1">
                  Rp.
                  {items.reduce(
                    (sum, item) => sum + item.price * totalLength,
                    0,
                  )}
                  .000
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="ri-delete-bin-5-line cursor-pointer ring-1 ring-red-500 rounded-full mx-1 px-1 py-0 hover:bg-red-700 hover:text-white">
                    Cancel
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="flex justify-center items-start lg:text-[20px] text-[15px] pr-[30px] m-2">
          Total bayar: Rp.
          {groupedItems &&
            Object.values(groupedItems).reduce((sum, { items }) => {
              const totalLength = items.reduce(
                (lengthSum, item) => lengthSum + item.title.length,
                0,
              );
              return (
                sum +
                items.reduce(
                  (itemSum, item) => itemSum + item.price * totalLength,
                  0,
                )
              );
            }, 0)}
          .000
        </div>
      </div>
    </div>
  );
}
