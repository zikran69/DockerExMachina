import Orderdrink from "./orderdrink";
import Orderfood from "./orderfood";

export default function Menulist() {
  return (
    <div className="flex flex-col w-full lg:pt-[120px] pt-[60px] lg:p-6 pb-4">
      <Orderdrink />
      <Orderfood />
    </div>
  );
}
