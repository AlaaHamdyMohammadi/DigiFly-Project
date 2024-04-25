"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axiosConfig/instance";
import { addUser } from "@/store/usersSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/user-informations", {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Phone: formData.phone,
        Email: formData.email,
      });
      dispatch(addUser(response.data));
      setFormData({ firstName: "", lastName: "", phone: "", email: "" });
      //console.log('Response : ', response.data);
    } catch (error) {
      console.error("Error message : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-[406px] w-[546px] gap-10">
      <div className="w-[546px] h-[78px] flex items-center gap-[30px]">
        <div className="w-[258px] gap-4">
          <label className="font-medium text-sm text-gray-900">
            First name
          </label>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="h-[52px] mt-2 rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
          />
        </div>
        <div className="w-[258px] gap-4">
          <label className="font-medium text-sm text-gray-900 ">
            Last name
          </label>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="h-[52px] mt-2 rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
          />
        </div>
      </div>
      <div className="gap-4 mt-8 flex flex-col">
        <label className="font-medium text-sm text-gray-900">
          Mobile number
        </label>
        <input
          type="text"
          placeholder="Mobile number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-[554px] h-[52px] rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
        />
      </div>
      <div className="gap-4 mt-8 flex flex-col">
        <label className="font-medium text-sm text-gray-900">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-[554px] h-[52px] rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
        />
      </div>
      <div className="mt-8 w-[554px] h-[52px] rounded-sm p-2 gap-[10px] bg-[#49BD88] flex items-center justify-center cursor-pointer">
        <button type="submit" className="text-[16px] font-bold text-white ">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
