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
  const [buttonText, setButtonText] = useState("Send Message");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

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

    setButtonText("Sending...");
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
          setButtonText("Sent!");
          setFormData({ name: "", email: "", help: "" });
          setTimeout(() => {
            setMessage("");
            setButtonText("Send Message");
          }, 5000);
        },
        () => {
          setMessage("An error occurred, please try again.");
          setButtonText("Send Message");
        }
      );
  };

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-lg font-bold text-ink mb-6">Send a Message</h3>
      <form onSubmit={sendEmail} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-ink-secondary mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            maxLength="50"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-surface-subtle border border-border rounded-xl text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-ink-secondary mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            maxLength="55"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-surface-subtle border border-border rounded-xl text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="help"
            className="block text-sm font-medium text-ink-secondary mb-1.5"
          >
            Message
          </label>
          <textarea
            name="help"
            id="help"
            placeholder="Tell me about your project or idea..."
            value={formData.help}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2.5 bg-surface-subtle border border-border rounded-xl text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
            required
          />
          {errors.help && (
            <p className="text-red-500 text-xs mt-1">{errors.help}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={buttonText === "Sending..."}
        >
          {buttonText}
        </button>

        {message && (
          <p
            className={`text-sm mt-2 ${
              message.includes("error") ? "text-red-500" : "text-emerald-600"
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
