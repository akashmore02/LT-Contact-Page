import "./App.css";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Map from "./components/Map";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <div className="max-w-screen h-screen ">
        <div>
          <div className="w-full h-20 flex mb-20">
            <div className=" h-60 w-60 m-10 ml-24 ">
              <img src="../src/assets/Laser Technologies Logo.png" alt="" />
            </div>
          </div>
          <div>
            <Form />
          </div>
          <div className="mt-24">
            <Map />
          </div>
          <div className="mb-12">
            <CardsSection />
          </div>
          <div className="relative ">
            <div className=" mb-32 ">
              <Footer />
            </div>
            <div
              className="flex justify-center items-center  bg-red-600 p-6 
              sm:w-[1170px]  w-[372px] sm:ml-20 ml-2
          shadow-lg absolute   bottom-48  rounded-tr-md rounded-bl-md rounded-tl-4xl  rounded-br-4xl "
            >
              <Newsletter />
            </div>
            <div className="w-full  flex justify-end bg-black ">
              <div className="  mt-24 mr-20 mb-20 text-2xl ml-4">
                <img src="../src/assets/laserLogo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
