import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";

const List = () => {
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
  return (
    <div>
      <Layout>
        <div className=" bg-[#fff] min-h-screen pt-10">
        <div className="py-20 px-5 container mx-auto">
          <div className="w-full overflow-auto ">
            <table className="w-full ">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left border-b ">First Name</th>
                  <th className="px-3 py-2 text-left border-b ">Last Name</th>
                  <th className="px-3 py-2 text-left border-b ">Email</th>
                  <th className="px-3 py-2 text-left border-b ">Mobile No.</th>
                  <th className="px-3 py-2 text-left border-b ">City</th>
                  <th className="px-3 py-2 text-left border-b ">State</th>
                  <th className="px-3 py-2 text-left border-b ">Hobies</th>
                  <th className="px-3 py-2 text-left border-b ">Skills</th>
                  <th className="px-3 py-2 text-left border-b ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((info, i) => (
                  <tr>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.fName}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.lName}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.email}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.mobileNo}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.city}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.state}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.hobbies}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      {info?.skills}
                    </td>
                    <td className="px-3 py-2 text-left border-b ">
                      <div className="flex gap-2 "></div>
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
