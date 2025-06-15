import React, { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.user_name) newErrors.user_name = "Name is required";
    if (!formData.user_companyname) newErrors.user_companyname = "Company is required";
    if (!formData.user_email) newErrors.user_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.user_email)) newErrors.user_email = "Invalid email";
    if (!formData.user_phone) newErrors.user_phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    emailjs
      .send(
        "service_846meoc",       // Your service ID
        "template_vjj22lq",      // Your template ID
        formData,
        "623nyBirJFx7iuR6Q"      // Your public key
      )
      .then(() => {
        toast.success("Message sent!");
        setFormData({
          user_name: "",
          user_companyname: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <Helmet>
        <title>Contact Us | Your Site</title>
        <meta name="description" content="Reach out to our team today!" />
      </Helmet>

      <Toaster />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg p-8 rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>

        {["user_name", "user_companyname", "user_email", "user_phone", "message"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block mb-1 font-medium capitalize" htmlFor={field}>
              {field.replace("user_", "").replace("_", " ")}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                name={field}
                rows={4}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            ) : (
              <input
                id={field}
                name={field}
                type={field === "user_email" ? "email" : "text"}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            )}
            {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
