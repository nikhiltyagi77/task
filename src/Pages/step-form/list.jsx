import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useEffect, useState } from "react";

const ListStep = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState([
    {
      name: "",
      email: "",
      mobileNo: "",
      city: "",
      state: "",
      pinCode: "",
      skills: [],
      hobbies: "",
      id: crypto.randomUUID(),
    },
  ]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(sessionStorage.getItem("formstep"));
    if (getData) {
      setData(getData);
    }
  }, [form]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const totalPages = form.length / pageSize;
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = data.slice(startIndex, startIndex + pageSize);
  const PageSize = (e) => {
    const newdata = Number(e.target.value);
    setPageSize(newdata);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#fff] p-4 ">
          <div className="container mx-auto px-5 mt-20 ">
            <div className="flex justify-between items-center mb-5 ">
              <button
                onClick={() => {
                  navigate("/step-form");
                }}
                className="bg-[#838383] text-[#fff] px-3 py-1.5 rounded text-[14px] cursor-pointer hover:opacity-80 "
              >
                Back
              </button>
              <select name="Data" onChange={PageSize}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>
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
                  {currentItems.map((info, i) => (
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
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ListStep;
