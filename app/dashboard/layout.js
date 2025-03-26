import { Sidebar } from "@/components";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-grow max-h-screen overflow-y-auto overflow-x-auto">
        <div className="p-4 bg-slate-900 w-full flex items-center justify-between">
          <button className=" px-2 py-1 text-white font-extrabold hover:bg-blue-100/10 transition-all italic rounded-md">
            INVOICER
          </button>
          <UserButton />
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
