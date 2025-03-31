import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-16 px-6 lg:px-8 max-w-5xl mx-auto text-gray-800">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your privacy is important to us. This policy explains how your data is handled within the Invoicer web app.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">No Data Collection</h2>
            <p className="text-gray-600 mt-2">
              The Invoicer web app does not collect, store, or transmit any personal data to external servers. All invoice details, including billing history, are stored locally in your browser's local storage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Local Storage Usage</h2>
            <p className="text-gray-600 mt-2">
              All data entered into the Invoicer web app remains on your device. It is stored in your browser's local storage and is never shared with any third party or remote server. Clearing your browser’s local storage or cache will permanently delete all stored data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
            <p className="text-gray-600 mt-2">
              Since no data is transmitted over the internet, your information remains secure on your own device. However, it is your responsibility to manage and protect access to your browser’s local storage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Managing Your Data</h2>
            <p className="text-gray-600 mt-2">
              You have full control over your data. If you wish to delete your invoices or billing history, you can clear your browser’s local storage manually. There are no accounts or servers storing your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2">
              If you have any questions regarding this privacy policy or how data is handled within the Invoicer web app, feel free to contact us.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            This privacy policy was last updated on 27/03/2025. Please review it periodically for any updates.
          </p>
        </div>
      </section>
    </>
  );
}
