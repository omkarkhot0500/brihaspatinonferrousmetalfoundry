import React, { useState } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_companyname: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.user_name) errors.user_name = "Name is required";
    if (!formData.user_companyname) errors.user_companyname = "Company Name is required";
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.user_phone) errors.user_phone = "Phone is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_846meoc",
          "template_vjj22lq",
          formData,
          "623nyBirJFx7iuR6Q"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({
            user_name: "",
            user_companyname: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <Head>
        <title>Get in Touch | Contact Us for More Information</title>
        <meta
          name="description"
          content="Contact our team today. Fill out this simple form and we'll get back to you as soon as possible."
        />
        <meta
          name="keywords"
          content="contact, contact form, get in touch, inquiry, customer support"
        />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        <meta property="og:title" content="Contact Us | Your Company Name" />
        <meta
          property="og:description"
          content="Reach out to us with your questions or requests. We're here to help!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | Your Company Name" />
        <meta
          name="twitter:description"
          content="Get in touch with our team. We'll respond promptly to your inquiry."
        />
      </Head>

      <Toaster />

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Get in Touch
          </h1>
          <p className="text-gray-600">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-lg"
          aria-label="Contact form"
        >
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-700 font-medium mb-2"
            >
              NAME <span className="text-red-500">(REQUIRED)</span>
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="name-description"
            />
            {errors.user_name && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                aria-live="polite"
                className="text-sm text-pink-700"
              >
                {errors.user_name}
              </motion.p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_companyname"
              className="block text-gray-700 font-medium mb-2"
            >
              COMPANY NAME <span className="text-red-500">(REQUIRED)</span>
            </label>
            <input
              type="text"
              id="user_companyname"
              name="user_companyname"
              value={formData.user_companyname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.user_companyname && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                aria-live="polite"
                className="text-sm text-pink-700"
              >
                {errors.user_companyname}
              </motion.p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 font-medium mb-2"
            >
              EMAIL <span className="text-red-500">(REQUIRED)</span>
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="email-description"
            />
            {errors.user_email && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                aria-live="polite"
                className="text-sm text-pink-700"
              >
                {errors.user_email}
              </motion.p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_phone"
              className="block text-gray-700 font-medium mb-2"
            >
              PHONE <span className="text-red-500">(REQUIRED)</span>
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="phone-description"
            />
            {errors.user_phone && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                aria-live="polite"
                className="text-sm text-pink-700"
              >
                {errors.user_phone}
              </motion.p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              MESSAGE <span className="text-red-500">(REQUIRED)</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="message-description"
            ></textarea>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                aria-live="polite"
                className="text-sm text-pink-700"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Form;