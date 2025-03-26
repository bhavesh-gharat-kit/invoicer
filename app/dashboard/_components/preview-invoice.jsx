import React from "react";
import { format } from "date-fns";
import { XIcon } from "lucide-react";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function PreviewInvoice({ values, formik, setPreviewInvoice }) {
  // Create PDF
  function createPDF() {
    const invoice = document.getElementById("pdf");
    html2canvas(invoice).then((canvas) => {
      const imgData = canvas.toDataURL("img/jpeg");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });
      pdf.addImage(imgData, "JPEG", 30, -150, 150, 400, "FAST");
      pdf.save(`${formik.values.clientName} - invoice.pdf`);
    });
  }

  return (
    <>
      <div className="fixed h-screen bg-black/80 top-0 right-0 left-0 bottom-0 z-[200]">
        <div className="max-w-3xl mx-auto pt-10">
          <h2 className="text-white font-bold text-2xl flex items-center justify-between">
            <span>
              <button variant="secondary" onClick={createPDF}>
                Download Invoice
              </button>
            </span>
            <span>
              <button
                variant="custom"
                onClick={() => setPreviewInvoice(false)}
              >
                <XIcon />
              </button>
            </span>
          </h2>
        </div>

        <section className="bg-white p-4 rounded border space-y-8 max-w-3xl md:mx-auto mx-8 my-10 pt-5 pb-10 px-10 max-h-[700px] overflow-auto">
          <div className="text-right">
            <h2 className="text-lg lg:text-xl font-bold">
              {formik.values.name}
            </h2>
            <p>{formik.values.address}</p>
            <p>
              <strong>Bank Name:</strong> {formik.values.bankName}
            </p>
            <p>
              <strong>Bank Account number:</strong>{" "}
              {formik.values.accountNumber}
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg">{formik.values.clientName}</h2>
            <p>{formik.values.clientEmail}</p>
            <p>{formik.values.clientAddress}</p>
          </div>

          <div className="text-right">
            <h2 className="font-bold text-lg">Invoice Details</h2>
            <p>Invoice number: {formik.values.invoiceNumber}</p>
            {formik.values.invoiceDate && (
              <p>
                Invoice date:{" "}
                {format(new Date(formik.values.invoiceDate), "do MMMM yyyy")}
              </p>
            )}
            {formik.values.dueDate && (
              <p>
                Due date:{" "}
                {format(new Date(formik.values.dueDate), "do MMMM yyyy")}
              </p>
            )}
          </div>

          <div>
            <table width="100%" className="mb-10">
              <thead>
                <tr className="bg-gray-100 p-1">
                  <td className="font-bold">Item Name</td>
                  <td className="font-bold">Quantity</td>
                  <td className="font-bold">Price</td>
                  <td className="font-bold">Total</td>
                </tr>
              </thead>
              {values.items.map((item) => (
                <React.Fragment key={item.id}>
                  <tbody>
                    <tr className="h-10">
                      <td>{item.item}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price.toLocaleString()}</td>
                      <td>{item.total.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))}
            </table>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Rs. {values.totalAmount.toLocaleString()}
            </h2>
          </div>

          <div>
            <p className="text-slate-900 mb-2">
              <strong>Additional notes</strong>
            </p>

            <p className="w-1/2">{formik.values.notes}</p>
          </div>

          <div className="border-t pt-8">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <li>
                <strong>Name: </strong>
                {formik.values.name}
              </li>
              <li>
                <strong>Email: </strong>
                {formik.values.email}
              </li>
              <li>
                <strong>Bank Account Holder: </strong>
                {formik.values.name}
              </li>
              <li>
                <strong>Bank Account Number: </strong>
                {formik.values.accountNumber}
              </li>
              <li>
                <strong>Phone: </strong>
                {formik.values.phoneNumber}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
