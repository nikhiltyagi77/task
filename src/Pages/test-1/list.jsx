import { useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";

const ListTest = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    skills: "",
    des: "",
    id: crypto.randomUUID(),
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(sessionStorage.getItem("form"));
    if (getData) {
      setData(getData);
    }
  }, [form]);
  const handleDelete = (id) => {
    const deletedValue = data.filter((val) => val.id !== id) || [];
    setData(deletedValue);
    sessionStorage.setItem("form", JSON.stringify(deletedValue));
  };
  return (
    <>
      <div className="min-h-screen bg-[#fff] p-4 ">
        <div className="container mx-auto px-5 ">
          <div className="border rounded-md ">
            <table className="w-full ">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left ">Full Name</th>
                  <th className="px-3 py-2 text-left ">Email</th>
                  <th className="px-3 py-2 text-left ">Mobile Number</th>
                  <th className="px-3 py-2 text-left ">Skills</th>
                  <th className="px-3 py-2 text-left ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((info, i) => (
                  <tr>
                    <td className="border-t px-3 py-2 text-left ">
                      {info.fullName}
                    </td>
                    <td className="border-t px-3 py-2 text-left ">
                      {info.email}
                    </td>
                    <td className="border-t px-3 py-2 text-left ">
                      {info.mobileNo}
                    </td>
                    <td className="border-t px-3 py-2 text-left ">
                      {info.skills}
                    </td>
                    <td className="border-t px-3 py-2 text-left ">
                      <button
                        type="button"
                        onClick={() => handleDelete(info.id)}
                        className="px-2 py-2 cursor-pointer hover:opacity-80 rounded bg-red-600 text-[#fff]  "
                      >
                        <FiTrash className="" />
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

export default ListTest;
