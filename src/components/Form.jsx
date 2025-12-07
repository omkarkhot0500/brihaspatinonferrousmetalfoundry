import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
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
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) errors.phone = "Phone is required";
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
          {
            user_name: formData.name,
            user_companyname: formData.companyName,
            user_email: formData.email,
            user_phone: formData.phone,
            message: formData.message,
          },
          "623nyBirJFx7iuR6Q"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            companyName: "",
            email: "",
            phone: "",
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
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name (Required)"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border
            Oborder-gray-900 bg-transparent px-3 py-2 text-sm
            focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Company Name (optional) */}
        <div className="mb-4">
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            placeholder="Company Name"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border
            Oborder-gray-900 bg-transparent px-3 py-2 text-sm
            focus:border-gray-400 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email (Required)"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border
            Oborder-gray-900 bg-transparent px-3 py-2 text-sm
            focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="Phone (Required)"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border
            Oborder-gray-900 bg-transparent px-3 py-2 text-sm
            focus:border-gray-400 focus:outline-none"
          />
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message (Required)"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border
            Oborder-gray-900 bg-transparent px-3 py-2 text-sm
            focus:border-gray-400 focus:outline-none"
            rows="4"
          />
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
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 
            ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </motion.form>
    </div>
  );
};

export default Form;
