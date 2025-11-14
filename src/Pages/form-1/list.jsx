import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const List = () => {
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("form"));
    if (getData) {
      setData(getData);
    }
  }, [form]);
  const handleDelete = (id) => {
    const deletedValue = data.filter((val) => val.id !== id) || [];
    setData(deletedValue);
    localStorage.setItem("form", JSON.stringify(deletedValue));
  };
  return (
    <div>
      <Layout>
        <div className=" bg-[#fff] min-h-screen pt-10">
          <div className="py-20 px-5 container mx-auto">
            <div className="w-full overflow-auto border rounded  ">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left ">
                      First Name
                    </th>
                    <th className="px-3 py-2 text-left ">Last Name</th>
                    <th className="px-3 py-2 text-left ">Email</th>
                    <th className="px-3 py-2 text-left ">
                      Mobile No.
                    </th>
                    <th className="px-3 py-2 text-left ">City</th>
                    <th className="px-3 py-2 text-left ">State</th>
                    <th className="px-3 py-2 text-left ">Hobies</th>
                    <th className="px-3 py-2 text-left ">Skills</th>
                    <th className="px-3 py-2 text-left ">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((info, i) => (
                    <tr className=" border-t">
                      <td className="px-3 py-2 text-left ">{info?.fName}</td>
                      <td className="px-3 py-2 text-left ">{info?.lName}</td>
                      <td className="px-3 py-2 text-left ">{info?.email}</td>
                      <td className="px-3 py-2 text-left ">{info?.mobileNo}</td>
                      <td className="px-3 py-2 text-left ">{info?.city}</td>
                      <td className="px-3 py-2 text-left ">{info?.state}</td>
                      <td className="px-3 py-2 text-left ">{info?.hobbies}</td>
                      <td className="px-3 py-2 text-left ">{info?.skills}</td>
                      <td className="px-3 py-2 text-left ">
                        <div className="flex gap-2 ">
                          <button
                            onClick={() => navigate("/add")}
                            className="bg-green-500 p-2 rounded-md cursor-pointer hover:opacity-80 "
                          >
                            <FaRegEdit className="text-[#fff] text-[18px] " />
                          </button>
                          <button
                            onClick={() => handleDelete(info.id)}
                            className="bg-red-500 p-2 rounded-md cursor-pointer hover:opacity-80 "
                          >
                            <IoTrashOutline className="text-[#fff] text-[18px] " />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default List;
