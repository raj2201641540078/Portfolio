import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import profilePhoto from "../assets/images/profile.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "27823713-322b-43d8-a3d8-ff9063ca913e"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 text-white min-h-screen"
    >
      {/* Social Media Section with Photo */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 border-b border-gray-700/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-30 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl p-1 sm:p-1.5">
                  <div className="w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center overflow-hidden">
                    <img
                      src={profilePhoto}
                      alt="Raj Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Connect With Me
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  Reach out through any of these platforms. I'm always happy to connect!
                </p>
              </div>

              {/* Social Media Icons Grid */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
                {/* GitHub */}
                <a
                  href="https://github.com/raj2201641540078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
                  title="GitHub"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full border-2 border-gray-500 group-hover:border-gray-400 transition-all duration-300"></div>
                  <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gray-300 relative z-10 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/raj-singh-201514292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
                  title="LinkedIn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full border-2 border-blue-500 group-hover:border-blue-400 transition-all duration-300"></div>
                  <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-blue-300 relative z-10 group-hover:text-white transition-colors" />
                </a>

                {/* Email */}
                <a
                  href="mailto:raajjsingh8179@gmail.com"
                  className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
                  title="Email"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full border-2 border-red-500 group-hover:border-red-400 transition-all duration-300"></div>
                  <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-red-300 relative z-10 group-hover:text-white transition-colors" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916387683918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
                  title="WhatsApp"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full border-2 border-green-500 group-hover:border-green-400 transition-all duration-300"></div>
                  <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-green-300 relative z-10 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">raajjsingh8179@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <FaWhatsapp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-400">+91 6387683918</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Kanpur, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-6 sm:p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
