"use client";
import { useState, useEffect } from "react";
import Step1 from "./_components/step1";
import Step2 from "./_components/step2";
import Step3 from "./_components/step3";
import InvoiceView from "./_components/invoiceview";
import PreviewInvoice from "./_components/preview-invoice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

import {
  validateForm,
  calculateTotalAmount,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
} from "@/utils/helpers";
import useInvoiceStore from "@/store/store";

const Dashboard = () => {
  const { ownerData, history, getOwnerData, getHistory, addToHistory } =
    useInvoiceStore();
  // ✅ Consolidated State for Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    bankName: "",
    accountNumber: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    invoiceNumber: 1,
    invoiceDate: new Date().toISOString().split("T")[0],
    dueDate: new Date().toISOString().split("T")[0],
    notes: "",
  });
  // const [formData, setFormData] = useState({
  //   name: ownerData?.name||"",
  //   email: ownerData?.email||"",
  //   address: ownerData?.address||"",
  //   phoneNumber: ownerData?.contactNumber||"",
  //   bankName: ownerData?.bankName||"",
  //   accountNumber: ownerData?.accountNumber||"",
  //   clientName: "",
  //   clientEmail: "",
  //   clientAddress: "",
  //   invoiceNumber: history?.length?history.length+2:1,
  //   invoiceDate: new Date(),
  //   dueDate: "",
  //   notes: "",
  // });

  // ✅ Invoice Items State
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Item Input State
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);

  // ✅ Preview Invoice State
  const [previewInvoice, setPreviewInvoice] = useState(false);

  useEffect(() => {
    getOwnerData();
    getHistory();
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...ownerData,
      invoiceNumber: history?.length ? history.length + 2 : 1,
    }));
  }, [ownerData, history]);

  // ✅ Formik for Form Handling
  const formik = useFormik({
    initialValues: formData,
    validate: validateForm,
    enableReinitialize: true,
    onSubmit: (values) => console.log(values),
  });

  // ✅ Calculate Total Amount on Items Change
  useEffect(() => {
    setTotalAmount(calculateTotalAmount(items));
  }, [items]);

  // ✅ Prevent Empty Preview
  useEffect(() => {
    if (items.length === 0 && previewInvoice) {
      setPreviewInvoice(false);
      toast.error(
        "Please add at least one item to your invoice before previewing."
      );
    }
  }, [items, previewInvoice]);

  return (
    <>
      <section className="">
        {previewInvoice && (
          <PreviewInvoice
            values={{ ...formData, items, totalAmount }}
            formik={formik}
            setPreviewInvoice={setPreviewInvoice}
          />
        )}

        <div className="">
          <div className="absolute top-4 left-4 w-40 h-40 bg-pink-500/25  blur-[100px] -z-10"></div>
          <div>
            <h1 className="text-4xl py-6 font-bold bg-white text-slate-950 px-4">
              Create Invoice
            </h1>

            <div className="my-6 px-4 lg:grid lg:grid-cols-2 lg:gap-8 pb-20">
              <div>
                <Step1
                  values={{ ...formData, setFormData }}
                  setSteps={() => {}}
                  formik={formik}
                />
                <Step2
                  values={{ ...formData, setFormData }}
                  setSteps={() => {}}
                  formik={formik}
                />
                <Step3
                  okandReset={(data) => {
                    addToHistory(data);
                    getHistory();
                    setFormData({
                      ...formData,
                      clientName: "",
                      clientEmail: "",
                      clientAddress: "",
                      notes: "",
                    });
                  }}
                  values={{
                    item,
                    setItem,
                    price,
                    setPrice,
                    quantity,
                    setQuantity,
                    items,
                    setItems,
                    total,
                    setTotal,
                    totalAmount,
                    isEditing,
                    setIsEditing,
                    handleAddItem: (e) =>
                      handleAddItem({
                        item,
                        quantity,
                        price,
                        items,
                        setItems,
                        setItem,
                        setQuantity,
                        setPrice,
                        setTotal,
                        setIsEditing,
                      }),
                    handleEdit: (id) =>
                      handleEditItem(
                        id,
                        items,
                        setItems,
                        setItem,
                        setQuantity,
                        setPrice,
                        setIsEditing
                      ),
                    handleDelete: (id) => handleDeleteItem(id, items, setItems),
                    previewInvoice,
                    setPreviewInvoice,
                  }}
                  setSteps={() => {}}
                  formik={formik}
                />
              </div>
              <div id="pdf" className="hidden lg:block scale-90">
                <InvoiceView
                  values={{ ...formData, items, totalAmount }}
                  formik={formik}
                />
              </div>
            </div>
          </div>
          <div className="absolute right-4 bottom-4 w-40 h-40 bg-blue-500 blur-[100px] -z-10"></div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
