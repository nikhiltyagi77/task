import { useState } from "react";
import Select from "react-dropdown-select";
import { FiPlus } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const FormTask = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    skills: "",
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
  const [editorContent, setEditorContent] = useState("");
  const handleEditor = (value) => {
    setEditorContent(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let existingValue = JSON.parse(sessionStorage.getItem("form"));
    if (!Array.isArray(existingValue)) {
      existingValue = existingValue ? [existingValue] : [];
    }
    const updateData = [...existingValue, form];
    sessionStorage.setItem("form", JSON.stringify(updateData));
    navigate("/listtest");
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
  };
  return (
    <>
      <div className="min-h-screen bg-[#fff] flex justify-center items-center p-4 ">
        <div className="container mx-auto px-5 ">
          <div className=" max-w-[700px] m-auto bg-[#f2f2f2] border-gray-400 border p-4 rounded-md ">
            <div className="flex justify-end ">
              <button className="p-3 rounded bg-[#0c9aff] mb-3 cursor-pointer hover:opacity-80 text-[#fff] ">
                <FiPlus />
              </button>
            </div>
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
                </div>
                <div className="md:col-span-6 col-span-12 ">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="px-3 py-2 w-full !outline-none border border-[#c0c0c0] rounded "
                    name="email"
                  />
                </div>
                <div className="md:col-span-6 col-span-12 ">
                  <label>Mobile No.</label>
                  <PhoneInput
                    country={"in"}
                    value={form.mobileNo}
                    onChange={(value) => {
                      setForm({ ...form, mobileNo: value });
                    }}
                    className="px-3 py-2 w-full !outline-none border border-[#c0c0c0] rounded "
                    name="mobileno"
                  />
                </div>
                <div className="md:col-span-6 col-span-12 ">
                  <label>Skills</label>
                  <Select
                    options={options}
                    name="skills"
                    onChange={(name) => {
                      setForm({ ...form, name });
                    }}
                    value={form.skills}
                  />
                </div>
                {/* <div className="col-span-12 ">
                  <label>Description</label>
                  <ReactQuill
                    theme="snow"
                    value={editorContent}
                    onChange={handleEditor}
                  />
                </div> */}
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
    </>
  );
};

export default FormTask;
