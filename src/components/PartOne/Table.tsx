"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/axiosConfig/instance";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user-informations");
        console.log("Response : ", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error message: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="gap-6 h-[419px]">
      <h3 className=" mb-5 font-bold text-[16px] text-[#6D5CBC]">Results:</h3>
      <table className="rounded-sm border-gray-400 shadow-lg">
        <thead className="">
          <tr className="text-left bg-gray-100 border-b">
            <th className=" border-r py-4 px-6 gap-[10px] font-normal text-sm">
              First name
            </th>
            <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
              Last name
            </th>
            <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
              Mobile number
            </th>
            <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: string | any) => (
            <tr key={user.id} className="border-b text-left">
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.FirstName}
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.LastName}
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.Phone}
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.Email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
