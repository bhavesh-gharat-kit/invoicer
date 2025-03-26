import React from "react";
import { Header } from "@/components";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default function LandingPage() {
  const { userId } = auth();

  return (
    <>
      <Header />

      <section className="relative text-center py-20 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl space-y-8 md:py-28 md:px-12 lg:px-16">
        <div className="absolute w-52 h-52 bg-green-400 blur-[120px] -z-10 top-10 left-10"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Simplify Your Invoicing with <span className="text-blue-600">Invoicer Pro</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Manage your invoices effortlessly and keep track of your finances with Invoicer Pro.
          Optimize your business transactions with ease.
        </p>

        <div className="grid gap-4 text-left text-gray-700 md:text-lg">
          {["Create and manage professional invoices for your business.",
            "Send invoices directly to clients via email in seconds.",
            "Seamless integration with payment platforms.",
            "Track invoice statuses and monitor payments with ease."]
            .map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>{feature}</span>
              </div>
          ))}
        </div>

        {!userId ? (
          <div className="flex items-center justify-center space-x-6">
            <Link href="/sign-up">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all">
                Get Started
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-lg font-medium transition-all">
                Sign In
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center">
            <Link href="/dashboard">
              <button className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all">
                Access Your Dashboard
              </button>
            </Link>
          </div>
        )}

        <div className="absolute right-10 bottom-10 w-52 h-52 bg-purple-400 blur-[120px] -z-10"></div>
      </section>
    </>
  );
}