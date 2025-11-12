import { useEffect, useState } from "react";

const ViewPage = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("form"));
    if(getData){
        setInfo(getData)
    }
  }, []);
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="flex gap-2 items-center ">
          <h2>First Name:</h2>
          <p>{}</p>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
