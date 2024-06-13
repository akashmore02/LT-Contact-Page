import { EnquiryData } from "../data/data";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="text-3xl font-bold flex justify-center sm:mb-24 mb-12">
            How Can we help ?
          </div>
        </div>
        <div className="grid sm:flex grid-cols-2 justify-center sm:gap-5 gap-y-6 sm:mx-0 mx-12  ">
          {EnquiryData.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-gray-300 rounded-xl p-4 w-40 hover:cursor-pointer  hover:shadow-lg hover:shadow-slate-400"
              >
                <div className="flex flex-col mx-auto justify-center items-center">
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <p className="mt-4 text-lg font-light ">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xl text-red-500 
                    font-bold "
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
