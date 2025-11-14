import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";

const FormTest = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    mobileNo: "",
    id: crypto.randomUUID(),
  });

  const [info, setInfo] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("form"));
    if (getData) {
      setInfo(getData);
    }
  }, [form]);
  const handleDelete = (id) => {
    const deletedValue = info.filter((val) => val.id !== id) || [];
    setInfo(deletedValue);
    localStorage.setItem("form", JSON.stringify(deletedValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingData = JSON.parse(localStorage.getItem("form"));
    if (!Array.isArray(existingData)) {
      existingData = existingData ? [existingData] : [];
    }

    const updatedData = [...existingData, form];
    localStorage.setItem("form", JSON.stringify(updatedData));
    setForm({
      fName: "",
      lName: "",
      email: "",
      mobileNo: "",
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
      <div className="bg-[#fff] pt-10 min-h-screen ">
        <div className="container mx-auto p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 max-w-[600px] mx-auto md:grid-cols-2 ">
              <div>
                <label>First Name</label>
                <input
                  value={form.fName}
                  onChange={handleChange}
                  type="text"
                  className="w-full border border-[#efefef] !outline-none rounded "
                  name="fName"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  value={form.lName}
                  onChange={handleChange}
                  type="text"
                  className="w-full border border-[#efefef] !outline-none rounded "
                  name="lName"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full border border-[#efefef] !outline-none rounded "
                  name="email"
                />
              </div>
              <div>
                <label>Mobile No.</label>
                <PhoneInput
                  country={"in"}
                  value={form.mobileNo}
                  onChange={(value) => {
                    setForm({ ...form, mobileNo: value });
                  }}
                  className="w-full border border-[#efefef] !outline-none rounded "
                  name="mobileNo"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 ">
              <button
                type="submit"
                className="bg-[#000] text-[#fff] px-3 py-1.5 "
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-5 overflow-auto border rounded-md ">
            <table className="w-full ">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left ">First Name</th>
                  <th className="px-3 py-2 text-left ">Last Name</th>
                  <th className="px-3 py-2 text-left ">Email</th>
                  <th className="px-3 py-2 text-left ">Mobile Number</th>
                  <th className="px-3 py-2 text-left ">Action</th>
                </tr>
              </thead>
              <tbody>
                {info.map((data, i) => (
                  <tr>
                    <td className="px-3 py-2 text-left border-t ">
                      {data.fName}
                    </td>
                    <td className="px-3 py-2 text-left border-t ">
                      {data.lName}
                    </td>
                    <td className="px-3 py-2 text-left border-t ">
                      {data.email}
                    </td>
                    <td className="px-3 py-2 text-left border-t ">
                      {data.mobileNo}
                    </td>
                    <td className="px-3 py-2 text-left border-t ">
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="bg-red-500 p-2 rounded-md cursor-pointer hover:opacity-80 "
                      >
                        <IoTrashOutline className="text-[#fff] text-[18px] " />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTest;
