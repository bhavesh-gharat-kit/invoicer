"use client";
import useInvoiceStore from "@/store/store";
import React, { useEffect, useState } from "react";
import { FaFileInvoice, FaEye, FaTimes, FaInbox } from "react-icons/fa";

export default function HistoryPage() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const { history, resetHistory } = useInvoiceStore();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          <FaFileInvoice /> Invoice History
        </h1>
        {history?.length > 0 && (
          <button
            onClick={resetHistory}
            className="py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white transition-all flex items-center justify-center gap-2"
          >
            <FaTimes />
            Reset
          </button>
        )}
      </div>
      {history?.length < 1 ? (
        <div className="flex flex-col items-center justify-center h-96 bg-white rounded-lg p-6 text-gray-600">
          <FaInbox className="text-6xl text-gray-400 animate-bounce mb-4" />
          <p className="text-lg font-medium">No invoice history found.</p>
          <p className="text-sm text-gray-500">
            Create or process an invoice to see history here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-center">Invoice #</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Amount</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {history.map((invoice) => (
                <tr key={invoice.no} className="border-b hover:bg-gray-100">
                  <td className="p-3 text-center">{invoice.no}</td>
                  <td className="p-3">{invoice.name}</td>
                  <td className="p-3">{invoice.email}</td>
                  <td className="p-3">
                    ₹
                    {invoice.items
                      .reduce((sum, item) => sum + item.price, 0)
                      .toLocaleString()}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => setSelectedInvoice(invoice)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-2 mx-auto"
                    >
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Invoice #{selectedInvoice.no}
            </h2>
            <p>
              <strong>Name:</strong> {selectedInvoice.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedInvoice.email}
            </p>
            <p>
              <strong>Address:</strong> {selectedInvoice.addr}
            </p>
            <p>
              <strong>Note:</strong> {selectedInvoice.note}
            </p>
            <table className="w-full mt-4 text-left border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2">Item</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {selectedInvoice.items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.qty}</td>
                    <td className="p-2">₹{item.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 font-bold">
              Total: ₹
              {selectedInvoice.items
                .reduce((sum, item) => sum + item.price, 0)
                .toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
