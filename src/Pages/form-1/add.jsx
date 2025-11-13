import { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    mobileNo: "",
    city: "",
    state: "",
    hobbies: "",
    skills: "",
    id: crypto.randomUUID().slice(0, 8),
  });
  const [error, setError] = useState({
    fName: "",
    lName: "",
    email: "",
    mobileNo: "",
    city: "",
    state: "",
    hobbies: "",
    skills: "",
  });
  const [step, setStep] = useState(1);

  const validate = (data) => {
    let errors = {};
    if (!data.fName) errors.fName = "Enter First Name";
    if (!data.lName) errors.lName = "Enter Last Name";
    if (!data.email) errors.email = "Enter Email";
    if (!data.mobileNo) errors.mobileNo = "Enter Mobile Numebr";
    if (!data.city) errors.city = "Enter City";
    if (!data.state) errors.state = "Enter State";
    if (!data.hobbies) errors.hobbies = "Enter Hobbies";
    if (!data.skills) errors.skills = "Enter Skills";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let values = { ...form };
    let validateValue = validate(values);
    console.log(validateValue);
    if (Object.keys(validateValue).length > 0) {
      setError(validateValue);
      return;
    }

    let existingData = JSON.parse(localStorage.getItem("form"));
    if (!Array.isArray(existingData)) {
      existingData = existingData ? [existingData] : [];
    }
    const updatedData = [...existingData, form];
    localStorage.setItem("form", JSON.stringify(updatedData));
    navigate("/list");
    setForm({
      fName: "",
      lName: "",
      email: "",
      mobileNo: "",
      city: "",
      state: "",
      hobbies: "",
      skills: "",
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
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <>
      <div className=" bg-[#fff] min-h-screen pt-10">
        <div className="container mx-auto p-4 rounded-[12px] mt-10 bg-[#fff] ">
          <div className="bg-[#d3d3d3] rounded-[12px] border border-[#bebebe] p-4 ">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="md:col-span-3 col-span-12 ">
                <img
                  src="/assets/img/form.png"
                  className="h-full object-cover rounded-md "
                ></img>
              </div>
              <div className="md:col-span-9 col-span-12 ">
                <div className="p-3 rounded-md bg-[#fff] relative ">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={`${
                      step === 1
                        ? "hidden"
                        : "inline-block rounded-full bg-[#838383] absolute top-[15px] left-[10px] text-[#fff] font-medium text-[16px] p-2 disabled:cursor-not-allowed cursor-pointer"
                    }`}
                  >
                    <FaCircleArrowLeft />
                  </button>
                  <img
                    src="/assets/img/logo.png"
                    className="mx-auto max-w-[160px] w-full "
                  ></img>
                  <div className="flex justify-center mt-3 items-center gap-2 ">
                    <span
                      className={`${
                        step === 1
                          ? "bg-[#b7b7b7] text-[#333]"
                          : step > 1
                          ? "bg-[#000] text-[#fff]"
                          : ""
                      } py-1 px-3  rounded-full `}
                    >
                      1
                    </span>
                    <span className="min-w-[50px] inline-block bg-[#838383] h-[1px] "></span>
                    <span
                      className={`${
                        step === 2
                          ? "bg-[#b7b7b7] text-[#333]"
                          : step > 2
                          ? "bg-[#000] text-[#fff]"
                          : "bg-[#b7b7b7] text-[#333]"
                      } py-1 px-3  rounded-full `}
                    >
                      2
                    </span>
                    <span className="min-w-[50px] inline-block bg-[#838383] h-[1px] "></span>
                    <span
                      className={`${
                        step === 3
                          ? "bg-[#b7b7b7] text-[#333]"
                          : step > 3
                          ? "bg-[#000] text-[#fff]"
                          : "bg-[#b7b7b7] text-[#333]"
                      } py-1 px-3  rounded-full `}
                    >
                      3
                    </span>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <div className="mt-3 grid grid-cols-2 gap-3 ">
                        <div>
                          <label className="text-[14px] ">First Name</label>
                          <input
                            type="text"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.fName}
                            onChange={handleChange}
                            name="fName"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.fName}
                          </p>
                        </div>
                        <div>
                          <label className="text-[14px] ">Last Name</label>
                          <input
                            type="text"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.lName}
                            onChange={handleChange}
                            name="lName"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.lName}
                          </p>
                        </div>
                        <div>
                          <label className="text-[14px] ">Email</label>
                          <input
                            type="email"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.email}
                            onChange={handleChange}
                            name="email"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.email}
                          </p>
                        </div>
                        <div>
                          <label className="text-[14px] ">Mobile No.</label>
                          <PhoneInput
                            country="us"
                            className="w-full py-1.5 border border-[#b6b6b6] rounded !outline-none px-3 text-[13px] "
                            value={form.mobileNo}
                            onChange={(value) => {
                              setForm({ ...form, mobileNo: value }),
                                setError({ ...form, mobileNo: "" });
                            }}
                            name="mobileNo"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.mobileNo}
                          </p>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="mt-3 grid grid-cols-2 gap-3 ">
                        <div>
                          <label className="text-[14px] ">City</label>
                          <input
                            type="text"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.city}
                            onChange={handleChange}
                            name="city"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.city}
                          </p>
                        </div>
                        <div>
                          <label className="text-[14px] ">State</label>
                          <input
                            type="text"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.state}
                            onChange={handleChange}
                            name="state"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.state}
                          </p>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="mt-3 grid grid-cols-2 gap-3 ">
                        <div>
                          <label className="text-[14px] ">Hobbies</label>
                          <input
                            type="text"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.hobbies}
                            onChange={handleChange}
                            name="hobbies"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.hobbies}
                          </p>
                        </div>
                        <div>
                          <label className="text-[14px] ">Skills</label>
                          <input
                            type="text"
                            className="px-3 py-2 rounded-md !outline-none border text-[13px] w-full border-[#e5e5e5] "
                            value={form.skills}
                            onChange={handleChange}
                            name="skills"
                          />
                          <p className="text-red-500 text-[13px] ">
                            {error && error.skills}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-center items-center mt-3 gap-2 ">
                      {step === 3 && (
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-purple-500 disabled:cursor-not-allowed rounded text-[#fff] text-[14px] cursor-pointer hover:opacity-80"
                        >
                          Submit
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handleNext}
                        className={`${
                          step === 3
                            ? "hidden"
                            : "px-4 py-1.5 bg-purple-500 disabled:cursor-not-allowed rounded text-[#fff] text-[14px] cursor-pointer hover:opacity-80"
                        } `}
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
