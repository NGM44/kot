import React, { useState } from "react";

const SupportLanding = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message });
    setSubmitted(true);
    // Reset form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto">
      <div className="bg-gray-900 shadow-lg h-screen mx-8 my-8 rounded-lg overflow-hidden">
        <div className="sm:px-6 py-8">
          <div className="sm:grid sm:grid-cols-10">
            <div className="bg-gray-800/80 shadow-2xl  col-span-6 rounded-lg p-6 sm:mr-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Drop Enquiry
              </h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="mt-1 bg-transparent border py-2 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1 border bg-transparent py-2 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1 py-2 px-2 bg-transparent  border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Your Contact Number
                    </label>
                    <input
                      type="number"
                      id="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                      className="mt-1 py-2 px-2 bg-transparent  border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Enquriry Meesage
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-1 py-2 px-2 bg-transparent border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 px-6 bg-green-100 text-green-800 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="mt-1">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </div>
            <div className="col-span-4 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team.
                </p>
                <a
                  href="tel:+18001234567"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call 1-800-123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportLanding;