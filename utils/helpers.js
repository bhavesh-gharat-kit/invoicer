// utils/helpers.js
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";
import { toast } from "react-toastify";

// ✅ Email Validation Function
export const validateEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// ✅ Form Validation
export const validateForm = (values) => {
  const errors = {};

  if (!values.name) errors.name = "Please enter your name or company name";
  if (!values.email || !validateEmail(values.email))
    errors.email = "Please enter a valid email address";
  if (!values.address) errors.address = "Your address is required";
  if (!values.phoneNumber) errors.phoneNumber = "Your phone number is required";
  if (!values.bankName) errors.bankName = "Your bank name is required";
  if (!values.accountNumber)
    errors.accountNumber = "Your account number is required";
  if (!values.clientName) errors.clientName = "Client name is required";
  if (!values.clientEmail || !validateEmail(values.clientEmail))
    errors.clientEmail = "Please enter a valid email address";
  if (!values.clientAddress)
    errors.clientAddress = "Client address is required";
  if (!values.invoiceNumber)
    errors.invoiceNumber = "Invoice number is required";
  if (!values.invoiceDate) errors.invoiceDate = "Invoice date is required";
  if (!values.dueDate) errors.dueDate = "Due date is required";

  return errors;
};

// ✅ Calculate Total Amount
export const calculateTotalAmount = (items) =>
  collect(items.map((i) => i.total)).sum();

// ✅ Handle Adding Items
export const handleAddItem = ({
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
}) => {
  if (!item || !quantity || !price) {
    toast.error("Please fill in all inputs");
    return;
  }

  const newItem = {
    id: uuidv4(),
    item,
    quantity,
    price,
    total: quantity * price,
  };
  setItems([newItem, ...items]);
  setItem("");
  setQuantity("");
  setPrice("");
  setTotal(0);
  setIsEditing(false);
  toast.success("Added new item");
};

// ✅ Handle Editing Items
export const handleEditItem = (
  id,
  items,
  setItems,
  setItem,
  setQuantity,
  setPrice,
  setIsEditing
) => {
  const editingRow = items.find((row) => row.id === id);
  setItems(items.filter((row) => row.id !== id));
  setIsEditing(true);
  setItem(editingRow.item);
  setQuantity(editingRow.quantity);
  setPrice(editingRow.price);
};

// ✅ Handle Deleting Items
export const handleDeleteItem = (id, items, setItems) => {
  setItems(items.filter((row) => row.id !== id));
  toast.error("You have deleted an item");
};

// Function to save invoice data to localStorage
export function setOwnerData(data) {
  if (typeof window !== "undefined") {
    localStorage.setItem("invoicer-owner-data", JSON.stringify(data));
  }
}

// Function to retrieve invoice data from localStorage
export function getOwnerData() {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("invoicer-owner-data");
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
}

export function addToHistory(data) {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("invoicer-history");
    storedData ? JSON.parse(storedData).append(data) : data;
    localStorage.setItem("invoicer-history", JSON.stringify(data));
  }
}
export function resetHistory() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("invoicer-history");
  }
}

export function getHistory() {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("invoicer-history");
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
}
