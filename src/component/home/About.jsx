import baliklogo from "/src/assets/baliklogo.png";
import ig from "/src/assets/ig.png";
import location from "/src/assets/location.jpg";
export default function About() {
  return (
    <div id="About" className="w-full px-6 py-6 pt-4">
      <div
        className="w-auto rounded-2xl shadow-lg shadow-black/50  "
        style={{
          backgroundImage: `url(${baliklogo})`,
          backgroundSize: "500px",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="font-primary font-bold text-[25px] lg:text-[50px] justify-center items-center px-[60px] lg:px-[430px] text-amber-800">
          Temukan Kami Di :
        </h2>
        <div className="flex flex-col lg:flex-row sm:divide-y-2 lg:divide-x-4 justify-center items-center py-2 px-4">
          <div
            onClick={() =>
              window.open("https://www.instagram.com/balik.coffee/")
            }
            className="m-2 lg:w-[500px] h-[50px] w-auto flex flex-row justify-center items-center "
          >
            <img className="h-10 lg:h-20 rounded-xl" src={ig} alt="" />
            <p className="ml-2 text-white font-bold text-[25px] lg:text-[50px]">
              <a href="https://www.instagram.com/balik.coffee/">
                @balik.coffee
              </a>
            </p>
          </div>
          <div className="w-auto p-2 flex flex-col gap-4">
            <img
              className="w-[50px] lg:w-[80px] rounded-full mx-[120px] lg:mx-[300px]"
              src={location}
              alt=""
            />
            <iframe
              className="lg:ml-6 mb-2 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5090613252125!2d106.84513044456631!3d-6.1282632317972885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f038355c487%3A0x47c5131d584326bb!2sBalik%20coffee!5e0!3m2!1sen!2sid!4v1702848620937!5m2!1sen!2sid"
              width={{ lg: "500px", md: "500px", sm: "300px" }}
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
