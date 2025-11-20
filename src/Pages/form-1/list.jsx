import { useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";

const List1 = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    skills: "",
    des: "",
    id: crypto.randomUUID(),
  });
  const [data, setData] = useState([]);
  console.log(data);
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
      <Layout>
        <div className="min-h-screen bg-[#fff] p-4 ">
          <div className="container mx-auto px-5 ">
            <button
              onClick={() => navigate("/form-1")}
              className="bg-[#8e8e8e] mb-5 rounded px-4 cursor-pointer py-1.5 text-[#fff] "
            >
              Back
            </button>

            <div className="border rounded-md overflow-auto ">
              <table className="w-full ">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left ">Full Name</th>
                    <th className="px-3 py-2 text-left ">Email</th>
                    <th className="px-3 py-2 text-left ">Mobile Number</th>
                    <th className="px-3 py-2 text-left ">Skills</th>
                    <th className="px-3 py-2 text-left ">Description</th>
                    <th className="px-3 py-2 text-left ">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((info, i) => (
                    <tr key={i}>
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
                        {info.skills.map((item, i) => (
                          <span key={i}>{item.label}</span>
                        ))}
                      </td>
                      <td className="border-t px-3 py-2 text-left ">
                        <p dangerouslySetInnerHTML={{ __html: info.des }}></p>
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
      </Layout>
    </>
  );
};

export default List1;
