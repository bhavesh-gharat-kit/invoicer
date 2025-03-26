"use client";

import React from "react";
import List from "./list";
import { ToastContainer } from "react-toastify";
import { FaCheckDouble, FaFile, FaFileAlt, FaPlus } from "react-icons/fa";

export default function Step3({ values, formik, okandReset }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <section className="space-y-8 mt-12">
        <h2 className="font-bold text-xl">Item Descriptions</h2>

        <form onSubmit={handleSubmit} className="grid gap-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <article className="md:flex-1">
              <label htmlFor="item-name" className="label">
                Item name
              </label>
              <input
                type="text"
                name="item-name"
                id="item-name"
                placeholder="Item name"
                className="input"
                value={values.item}
                onChange={(e) => values.setItem(e.target.value)}
              />
            </article>

            <article className="md:flex-1">
              <label htmlFor="quantity" className="label">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity of the items"
                className="input"
                value={values.quantity}
                onChange={(e) => values.setQuantity(e.target.value)}
              />
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="md:flex-1">
              <label htmlFor="price" className="label">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price of the item"
                className="input"
                value={values.price}
                onChange={(e) => values.setPrice(e.target.value)}
              />
            </article>

            <article>
              <label htmlFor="total" className="label">
                Total
              </label>
              <p className="border bg-slate-200 py-2 rounded px-2">
                {values.total.toLocaleString()}
              </p>
            </article>

            <button
              className="flex gap-2 items-center justify-center px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-900 transition-all text-white"
              onClick={values.handleAddItem}
            >
              <FaPlus />
              Add item
            </button>
          </div>

          <List items={values} />

          <article className="md:flex-1">
            <label htmlFor="notes" className="label">
              Additional notes
            </label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              className="textarea"
              value={formik.values.notes}
              onChange={formik.handleChange}
              placeholder="Important information the client should know about"
              spellCheck={true}
            ></textarea>
            {!formik.errors.notes ? null : (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.notes}
              </small>
            )}
          </article>
        </form>

        <ul className="flex flex-wrap items-center justify-between gap-4">
          <li className="flex justify-between gap-2">
            <button
              onClick={() => values.setPreviewInvoice(true)}
              variant="default"
              className="flex gap-2 items-center justify-center px-4 py-1 rounded-md bg-slate-800 hover:bg-slate-900 transition-all text-white"
            >
              <FaFileAlt />
              Preview Invoice
            </button>
            <button
              className="flex gap-2 items-center justify-center px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-900 transition-all text-white"
              onClick={() => okandReset(["hello"])}
            >
              <FaCheckDouble />
              Done
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
