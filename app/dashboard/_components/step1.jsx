"use client";

import { EditOwnerDetail } from "@/components";
import useInvoiceStore from "@/store/store";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function Step1({ values, formik }) {
  // Prevent hydration errors
  const [isMounted, setIsMounted] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const { ownerData, getOwnerData } = useInvoiceStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <section className="space-y-8">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">Your details</h2>
          <button
            onClick={() => setShowEditForm(!showEditForm)}
            className="flex items-center gap-2 px-4 py-1 bg-slate-900 hover:bg-slate-950 transition-all text-white text-sm rounded-md"
          >
            <FaPencilAlt className="text-sm" />
            Edit
          </button>
        </div>

        <form className="grid gap-4" onSubmit={formik.handleSubmit}>
          <div>
            <span className="text-sm pr-2 text-slate-800">Name:</span>
            <span>{ownerData?.name}</span>
          </div>
          <div>
            <span className="text-sm pr-2 text-slate-800">Email ID:</span>
            <span>{ownerData?.email}</span>
          </div>
          <div>
            <span className="text-sm pr-2 text-slate-800">Contact No:</span>
            <span>{ownerData?.contactNumber}</span>
          </div>
          <div>
            <span className="text-sm pr-2 text-slate-800">Address:</span>
            <span>{ownerData?.address}</span>
          </div>
          <div>
            <span className="text-sm pr-2 text-slate-800">Bank Name:</span>
            <span>{ownerData?.bankName}</span>
          </div>
          <div>
            <span className="text-sm pr-2 text-slate-800">A/c No:</span>
            <span>{ownerData?.accountNumber}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <article className="md:flex-1">
              <label htmlFor="invoiceDate" className="label">
                Invoice date
              </label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice date"
                className="input"
                value={formik.values.invoiceDate}
                onChange={formik.handleChange}
              />
              {formik.errors.invoiceDate && (
                <small className="text-rose-400 text-xs font-semibold">
                  {formik.errors.invoiceDate}
                </small>
              )}
            </article>

            <article className="md:flex-1">
              <label htmlFor="dueDate" className="label">
                Due date
              </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due by"
                className="input"
                value={formik.values.dueDate}
                onChange={formik.handleChange}
              />
              {formik.errors.dueDate && (
                <small className="text-rose-400 text-xs font-semibold">
                  {formik.errors.dueDate}
                </small>
              )}
            </article>

            <article className="md:flex-1">
              <label htmlFor="invoiceNumber" className="label">
                Invoice number
              </label>
              <input
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice number"
                className="input"
                value={formik.values.invoiceNumber}
                onChange={formik.handleChange}
              />
              {formik.errors.invoiceNumber && (
                <small className="text-rose-400 text-xs font-semibold">
                  {formik.errors.invoiceNumber}
                </small>
              )}
            </article>
          </div>
        </form>
      </section>
      {showEditForm && (
        <EditOwnerDetail
          onClose={() => setShowEditForm(false)}
          onSubmit={() => {
            getOwnerData();
            setShowEditForm(false);
          }}
        />
      )}
    </>
  );
}
