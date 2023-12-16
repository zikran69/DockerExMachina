import Menulist from "../component/Order/menulist";
import Orderlist from "../component/Order/orderlist";
import Navbar from "../component/home/Navbar";

export default function Order() {
  return (
    <>
      <Navbar />
      <Menulist />
      {/* <div className="p-2">
        <Orderlist />
      </div> */}
    </>
  );
}
