import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    city: "",
    state: "",
    address: "",
    facebookUrl: "",
    instaUrl: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    city: "",
    state: "",
    address: "",
    facebookUrl: "",
    instaUrl: "",
  });

  const validate = (data) => {
    let errors = {};
    if (!data.firstName) errors.firstName = "enter first name";
    if (!data.lastName) errors.lastName = "enter last name";
    if (!data.mobileNo) errors.mobileNo = "Mobile No. Required";
    if (!data.city) errors.city = "enter city";
    if (!data.state) errors.state = "enter state";
    if (!data.address) errors.address = "Field should not be empty";
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/;

    if (!data.facebookUrl) {
      errors.facebookUrl = "Facebook Link required";
    } else if (!urlRegex.test(data.facebookUrl)) {
      errors.facebookUrl = "Link not matched";
    }
    if (!data.instaUrl) {
      errors.instaUrl = "Instagram Link required";
    } else if (!urlRegex.test(data.instaUrl)) {
      error.instaUrl = "Link not matched";
    }
    return errors;
  };

  const [step, setStep] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = { ...form };
    let valiateValue = validate(values);
    
    if (Object.keys(valiateValue).length > 0) {
      setError(valiateValue);
      return;
    }
    let existingData = JSON.parse(localStorage.getItem("form"));
    if (!Array.isArray(existingData)) {
      existingData = existingData ? [existingData] : [];
    }

    const updatedData = [...existingData, form];
    localStorage.setItem("form", JSON.stringify(updatedData));
    navigate("/");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      city: "",
      state: "",
      address: "",
      facebookUrl: "",
      instaUrl: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  console.log(error);

  return (
    <>
      <Layout>
        <div className="text-[24px] bg-[#fff]  ">
          <div className="flex items-center justify-center fixed h-full z-[9] w-full bg-[#0000001e] md:mt-0 p-4 ">
            <div className="bg-[#fff] rounded-[18px] p-5 grid grid-cols-12 gap-5 max-w-[1030px] max-h-[calc(100vh-100px)] overflow-auto w-full mt-[3rem] ">
              <div className="lg:col-span-4 md:col-span-6 col-span-12 md:block hidden ">
                <img
                  src="/assets/img/form.png"
                  className="h-full object-contain "
                ></img>
              </div>
              <div className="lg:col-span-8 md:col-span-6 col-span-12 ">
                <img
                  src="/assets/img/logo.png"
                  className="mx-auto max-w-[100px] object-contain max-h-[50px] "
                ></img>
                <form onSubmit={handleSubmit}>
                  {/* <div>
                <h2 className={`${(step === 1) ? 'bg-[#000] text-[#fff]' : 'bg-[#656565] text-[#fff]'} text-[24px]  inline-flex justify-center items-center  rounded-full p-3 w-[40px] h-[40px] font-semibold`}>
                    1
                  </h2>
                  <h2 className="text-[24px] text-[#fff] inline-flex justify-center items-center bg-[#656565] rounded-full p-3 w-[40px] h-[40px] font-semibold ">
                    2
                  </h2>
                  <h2 className="text-[24px] text-[#fff] inline-flex justify-center items-center bg-[#656565] rounded-full p-3 w-[40px] h-[40px] font-semibold ">
                    3
                  </h2> 
                  </div> */}
                  {step === 1 && (
                    <div className="  mt-5">
                      <h3 className="text-[20px] text-[#5f5f5f] ">
                        Personal Information
                      </h3>

                      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-3 grid-cols-1 ">
                        <div className="w-full ">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.firstName}
                            onChange={handleChange}
                            name="firstName"
                          />
                          <p className="text-red-500 text-[14px]">
                            {" "}
                            {error && error.firstName}
                          </p>
                        </div>
                        <div className="w-full ">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.lastName}
                            onChange={handleChange}
                            name="lastName"
                          />
                          <p className="text-red-500 text-[14px] ">
                            {error && error.lastName}
                          </p>
                        </div>
                        <div className="w-full ">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.email}
                            required
                            onChange={handleChange}
                            name="email"
                          ></input>
                        </div>
                        <div className="w-full ">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            Mobile No.
                          </label>
                          <PhoneInput
                            country="us"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.mobileNo}
                            onChange={(value) => {
                              setForm({ ...form, mobileNo: value });
                              setError({ ...error, mobileNo: "" });
                            }}
                            name="mobileNo"
                          />
                          <p className="text-red-500 text-[14px]">
                            {error && error.mobileNo}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="  mt-5">
                      <h3 className="text-[20px] text-[#5f5f5f] ">Location</h3>
                      <div className="grid grid-cols-12 gap-3 ">
                        <div className="w-full lg:col-span-6 md:col-span-12 sm:col-span-6 col-span-12">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            City
                          </label>
                          <input
                            type="text"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.city}
                            onChange={handleChange}
                            name="city"
                          />
                          <p className="text-red-500 text-[14px]">
                            {error && error.city}
                          </p>
                        </div>
                        <div className="w-full lg:col-span-6 md:col-span-12 sm:col-span-6 col-span-12">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            State
                          </label>
                          <input
                            type="text"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.state}
                            onChange={handleChange}
                            name="state"
                          />
                          <p className="text-red-500 text-[14px]">
                            {error && error.state}
                          </p>
                        </div>
                        <div className="w-full col-span-12">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            Full Address
                          </label>
                          <textarea
                            type=""
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.address}
                            onChange={handleChange}
                            name="address"
                          />
                          <p className="text-red-500 text-[14px]">
                            {error && error.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="  mt-5">
                      <h3 className="text-[20px] text-[#5f5f5f] ">
                        Social Links
                      </h3>
                      <div className="grid grid-cols-12 gap-3 ">
                        <div className="w-full lg:col-span-6 md:col-span-12 sm:col-span-6 col-span-12">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            Instagram URL
                          </label>
                          <input
                            type="text"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.instaUrl}
                            onChange={handleChange}
                            name="instaUrl"
                          />
                          <p className="text-red-500 text-[14px]">
                            {error && error.instaUrl}
                          </p>
                        </div>
                        <div className="w-full lg:col-span-6 md:col-span-12 sm:col-span-6 col-span-12">
                          <label className="text-[14px] font-medium text-[#838383] ">
                            Facebook URL
                          </label>
                          <input
                            type="text"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.facebookUrl}
                            onChange={handleChange}
                            name="facebookUrl"
                          />
                          <p className="text-red-500 text-[14px]">
                            {error && error.facebookUrl}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center items-center gap-3 pt-5 ">
                    <button
                      onClick={handlePrev}
                      disabled={step === 1}
                      className="rounded bg-[#838383] text-[#fff] font-medium text-[12px] px-4 py-2 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Prevous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={step === 3}
                      className="rounded bg-[#000] text-[#fff] font-medium text-[12px] px-4 py-2 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Next
                    </button>
                    {step === 3 && (
                      <button
                        type="submit"
                        className="px-5 py-1.5 bg-[#9265b3] text-[#fff] rounded text-[13px] cursor-pointer hover:opacity-80 "
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Form;
