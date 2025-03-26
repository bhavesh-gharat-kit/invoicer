"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    href: "/dashboard/history",
    title: "History",
  },
  {
    href: "/dashboard/privacy-policy",
    title: "Privacy Policy",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-52 flex-shrink-0 bg-slate-900 text-white h-screen">
      <div className="flex flex-col justify-between h-full px-4 py-8">
        <div>
          <h2 className="font-bold text-lg text-white">Welcome</h2>

          <ul className="mt-16 grid gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    link.href === pathname && "bg-slate-700 opacity-100"
                  } rounded-lg py-2 px-4 w-full opacity-75 transition`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <small className="text-white/75">
          &copy; Copyright{" "}
          <a
            href="https://itcircle.22web.org"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            Invoicer
          </a>{" "}
          {new Date().getFullYear()}
        </small>
      </div>
    </aside>
  );
}
