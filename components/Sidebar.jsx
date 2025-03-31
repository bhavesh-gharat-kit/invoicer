"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaHistory, FaLock } from "react-icons/fa";
import Image from "next/image";

const links = [
  { href: "/dashboard", title: "Dashboard", icon: <FaHome /> },
  { href: "/dashboard/history", title: "History", icon: <FaHistory /> },
  {
    href: "/dashboard/privacy-policy",
    title: "Privacy Policy",
    icon: <FaLock />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden fixed top-7 right-16 z-[51] bg-slate-900 text-white p-2 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 shadow-lg`}
      >
        <div className="flex flex-col justify-between h-full px-6 py-8">
          <div>
            {/* Close Button for Mobile */}
            <button
              className="lg:hidden  absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col w-fit justify-center items-center  mx-auto">
              <Image
                className="h-14 w-14 rounded-full"
                src="/user.png"
                alt="User"
                height={256}
                width={256}
              />

              <h2 className="font-bold text-2xl text-white mb-10">Welcome</h2>
            </div>
            <ul className="grid gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                      link.href === pathname
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-500 hover:text-white"
                    }`}
                  >
                    {link.icon}{" "}
                    <span className="whitespace-nowrap">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <small className="text-white/75">
            &copy; {new Date().getFullYear()} 
            <a
              href="https://itcircle.22web.org"
              target="_blank"
              rel="noreferrer"
              className="text-white underline ml-1"
            >
              Invoicer
            </a>
          </small> */}
        </div>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
