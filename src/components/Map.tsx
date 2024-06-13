import logoForMap from "../assets/google map.png";

const Map = () => {
  return (
    <div>
      <div className="relative h-screen max-w-screen">
        <iframe
          title="Google Map"
          className="absolute top-0 left-0 w-full h-[638px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.507504618204!2d73.01212671490099!3d19.156585187049333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79594c385d6d7%3A0x63b5c5145f7c5b41!2sLaser%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1620214879535!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
        <div
          className="absolute  top-32 rounded-tr-md rounded-bl-md  rounded-tl-5xl  rounded-br-5xl left-20 bg-black bg-opacity-75 text-white p-10 rounded-lg h-[340px] 
          sm:w-[500px] w-80 "
        >
          <h1 className="sm:text-3xl text-2xl font-bold mb-4  underline underline-offset-8 text-nowrap">
            Headquarters office
          </h1>
          <p className="sm:text-xl text-lg font-semi-bold mb-2">
            Laser Technologies Pvt Ltd
          </p>
          <div className=" font-serif font-thin">
            <p>PAP/R/406 Rabale MIDC Near Dol Electric </p>
            <p className="mb-2">Company Rabale MIDC, Navi Mumbai - 400701.</p>

            <p>Landline - 022 4131 0099</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={logoForMap} alt="" className="mt-4" />

            <a
              href="https://www.google.co.in/maps/place/Laser+Technologies+Pvt+Ltd/@19.1433969,73.0044389,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bfeb4288ae8d:0x8b330290504e58fa!8m2!3d19.1433969!4d73.0070138!16s%2Fg%2F1tks4syy?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-white hover:underline underline-offset-2"
            >
              Google Map Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
