import Menulist from "../component/Order/menulist";
import Orderlist from "../component/Order/orderlist";
import Navbar from "../component/home/Navbar";
import Footer from "../component/home/Footer";

export default function Order() {
  return (
    <>
      <Navbar />
      <div>
        <Menulist />
      </div>
      {/* <div className="fixed bottom-0 right-0">
        <Orderlist />
      </div> */}
      <Footer />
    </>
  );
}
