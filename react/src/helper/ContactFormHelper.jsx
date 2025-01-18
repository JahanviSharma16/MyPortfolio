import { useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "./endpoint";

const ContactFormHelper = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    help: "",
  });

  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear specific field error on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateName(formData.name)) {
      newErrors.name = "Name must only contain letters.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.help.trim()) {
      newErrors.help = "Message cannot be empty.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setButtonText("Submitting...");
    const emailData = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.help,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Your message has been sent successfully!");
          setButtonText("Submitted");
          setFormData({ name: "", email: "", help: "" });
          setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
        },
        () => {
          setMessage("An error occurred, please try again.");
          setButtonText("Submit");
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-[#0E0E10] to-black p-6 md:p-10 lg:p-12 rounded">
      <h2 className="text-2xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-[16px] font-bold mb-4 md:mb-6">
        Get in Touch
      </h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block 2xl:text-md lg:text-sm text-sm font-medium"
          >
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            maxLength="50"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-grey text-black rounded focus:outline-none focus:ring-2 focus:ring-[#E37931]"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block 2xl:text-md lg:text-sm text-sm font-medium"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            maxLength="55"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-grey text-black rounded focus:outline-none focus:ring-2 focus:ring-[#E37931]"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="help"
            className="block 2xl:text-md lg:text-sm text-sm font-medium"
          >
            How Can I Help?
          </label>
          <textarea
            name="help"
            id="help"
            placeholder="Your Message"
            value={formData.help}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-grey text-black rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#E37931]"
            required
          ></textarea>
          {errors.help && <p className="text-red-500 text-sm">{errors.help}</p>}
        </div>

        <div className="flex justify-left">
          <button
            type="submit"
            className="px-6 py-2 2xl:text-md text-sm bg-gradient-to-r from-customBlue to-customPurple rounded-md text-white hover:opacity-90 transition-opacity"
            disabled={buttonText === "Submitting..."}
          >
            {buttonText}
          </button>
        </div>

        {message && (
          <p
            className={`text-center text-lg mt-4 ${
              message.includes("error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactFormHelper;
