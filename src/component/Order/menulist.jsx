export default function Menulist() {
  return (
    <div className="w-full lg:pt-[120px] pt-[60px] bg-slate-500">
      <h1>Drink</h1>
      <div className="grid lg:grid-flow-row-4">
        <div className="p-2">
          <div className="card w-[200px] lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[200px] lg:w-96 h-[150px] lg:h-[250px]"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary ">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button className="badge badge-outline p-4">+ Pesan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
