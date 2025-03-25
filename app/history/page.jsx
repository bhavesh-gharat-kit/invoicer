"use client";

import { useState, useEffect } from "react";

import { UserButton } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";

import Sidebar from "./_components/sidebar";
import Step1 from "./_components/step1";
import Step2 from "./_components/step2";
import Step3 from "./_components/step3";
import InvoiceView from "./_components/invoiceview"; 
import PreviewInvoice from "./_components/preview-invoice";

import collect from "collect.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from "uuid";
 
import { useFormik } from "formik";

export default function Dashboard() {
  // State values for step 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // State values for step 2
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // State values for step 3
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);


  // Steps to change the component being rendered - this, though, is no longer being used
  const [steps, setSteps] = useState(1);
 

  // Preview invoice
  const [previewInvoice, setPreviewInvoice] = useState(false);

  // Formik form validation
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please enter your name or your company name";
    }

    if (values.email) {
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
    } else {
      errors.email = "Please enter a valid email address";
    }

    if (!values.address) {
      errors.address = "Your address is required";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Your phone number is required";
    }

    if (!values.bankName) {
      errors.bankName = "Your bank name is required";
    }

    if (!values.accountNumber) {
      errors.accountNumber = "Your account number is required";
    }

    if (!values.clientName) {
      errors.clientName = "Client name is required";
    }

    if (values.clientEmail) {
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.clientEmail);
    } else {
      errors.clientEmail = "Please enter a valid email address";
    }

    if (!values.clientAddress) {
      errors.clientAddress = "Client address is required";
    }

    if (!values.invoiceNumber) {
      errors.invoiceNumber = "Invoice number is required";
    }

    if (!values.invoiceDate) {
      errors.invoiceDate = "Invoice is required";
    }

    if (!values.dueDate) {
      errors.dueDate = "Due date is required";
    }

    if (!values.notes) {
      errors.notes = "(Optional) Enter any additional notes to the client";
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      bankName: '',
      accountNumber: '',
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      invoiceNumber: "",
      invoiceDate: "",
      dueDate: "",
      notes: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Calculate the total amount
  function calculateTotal() {
    const allItems = items.map((i) => i.total);

    setTotalAmount(collect(allItems).sum());
  }

  useEffect(() => {
    calculateTotal();
  });

  // Add items form functions
  function handleAddItem(e) {
    e.preventDefault();

    if (!item || !quantity || !price) {
      toast.error("Please fill in all the inputs");
    } else {
      const newItem = {
        id: uuidv4(),
        item,
        quantity,
        price,
        total,
      };
      setItem("");
      setQuantity("");
      setPrice("");
      setTotal("");
      setItems([newItem, ...items]);
      setIsEditing(false);
      toast.success("Added new item");
    }
  }

  // Calculate items amount
  useEffect(() => {
    function calculateAmount(amount) {
      setTotal(quantity * price);
    }

    calculateAmount(total);
  }, [total, price, quantity, setTotal]);
 

  // Edit function
  const handleEdit = (id) => {
    const editingRow = items.find((row) => row.id === id);
    setItems(items.filter((row) => row.id !== id));
    setIsEditing(true);
    setItem(editingRow.item);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete function
  const handleDelete = (id) => {
    setItems(items.filter((row) => row.id !== id));
    toast.error("You have deleted an item");
  };

  if (items.length === 0 && previewInvoice === true) {
    setPreviewInvoice(false);
    toast.error(
      "Please add at least one item to your invoice before you can preview"
    );
  }

  // Destructure all our state values to easily pass them as props
  const values = {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    phoneNumber,
    setPhoneNumber,
    bankName,
    setBankName,
    accountNumber,
    setAccountNumber,
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
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
    setTotalAmount,
    isEditing,
    setIsEditing,
    handleAddItem,
    handleEdit,
    handleDelete, 
    previewInvoice,
    setPreviewInvoice,
  };

  return (
    <>
      <section>
        {/* {showModal && <SendEmailModal values={values} />} */}
        {previewInvoice && <PreviewInvoice values={values} formik={formik} />}

        <div className="p-4 lg:ml-52 bg-slate-900 flex items-center justify-between">
          <Button variant="custom">Your Dashboard</Button>

          <UserButton afterSignOutUrl="/" />
        </div>

        <div>
          <div className="absolute top-4 left-4 w-40 h-40 bg-pink-500/25 blur-[100px] -z-10"></div>

          <div>
            <article>
              <Sidebar />
            </article>

            <article className="lg:pl-52">
              <h1 className="text-4xl lg:text-5xl font-bold mb-16 bg-slate-900 pt-16 text-white pb-4 px-4">
                Create Invoice
              </h1>

              <div className="px-4 xl:px-12 lg:grid lg:grid-cols-2 lg:gap-8 pb-20">
                <div> 

                  <Step1 values={values} setSteps={setSteps} formik={formik} />
                  <Step2 values={values} setSteps={setSteps} formik={formik} />
                  <Step3 values={values} setSteps={setSteps} formik={formik} />
                </div>

                <div id="pdf" className="hidden lg:block scale-90">
                  <InvoiceView values={values} formik={formik} />
                </div>
              </div>
            </article>
          </div>

          <div className="absolute right-4 bottom-4 w-40 h-40 bg-blue-500 blur-[100px] -z-10"></div>
        </div>
      </section>
    </>
  );
}
