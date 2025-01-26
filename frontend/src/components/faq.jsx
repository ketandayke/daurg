import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is D&G Academy?",
      answer:
        "D&G Academy is a leading educational institution founded in 2015. We provide comprehensive coaching for students from Nursery to Class 10, focusing on quality education and holistic growth.",
    },
    {
      question: "Where is D&G Academy located?",
      answer:
        "Our primary center is located in Jambara, behind Ram Mandir. For directions, you can refer to the 'Get Directions' link provided on our website.",
    },
    {
      question: "What courses and classes do you offer?",
      answer:
        "We offer coaching for all classes from Nursery to Class 10, covering the complete school curriculum. We also provide personalized attention and support to help students excel.",
    },
    {
      question: "How do I enroll my child at D&G Academy?",
      answer:
        "You can visit our center in Jambara or contact us at +91-8305868010 for enrollment details. You can also use the contact form on our website to get in touch with us.",
    },
    {
      question: "What sets D&G Academy apart from other coaching centers?",
      answer:
        "At D&G Academy, we prioritize quality education, a nurturing environment, and accessibility for students in rural areas. We also focus on creating employment opportunities for talented teachers.",
    },
    {
      question: "How can I contact D&G Academy for more information?",
      answer:
        "You can email us at dandgacademy@gmail.com or call us at +91-8305868010. Our team will be happy to assist you with any inquiries.",
    },
  ];

  return (
    <div className="w-full px-6 md:px-24 py-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h1>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
