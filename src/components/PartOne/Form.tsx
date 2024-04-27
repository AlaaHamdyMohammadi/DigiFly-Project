"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import { addUser } from "@/store/usersSlice";
import { FormErrors } from "../../../types";
import axiosInstance from "@/axiosConfig/instance";

const Form = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Form");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    let formErrors: FormErrors = {};
    if (!formData.firstName.trim()) {
      formErrors.firstName = t("firstNameError");
    }
    if (!formData.lastName.trim()) {
      formErrors.lastName = t("lastNameError");
    }
    if (!formData.phone.trim()) {
      formErrors.phone = t("mobileNumberError1");
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = t("mobileNumberError2");
    }
    if (!formData.email.trim()) {
      formErrors.email = t("emailError1");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t("emailError2");
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!handleValidation()) return;

    try {
      const response = await axiosInstance.post("/user-informations", {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Phone: formData.phone,
        Email: formData.email,
      });
      dispatch(addUser(response.data));
      setFormData({ firstName: "", lastName: "", phone: "", email: "" });
    } catch (error) {
      console.error("Error message : ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[406px] w-[546px] flex flex-col gap-10"
    >
      <div className="flex items-center gap-[30px]">
        <div className="w-[258px] flex flex-col gap-4">
          <label className="font-medium text-sm text-gray-900">
            {t("firstName")}
          </label>
          <input
            type="text"
            placeholder={t("firstName")}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={` rounded-sm border gap-[10px] py-4 px-8 ${
              errors.firstName ? "border-red-500" : "border-[#E5E5E5]"
            } placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-secondary`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs px-8">{errors.firstName}</p>
          )}
        </div>
        <div className="w-[258px] flex flex-col gap-4">
          <label className="font-medium text-sm text-gray-900 ">
            {t("lastName")}
          </label>
          <input
            type="text"
            placeholder={t("lastName")}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={` rounded-sm border gap-[10px] py-4 px-8 ${
              errors.lastName ? "border-red-500" : "border-[#E5E5E5]"
            }  placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-secondary`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs px-8">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-medium text-sm text-gray-900">
          {t("mobileNumber")}
        </label>
        <input
          type="text"
          placeholder={t("mobileNumber")}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`rounded-sm border gap-[10px] py-4 px-8 ${
            errors.phone ? "border-red-500" : "border-[#E5E5E5]"
          }   placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-secondary`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs px-8">{errors.phone}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-medium text-sm text-gray-900">
          {t("email")}
        </label>
        <input
          type="email"
          placeholder={t("email")}
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`rounded-sm border gap-[10px] py-4 px-8 ${
            errors.phone ? "border-red-500" : "border-[#E5E5E5]"
          } placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-secondary`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs px-8">{errors.email}</p>
        )}
      </div>
      <div className=" rounded-sm p-2 gap-[10px] bg-primary flex items-center justify-center cursor-pointer">
        <button type="submit" className="text-[16px] font-bold text-white ">
          {t("send")}
        </button>
      </div>
    </form>
  );
};

export default Form;
