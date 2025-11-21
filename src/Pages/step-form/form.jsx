import PhoneInput from "react-phone-input-2";
import Layout from "../../Components/Layout";
import Select from "react-dropdown-select";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";

const FormStep = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: "",
    email: "",
    mobileNo: "",
    city: "",
    state: "",
    pinCode: "",
    skills: [],
    hobbies: "",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    city: "",
    state: "",
    pinCode: "",
    skills: [],
    hobbies: "",
    id: crypto.randomUUID(),
  });
  const options = [
    {
      value: 1,
      label: "ReactJS",
    },
    {
      value: 2,
      label: "NodeJS",
    },
  ];
  const step1Validate = (data) => {
    let errors = {};
    if (!data.name) errors.name = "enter Full name";
    if (!data.mobileNo) errors.mobileNo = "Mobile No. Required";
    return errors;
  };
  const step2Validate = (data) => {
    let errors = {};
    if (!data.city) errors.city = "Enter your City";
    if (!data.state) errors.state = "Enter state";
    if (!data.pinCode) errors.pinCode = "Pin Code Required";
    return errors;
  };
  const step3Validate = (data) => {
    let errors = {};
    if (!data.hobbies) errors.hobbies = "Write your hobbies";
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = { ...form };
    let valiateValue = step3Validate(values);
    console.log(valiateValue, "value");

    if (Object.keys(valiateValue).length > 0) {
      setError(valiateValue);
      return;
    }
    let existingValue = JSON.parse(sessionStorage.getItem("formstep")) || [];
    const updateData = [...existingValue, values];
    sessionStorage.setItem("formstep", JSON.stringify(updateData));
    setForm({
      name: "",
      email: "",
      mobileNo: "",
      city: "",
      state: "",
      pinCode: "",
      skills: [],
      hobbies: "",
      id: crypto.randomUUID(),
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
    let values = { ...form };
    if (step === 1) {
      let valiateValue = step1Validate(values);

      if (Object.keys(valiateValue).length > 0) {
        setError(valiateValue);
        return;
      } else {
        setStep(2);
      }
    } else if (step === 2) {
      let valiateValue = step2Validate(values);

      if (Object.keys(valiateValue).length > 0) {
        setError(valiateValue);
        return;
      } else {
        setStep(3);
      }
    }
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const [step, setStep] = useState(1);
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#fff] flex justify-center items-center p-4 ">
          <div className="container mx-auto px-5 ">
            <div className="max-w-[900px] mt-[5rem] w-full m-auto bg-[#969696] rounded-[20px] p-5 ">
              <button
                onClick={handlePrev}
                className={
                  step === 1
                    ? "hidden"
                    : "rounded-full bg-[#000] text-[#fff] font-medium text-[12px] p-2 disabled:cursor-not-allowed cursor-pointer"
                }
              >
                <BiLeftArrow />
              </button>
              <form onSubmit={handleSubmit}>
                {step == 1 && (
                  <div className="mt-5 ">
                    <h2 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-[#fff] ">
                      Personal Information
                    </h2>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
                      <div>
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="name"
                          onChange={handleChange}
                          value={form.name}
                        />
                        <p className="text-red-600  ">{error && error.name}</p>
                      </div>
                      <div>
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="email"
                          onChange={handleChange}
                          value={form.email}
                        />
                      </div>
                      <div>
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          Mobile No.
                        </label>
                        <PhoneInput
                          country={"in"}
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="mobileNo"
                          value={form.mobileNo}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, mobileNo: e }));
                            setError((prev) => ({ ...prev, mobileNo: "" }));
                          }}
                        />
                        <p className="text-red-600  ">
                          {error && error.mobileNo}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {step == 2 && (
                  <div className="mt-5 ">
                    <h2 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-[#fff] ">
                      Address
                    </h2>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
                      <div>
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="city"
                          onChange={handleChange}
                          value={form.city}
                        />
                        <p className="text-red-600  ">{error && error.city}</p>
                      </div>
                      <div>
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="state"
                          onChange={handleChange}
                          value={form.state}
                        />
                        <p className="text-red-600  ">{error && error.state}</p>
                      </div>
                      <div>
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          Pin Code
                        </label>
                        <input
                          type="num"
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="pinCode"
                          onChange={handleChange}
                          value={form.pinCode}
                        />
                        <p className="text-red-600  ">
                          {error && error.pinCode}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {step == 3 && (
                  <div className="mt-5 ">
                    <h2 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-[#fff] ">
                      Technical Information
                    </h2>
                    <div className="grid grid-cols-12 gap-5 ">
                      <div className="sm:col-span-6 col-span-12 ">
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          Skills
                        </label>
                        <Select
                          className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                          name="skills"
                          options={options}
                          required
                          value={form.skills}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, skills: e }));
                          }}
                        />
                        <p className="text-red-600  ">
                          {error && error.skills}
                        </p>
                      </div>
                      <div className="col-span-12 ">
                        <label className="text-[14px] text-[#fff] mb-1 ">
                          Hobbies
                        </label>
                        <ReactQuill
                          className="w-full rounded !outline-none "
                          name="state"
                          value={form.hobbies}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, hobbies: e }));
                            setError((prev) => ({ ...prev, hobbies: "" }));
                          }}
                        />
                        <p className="text-red-600  ">
                          {error && error.hobbies}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex justify-center items-center gap-3 pt-5 ">
                  <button
                    onClick={handleNext}
                    type="button"
                    disabled={step === 3}
                    className={
                      step === 3
                        ? "hidden"
                        : "rounded bg-[#000] text-[#fff] font-medium text-[12px] px-4 py-2 disabled:cursor-not-allowed cursor-pointer"
                    }
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
      </Layout>
    </>
  );
};

export default FormStep;
