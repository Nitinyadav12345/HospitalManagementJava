import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div class="bg-white">
        <header class="bg-pink-700 text-white text-center py-12">
          <h1 class="text-4xl font-bold mt-16">Contact Us</h1>
        </header>
        <section class="text-center py-12 px-4">
          <h2 class="text-2xl font-bold">Get In Touch</h2>
          <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
            We are here to help you. Reach out to us via any of the following
            methods.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div class="p-4 shadow-lg rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors">
              <h3 class="text-xl font-bold">Call Us</h3>
              <p class="text-gray-700 mt-2">+91 1234567890</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors">
              <h3 class="text-xl font-bold">Email Us</h3>
              <p class="text-gray-700 mt-2">contact@hms.com</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors">
              <h3 class="text-xl font-bold">Visit Us</h3>
              <p class="text-gray-700 mt-2">MG Road, Pune</p>
            </div>
          </div>
        </section>
        <section class="bg-gray-100 py-12 px-4">
          <h2 class="text-2xl font-bold text-center">Send Us A Message</h2>
          <form class="max-w-2xl mx-auto mt-8 space-y-8">
            <div>
              <label htmlFor="name" class="block text-gray-700 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" class="block text-gray-700 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" class="block text-gray-700 font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-pink-700 text-white py-3 rounded-lg shadow-lg hover:bg-pink-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
        <section class="text-center py-12 px-4">
          <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
          <div class="mt-8">
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 class="text-xl font-bold">What are your operating hours?</h3>
              <p class="mt-2 text-gray-700">
                We operate from 9 AM to 5 PM, Monday to Friday.
              </p>
            </div>
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 class="text-xl font-bold">How can I book an appointment?</h3>
              <p class="mt-2 text-gray-700">
                You can book an appointment through our website or by calling
                our office.
              </p>
            </div>
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
              <h3 class="text-xl font-bold">
                Do you offer telemedicine services?
              </h3>
              <p class="mt-2 text-gray-700">
                Yes, we offer telemedicine consultations.
              </p>
            </div>
          </div>
        </section>
        <footer class="bg-pink-700 text-white text-center py-8">
          <p>&copy; Copyright HMS . All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
