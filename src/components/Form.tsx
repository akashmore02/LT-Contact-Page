import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Toast from "./Toast";

function Form() {
  const [allowed, setAllowed] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    if (formRef.current) formRef.current.reset();
  };
  return (
    <div className="grid sm:grid-cols-2 gap-10 mx-12">
      <div
        className="sm:h-[200px] h-[
         151px] sm:w-[500px] w-[340px] bg-slate-950 p-10 rounded-tr-md rounded-bl-md  rounded-tl-5xl  rounded-br-5xl sm:mt-14 sm:ml-12"
      >
        <div
          className="text-4xl text-white font-sans font-semibold mb-4
          "
        >
          Get in touch{" "}
        </div>
        <div className="text-white ">
          need our expertise for choosing your next laser machine?
        </div>
      </div>
      <div>
        <div className="text-[#969696]">
          Fill out the form to get a free consultation
          <form
            id="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="grid sm:grid-cols-2 ">
              <div className="bg-gray-100  ">
                <div className="  mb-10 mt-10 ">
                  <label htmlFor="name"></label>
                  <input
                    className="  outline-none"
                    type="text"
                    id="name"
                    name="Username"
                    placeholder="Your Name"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Please enter valid name"
                  />
                </div>

                <div className="  mb-10 ">
                  <label htmlFor="phoneno"></label>
                  <input
                    className="outline-none"
                    type="tel"
                    name="Phone no"
                    id="phoneno"
                    placeholder="Contact No"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter 10 digit no"
                  />
                </div>

                <div className="  mb-10">
                  <label htmlFor="remark"></label>
                  <input
                    className=" outline-none"
                    type="text"
                    name="remark"
                    id="remark"
                    placeholder="Remarks"
                    required
                  />
                </div>
              </div>
              <div className="bg-gray-100 ">
                <div className="mb-10 mt-10">
                  <label htmlFor="orgname"></label>
                  <input
                    className="outline-none"
                    type="text"
                    id="orgname"
                    name="Organisation name"
                    placeholder="Organisation Name"
                    pattern="[A-Za-z\s]+"
                    required
                  />
                </div>

                <div className="mb-10 ">
                  <label htmlFor="emailid"></label>
                  <input
                    className=" outline-none"
                    type="email"
                    name="email id"
                    id="emailid"
                    placeholder="Email ID"
                    required
                  />
                </div>

                <div className="mb-10">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={() => {
                      setAllowed(!allowed);
                    }}
                  />
                </div>
                <div>
                  {/* <input
                    className='bg-black w-36 h-45px text-white text-sm font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Submit'
                    type="submit"
                    value="Submit"
                    disabled={allowed}
                  /> */}
                  <button
                    type="submit"
                    className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showToast && (
        <Toast
          message="Form submitted successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Form;
