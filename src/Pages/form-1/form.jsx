import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";

const Form1 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    skills: [],
    des: "",
  });
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    skills: [],
    des: "",
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
  const validate = (data) => {
    let errors = {};
    if (!data.fullName) errors.fullName = "enter Full name";
    if (!data.mobileNo) errors.mobileNo = "Mobile No. Required";
    if (!data.skills) errors.skills = "Select Skills";
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = { ...form };
    let valiateValue = validate(values);

    if (Object.keys(valiateValue).length > 0) {
      setError(valiateValue);
      return;
    }
    let existingValue = JSON.parse(sessionStorage.getItem("form"));
    if (!Array.isArray(existingValue)) {
      existingValue = existingValue ? [existingValue] : [];
    }
    const updateData = [...existingValue, form];
    sessionStorage.setItem("form", JSON.stringify(updateData));
    navigate("/list-1");
    setForm({
      fullName: "",
      email: "",
      mobileNo: "",
      skills: "",
      des: "",
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


  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#fff] flex justify-center items-center p-4 ">
          <div className="container mx-auto px-5 ">
            <div className=" max-w-[700px] m-auto bg-[#f2f2f2] border-gray-400 border p-4 rounded-md ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-4 ">
                  <div className="md:col-span-6 col-span-12 ">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      className="px-3 py-2 w-full !outline-none border border-[#c0c0c0] rounded "
                      name="fullName"
                    />
                    <p className="text-red-600 ">{error && error.fullName}</p>
                  </div>
                  <div className="md:col-span-6 col-span-12 ">
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="px-3 py-2 w-full !outline-none border border-[#c0c0c0] rounded "
                      name="email"
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12 ">
                    <label>Mobile No.</label>
                    <PhoneInput
                      country="in"
                      value={form.mobileNo}
                      onChange={(value) => {
                        setForm({ ...form, mobileNo: value });
                        setError({ ...form, mobileNo: "" });
                      }}
                      className="px-3 py-2 w-full !outline-none border border-[#c0c0c0] rounded "
                      name="mobileno"
                    />
                    <p className="text-red-600 ">{error && error.mobileNo}</p>
                  </div>
                  <div className="md:col-span-6 col-span-12 ">
                    <label>Skills</label>
                    <Select
                      isMulti
                      options={options}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, skills: e }))
                      }
                      value={form.skills}
                    />
                    <p className="text-red-600 ">{error && error.skills}</p>
                  </div>
                  <div className="col-span-12 ">
                    <label>Description</label>
                    <ReactQuill
                      theme="snow"
                      value={form.des}
                      onChange={(e) => {
                        setForm((prev) => ({
                          ...prev,
                          des: e,
                        }));
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4 justify-center items-center  ">
                  <button
                    type="submit"
                    className="bg-[#0c8e0a] px-4 py-1.5 rounded cursor-pointer hover:opacity-80 text-[#fff] font-medium text-[14px] "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Form1;
