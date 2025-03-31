import { Sidebar } from "@/components";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="flex-grow-0">
        <Sidebar />
      </div>
      <div className="flex-grow max-h-screen overflow-y-auto overflow-x-auto">
        <div className="p-4 sticky top-0 z-50 bg-slate-900 w-full flex items-center justify-between">
          <Image
          className="h-16 w-auto rounded-md shadow-md"
          src="/logo1.png"
          alt="Invoicer"
          height={256}
          width={256}
          />
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="min-h-[90vh]">{children}</div>
        <footer className="py-4 bg-gray-900 text-white text-center text-sm">
          <p>
            Invoicer - A Final Year Project by{" "}
            <span className="font-semibold">Rohan & Bhavesh</span>
          </p>
          <p>Submitted in partial fulfillment for the degree of BSc IT</p>
          <p>Mumbai University, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default layout;
