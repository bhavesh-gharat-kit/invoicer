import React from "react";
import Header from "./_components/header";
import { CheckCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default function LandingPage() {
  const { userId } = auth();

  return (
    <>
      <Header />

      <section className="relative space-y-10 text-center py-40 px-6 max-w-5xl mx-auto bg-gray-50 shadow-md rounded-lg">
        <div className="absolute w-48 h-48 bg-green-400 blur-[120px] -z-10"></div>

        <h1 className="text-5xl font-extrabold text-gray-900">
          Simplify Your Invoicing with Invoicer Pro
        </h1>
        <p className="text-gray-700 text-lg">
          Manage your invoices effortlessly and keep track of your finances with
          Invoicer Pro. With a sleek interface and powerful features, you're
          just a click away from optimizing your business transactions.
        </p>

        <div className="grid gap-5 text-left text-gray-700">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <span>Create and manage professional invoices for your business.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <span>Send invoices directly to clients via email in seconds.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <span>Seamless integration with payment platforms.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <span>Track invoice statuses and monitor payments with ease.</span>
          </div>
        </div>

        {!userId ? (
          <div className="flex items-center justify-center space-x-6">
            <Button asChild variant="primary" className="bg-blue-600 hover:bg-blue-500 text-white">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button asChild variant="secondary" className="border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button asChild variant="primary" className="bg-blue-600 hover:bg-blue-500">
              <Link href="/dashboard">Access Your Dashboard</Link>
            </Button>
          </div>
        )}

        <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-400 blur-[120px] -z-10"></div>
      </section>
    </>
  );
}


// import React from "react";
// import Header from "./_components/header";
// import { Check } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import Link from "next/link";
// import { auth } from "@clerk/nextjs";

// export default function LandingPage() {
//   const { userId } = auth();

//   return (
//     <>
//       <Header />

//       <section className="relative space-y-8 text-center py-32 px-4 max-w-4xl mx-auto">
//         <div className="absolute w-40 h-40 bg-pink-500 blur-[100px] -z-10"></div>

//         <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
//           Welcome to Invoicer V2
//         </h1>
//         <p className="text-slate-600 lg:text-xl">
//           Easily create invoices for yourself, your clients all at the
//           convenience of your mobile phone or PC. Version 2 offers improved
//           performance, better responsiveness on mobile, and better UI design by{" "}
//           <a
//             href="https://itcircle.22web.org"
//             target="_blank"
//             rel="noreferrer"
//             className="underline"
//           >
//             Saurabh Bhoir.
//           </a>
//         </p>

//         <ul className="text-slate-600 text-left grid gap-4">
//           <li className="text-center flex flex-col md:flex-row items-center md:justify-center gap-2">
//             <Check className="text-white bg-emerald-500 rounded-full" /> Create
//             invoices for yourself.
//           </li>
//           <li className="text-center flex flex-col md:flex-row items-center md:justify-center gap-2">
//             <Check className="text-white bg-emerald-500 rounded-full" /> Create,
//             download and send invoices to your clients.
//           </li>
//           <li className="text-center flex flex-col md:flex-row items-center md:justify-center gap-2">
//             <Check className="text-white bg-emerald-500 rounded-full" /> Only
//             use your credit card if you want to continue after your free trial.
//           </li>
//         </ul>

//         {!userId ? (
//           <ul className="flex items-center justify-center gap-4">
//             <li>
//               <Button asChild variant="secondary">
//                 <Link href="/sign-up">Sign Up</Link>
//               </Button>
//             </li>
//             <li>
//               <Button asChild variant="default">
//                 <Link href="/sign-in">Sign In</Link>
//               </Button>
//             </li>
//           </ul>
//         ) : (
//           <ul className="flex items-center justify-center">
//             <li>
//               <Button asChild variant="default">
//                 <Link href="/dashboard">Go to Dashboard</Link>
//               </Button>
//             </li>
//           </ul>
//         )}

//         <div className="absolute right-0 w-40 h-40 bg-blue-500 blur-[100px] -z-10"></div>
//       </section>
//     </>
//   );
// }
