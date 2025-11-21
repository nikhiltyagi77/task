import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";

export default function Home() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("form"));
    if (getData) {
      setInfo(getData);
    }
  }, []);
  console.log(info);
  return (
    <div>
      <Layout>
        <div className="py-20 px-5 container mx-auto">
          <div className="w-full overflow-auto ">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">First Name</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">Last Name</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">Email</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">Mobile Numeber</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">City</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">State</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">Address</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">Facebook Link</th>
                <th className="px-3 py-2 bg-[#fff] border-b border-[#838383] text-left ">Instagram Link</th>
              </tr>
            </thead>
            <tbody>
              {info.map((res, i) => (
                <tr>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.firstName}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.lastName}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.email}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.mobileNo}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.city}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.state}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.address}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.facebookUrl}</td>
                  <td className="px-3 py-2 bg-[#fff] border-b border-[#838383] "> {res?.instaUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}
