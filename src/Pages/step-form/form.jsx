import PhoneInput from "react-phone-input-2";
import Layout from "../../Components/Layout";
import Select from "react-dropdown-select";
import ReactQuill from "react-quill-new";

const FormStep = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#fff] flex justify-center items-center p-4 ">
          <div className="container mx-auto px-5 ">
            <div className="max-w-[900px] mt-[5rem] w-full m-auto bg-[#969696] rounded-[20px] p-5 ">
              <form>
                <div className="mt-5 ">
                  <h2 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-[#fff] ">
                    Personal Information
                  </h2>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
                    <div>
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="email"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Mobile No.
                      </label>
                      <PhoneInput
                        country={"in"}
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="mobileNo"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 ">
                  <h2 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-[#fff] ">
                    Address
                  </h2>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
                    <div>
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="city"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        State
                      </label>
                      <input
                        type="text"
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="state"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Pin Code
                      </label>
                      <input
                        type="num"
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="pinCode"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 ">
                  <h2 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-[#fff] ">
                    Technical Information
                  </h2>
                  <div className="grid grid-cols-12 gap-5 ">
                    <div className="sm:col-span-6 col-span-12 ">
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Skills
                      </label>
                      <Select
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="city"
                      />
                    </div>
                    <div className="sm:col-span-6 col-span-12 ">
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Pin Code
                      </label>
                      <input
                        type="num"
                        className="w-full border border-[#efefef] rounded px-3 py-1.5 !outline-none "
                        name="pinCode"
                      />
                    </div>
                    <div className="col-span-12 ">
                      <label className="text-[14px] text-[#fff] mb-1 ">
                        Hobbies
                      </label>
                      <ReactQuill
                        className="w-full rounded !outline-none "
                        name="state"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FormStep;
