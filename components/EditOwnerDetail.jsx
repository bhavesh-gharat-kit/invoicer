"use client";
import { getOwnerData, setOwnerData } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaUniversity,
  FaMoneyCheck,
  FaTimes,
} from "react-icons/fa";

const EditOwnerDetail = ({ onSubmit, onClose, formik }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    bankName: "",
    accountNumber: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOwnerData(formData);
    setTimeout(() => {
      onSubmit();
      formik.setValues({
        ...formik.values,
        ...formData,
      });
    }, 100);
  };

  useEffect(() => {
    let data = getOwnerData();
    if (data) setFormData(data);
  }, []);

  return (
    <div className="fixed z-[999] inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-11/12 max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Fill Your Details
          </h2>
          <FaTimes
            className="text-slate-600 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center border rounded-lg p-2 bg-slate-100">
              <FaUser className="text-slate-500 mr-2" />
              <input
                name="name"
                onChange={handleChange}
                value={formData.name}
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg p-2 bg-slate-100">
              <FaEnvelope className="text-slate-500 mr-2" />
              <input
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg p-2 bg-slate-100">
              <FaHome className="text-slate-500 mr-2" />
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={formData.address}
                placeholder="Your Address"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg p-2 bg-slate-100">
              <FaPhone className="text-slate-500 mr-2" />
              <input
                type="text"
                name="contactNumber"
                onChange={handleChange}
                value={formData.contactNumber}
                placeholder="Contact Number"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2 bg-slate-100">
              <FaUniversity className="text-slate-500 mr-2" />
              <input
                type="text"
                name="bankName"
                onChange={handleChange}
                value={formData.bankName}
                placeholder="Bank Name"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center border rounded-lg p-2 bg-slate-100">
            <FaMoneyCheck className="text-slate-500 mr-2" />
            <input
              type="number"
              name="accountNumber"
              onChange={handleChange}
              value={formData.accountNumber}
              placeholder="Bank Account Number"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOwnerDetail;
