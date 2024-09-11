import React from "react";
import { MdInfo } from "react-icons/md";
import arrowsidebar from "../Assets/arrow-sidebar.png";
import InputComponent from "../Common/InputComponent";
import dependency from "../dependency.json";

const Configuration = () => {
  return (
    <div className="h-[94.7vh] bg-[#363636] text-white flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar  px-4">
        <ul>
          <li className="py-1  cursor-pointer">
            <p className="block font-bold text-xl my-2">cart_campaign</p>
            <div className="mt-5">
              <span className="flex items-center font-medium text-[16px]  py-2 textwhite">
                <MdInfo className="text-[#FF7A00] mr-2" /> Last 2 commits
                scanned
              </span>
              <span className="flex items-center font-medium text-[16px]  text-white">
                <MdInfo className="text-[#FF7A00] mr-2" /> 5 entry points
                identified
              </span>
            </div>
          </li>
          <li className="py-1 my-3  cursor-pointer">
            <label className="block font-medium text-[16px] mb-3">
              Selected flow
            </label>
            <select className="w-full bg-[#363636] border-[#D9D9D9] border-2 rounded-lg mt-1 p-2 appearance-none custom-arrow ">
              <option className="font-medium text-[16px] text-white">
                POST /carts/{"{cart_id}"}
              </option>
            </select>
          </li>
          <li className="py-2  cursor-pointer">
            <label className="block font-medium text-base">Dependencies</label>
            <span className="text-sm text-[#B7B7B7]">
              Select the ones you want to mock
            </span>
            <div className="mt-2.5 pr-1">
              <div>
                {dependency?.map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center mb-4 pb-0.5"
                  >
                    <div className="flex justify-center items-center">
                      <input
                        id={item}
                        type="checkbox"
                        value=""
                        className="custom-radio rounded"
                      />
                      <label
                        htmlFor={item}
                        className="ms-2 text-[15px] font-medium text-white"
                      >
                        {item}
                      </label>
                    </div>
                    <div className="image">
                      <img
                        src={arrowsidebar}
                        alt="logo"
                        className="w-[13px] h-[13px] mt-3"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Add more checkboxes as needed */}
            </div>
          </li>
          <li className="pt-3 pb-2  cursor-pointer">
            <label className="block  font-medium text-base">Databases</label>
            <span className="text-sm text-[#B7B7B7]">
              Select if you want to mock databases
            </span>
            <div className="mt-2.5 pr-1">
              <div className="flex justify-between items-center mb-4 pb-0.5">
                <div className="flex justify-center items-center">
                  <input
                    id="mock-databases"
                    name="mock-database-option"
                    type="radio"
                    value="mock-databases"
                    className=" 
                     custom-radio rounded"
                  />
                  <label
                    htmlFor="mock-databases"
                    className="ms-2 text-[15px] font-medium text-white"
                  >
                    I want to mock databases
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4 pb-0.5">
                <div className="flex justify-center items-center">
                  <input
                    id="dont-mock-databases"
                    name="mock-database-option"
                    type="radio"
                    value="dont-mock-databases"
                    className="custom-radio rounded"
                  />
                  <label
                    htmlFor="dont-mock-databases"
                    className="ms-2 text-[15px] font-medium text-white"
                  >
                    I don’t want to mock databases
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li className="  cursor-pointer">
            <label className="block font-medium">Database Configurations</label>
            <div className="mt-7">
              <label className="block w-full">
                <InputComponent type="text" name={"Database User"} />
              </label>
              <label className="block">
                <InputComponent type="password" name={"Database Password"} />
              </label>
              <label className="block">
                <InputComponent type="text" name={"Database Hostname"} />
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-4 mt-1 border-t z-10  w-full border-[#505050] flex justify-end">
        <button className="w-1/4 bg-blue-600 p-2 rounded ">Save</button>
      </div>
    </div>
  );
};

export default Configuration;
