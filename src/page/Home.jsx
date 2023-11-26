import Navbar from "../component/home/Navbar";
import Body from "../component/home/Body";
import About from "../component/home/About";
import Footer from "../component/home/Footer";
import Header from "../component/home/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <About />
      <Footer />
    </>
  );
}
