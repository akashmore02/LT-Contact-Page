const Newsletter = () => {
  return (
    <div className="">
      <div className=" sm:items-center w-full flex sm:flex-row flex-col  ">
        <div>
          <p className="text-white sm:mr-10 font-semibold font-sans sm:text-3xl text-md text-nowrap sm:mb-0 mb-4">
            Subscribe To Our Newsletter & Stay Updated
          </p>
        </div>

        <div className="flex bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="email"
            className="p-2 text-gray-700 outline-none flex-grow"
          />
          <button className="bg-black text-white p-2 px-10 rounded-full">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
