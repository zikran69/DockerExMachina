import Orderdrink from "./orderdrink";
import Orderfood from "./orderfood";
import Orderlist from "./orderlist";

export default function menulist() {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:pt-[120px] pt-[60px]">
      <div className="lg:w-[300px] fixed left-0">
        <Orderlist />
      </div>
      <div className="lg:w-[1600px] lg:ml-[270px]">
        <Orderdrink />
        <Orderfood />
      </div>
    </div>
  );
}
