import { useState } from "react";
import Layout from "@/app/components/Layout";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    console.log("Form Data before submission:", formData); // Debugging step

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to send message.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 mt-10 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-[#041338] text-white rounded-lg sm:rounded-r-lg hover:bg-gray-200 transition-all duration-300"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </section>

      <section className="mt-20 text-center px-4">
        <div className="mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Or connect with me on social media:
          </p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://x.com/FortuneChineny1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/fortunatechie?igsh=bXc2a3pnMm55ZWl3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
