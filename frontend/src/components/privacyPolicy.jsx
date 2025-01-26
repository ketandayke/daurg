import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full px-6 md:px-24 py-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>

      {/* Content */}
      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">1. Introduction</h2>
          <p>
            At <strong>D&G Academy</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website, services, and products.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">2. Information We Collect</h2>
          <p>We may collect the following types of information from you:</p>
          <ul className="list-disc ml-6">
            <li>Personal details such as name, email address, phone number, and address.</li>
            <li>Educational details or preferences for learning materials.</li>
            <li>Technical data like IP address, browser type, and device information.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">3. How We Use Your Information</h2>
          <p>Your information may be used for the following purposes:</p>
          <ul className="list-disc ml-6">
            <li>To provide you with relevant educational services and support.</li>
            <li>To communicate updates, offers, and important notifications.</li>
            <li>To analyze user behavior and improve our website and offerings.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">4. Information Sharing</h2>
          <p>
            We respect your privacy and will never sell or share your personal information with third parties, except in the following situations:
          </p>
          <ul className="list-disc ml-6">
            <li>To comply with legal obligations or protect our rights.</li>
            <li>With trusted service providers assisting us in operations (e.g., payment processors).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">5. Data Security</h2>
          <p>
            We take appropriate measures to ensure your data is secure, including encryption, secure servers, and limited access to personal data by authorized personnel only.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">6. Your Rights</h2>
          <p>You have the following rights concerning your data:</p>
          <ul className="list-disc ml-6">
            <li>Access and review the personal data we hold about you.</li>
            <li>Request corrections or updates to your data.</li>
            <li>Request deletion of your personal data, subject to legal requirements.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">7. Changes to the Privacy Policy</h2>
          <p>
            We may update this Privacy Policy occasionally to reflect changes in our practices or regulations. We recommend reviewing this page periodically for the latest updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <address className="italic">
            <strong>D&G Academy</strong><br />
            Email: <a href="mailto:dandgacademy@gmail.com" className="text-blue-500">dandgacademy@gmail.com</a><br />
            Phone: +91-8305868010
          </address>
        </section>
      </div>
    </div>
  );
}
