import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs";

export default function Header() {
  const { userId } = auth();

  return (
    <>
      <header className="flex items-center justify-between py-2 px-4">
        <button variant="outline">Invoicer</button>

        {!userId ? (
          <ul className="flex items-center justify-center gap-4">
            <li>
              <button className="bg-slate-700 text-white hover:bg-slate-900 transition-all rounded-lg py-2 p-4">
                <Link href="/sign-up">Sign Up</Link>
              </button>
            </li>
            <li>
              <button className="bg-blue-700 text-white hover:bg-blue-900 transition-all rounded-lg py-2 p-4">
                <Link href="/sign-in">Sign In</Link>
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center justify-center">
            <li>
              <button className="bg-blue-700 text-white hover:bg-blue-900 transition-all rounded-lg py-2 p-4">
                <Link href="/dashboard">Go to Dashboard</Link>
              </button>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}
