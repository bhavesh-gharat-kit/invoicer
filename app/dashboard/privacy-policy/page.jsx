import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-16 px-6 lg:px-8 max-w-5xl mx-auto text-gray-800">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your privacy is important to us. This policy outlines how your personal information is collected, used, and shared.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            <p className="text-gray-600 mt-2">
              We collect personal information that you provide to us such as your name, email address, payment information, and other necessary details for creating invoices and managing your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            <p className="text-gray-600 mt-2">
              Your information is used to provide and improve our services, process your transactions, and communicate with you about your account and our services. We do not share your personal data with third parties except as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Security of Your Information</h2>
            <p className="text-gray-600 mt-2">
              We take your privacy seriously and take necessary measures to protect your personal data from unauthorized access, alteration, and destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Your Data Protection Rights</h2>
            <p className="text-gray-600 mt-2">
              You have the right to access, update, or delete your personal information at any time. To exercise these rights, please contact us at{" "}
              <a href="mailto:support@itcircle.com" className="underline text-blue-600">support@itcircle.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2">
              If you have any questions or concerns regarding this privacy policy or our data practices, please feel free to contact us.
            </p>
            <p className="text-gray-600">
              Bhavesh Gharat, Asangaon, MH 421601.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            This privacy policy was last updated on 26/09/2024. Please review it periodically for any updates.
          </p>
        </div>
      </section>
    </>
  );
}
