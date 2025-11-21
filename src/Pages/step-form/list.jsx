import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useEffect, useState } from "react";

const ListStep = () => {
  const navigate = useNavigate();
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(sessionStorage.getItem("formstep"));
    if (getData) {
      setData(getData);
    }
  }, [form]);
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#fff] p-4 ">
          <div className="container mx-auto px-5 mt-20 ">
            <button
              onClick={() => {
                navigate("/step-form");
              }}
              className="bg-[#838383] mb-5 text-[#fff] px-3 py-1.5 rounded text-[14px] cursor-pointer hover:opacity-80 "
            >
              Back
            </button>
            <div className="overflow-auto border rounded-[12px] ">
              <table className="w-full ">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left ">Full Name</th>
                    <th className="px-3 py-2 text-left ">Email</th>
                    <th className="px-3 py-2 text-left ">Mobile No.</th>
                    <th className="px-3 py-2 text-left ">City</th>
                    <th className="px-3 py-2 text-left ">State</th>
                    <th className="px-3 py-2 text-left ">Pin Code</th>
                    <th className="px-3 py-2 text-left ">Skill</th>
                    <th className="px-3 py-2 text-left ">Hobbies</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((info, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2 text-left border-t">
                        {info.name}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        {info.email}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        {info.mobileNo}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        {info.city}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        {info.state}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        {info.pinCode}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        {" "}
                        {info.skills.map((item, i) => (
                          <span key={i}>{item.label}</span>
                        ))}
                      </td>
                      <td className="px-3 py-2 text-left border-t">
                        <p
                          dangerouslySetInnerHTML={{ __html: info.hobbies }}
                        ></p>
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

export default ListStep;
