import drink from "../../global-menu/drink";
export default function Orderdrink() {
  return (
    <div className="w-full lg:pt-[120px] pt-[60px]">
      <div className="w-full flex justify-center items-center">
        <h1 className="font-primary text-[30px] lg:text-[50px]">Drinks</h1>
      </div>
      <div className="w-full p-2 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-6">
          {drink.map((item, index) => (
            <div
              key={index}
              className="card w-[180px] lg:w-[200px] lg:h-[250px] bg-base-100 border-4 border-amber-500 shadow-xl shadow-black/30"
            >
              <figure>
                <img
                  className="w-[200px] lg:w-[190px] h-[130px] lg:h-[250px]"
                  src={item.img}
                />
              </figure>
              <div className="card-body lg:h-[120px] p-4">
                <h3 className="card-title text-[15px]">{item.title}</h3>
                <p className="text-[12px]">Rp.{item.price}000 </p>
                <button className="badge badge-outline p-2">+ Pesan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
