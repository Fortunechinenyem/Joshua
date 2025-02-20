"use client";
import { useEffect, useState } from "react";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
  FaHandshake,
  FaCar,
  FaCogs,
  FaQuoteLeft,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import FuelSavingsCalculator from "@/app/components/FuelSavingsCalculator";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const expertiseList = [
    {
      icon: <FaHandshake className="text-4xl text-[#041338]" />,
      title: "Auto Consulting",
      description:
        "Expert guidance on vehicle selection, valuation, and procurement.",
    },
    {
      icon: <FaCar className="text-4xl text-[#041338]" />,
      title: "CNG Conversion",
      description:
        "Certified installations and advice on CNG adoption for fuel efficiency.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#041338]" />,
      title: "Fleet Management",
      description:
        "Optimizing business fleets for cost-efficiency and performance.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Joshua's expertise in fleet management saved our company thousands of dollars. Highly recommended!",
      name: "John Doe",
      company: "ABC Logistics",
    },
    {
      quote:
        "The CNG conversion service was seamless, and the team was professional. Great experience!",
      name: "Jane Smith",
      company: "EcoTransit",
    },
    {
      quote:
        "Joshua provided invaluable advice on vehicle procurement. His insights were spot on!",
      name: "Michael Brown",
      company: "Urban Motors",
    },
  ];

  const stats = [
    { number: "6+", label: "Years of Experience" },
    { number: "100+", label: "Vehicles Managed" },
    { number: "N10M+", label: "Saved for Clients" },
  ];
  const faqs = [
    {
      question: "What is CNG conversion?",
      answer:
        "CNG conversion involves modifying a vehicle to run on compressed natural gas, which is a more affordable and eco-friendly fuel alternative.",
    },
    {
      question: "How do I book a consultation?",
      answer:
        "You can book a consultation through the contact page on this website.",
    },
  ];
  const blogPosts = [
    {
      title: "Top 5 Benefits of CNG Conversion",
      excerpt: "Discover why CNG is the future of fuel efficiency.",
      link: "/blog/cng-benefits",
    },
    {
      title: "How to Optimize Fleet Management",
      excerpt: "Learn strategies to reduce costs and improve performance.",
      link: "/blog/fleet-optimization",
    },
    {
      title: "Choosing the Right Vehicle for Your Business",
      excerpt: "A guide to making informed decisions for your fleet.",
      link: "/blog/vehicle-selection",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left px-6 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Hi, I'm <span className="text-gray-200">Joshua</span>
          </h1>
          <p className="text-lg text-gray-300">
            <TypeAnimation
              sequence={[
                "Entrepreneur",
                1000,
                "Auto Consultant",
                1000,
                "Fleet Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-gray-400 text-lg">
            Helping you make the best automotive decisions with expertise and
            precision.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-[#5a4ac8] text-white rounded-lg shadow-lg hover:bg-[#7a6ae8] transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white mb-8">
          What My Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center space-y-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FaQuoteLeft className="text-4xl text-[#5a4ac8]" />
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-800 dark:text-white font-semibold">
                {testimonial.name}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {testimonial.company}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">By the Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-4 p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-5xl font-bold">{stat.number}</p>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-200 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-400 text-gray text-center py-16">
        <FuelSavingsCalculator />
      </section>
      <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white mb-8">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-start space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {post.excerpt}
              </p>
              <Link
                href={post.link}
                className="text-[#5a4ac8] hover:text-[#7a6ae8] transition-all duration-300"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-[#5a4ac8] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Ready to Transform Your Fleet?</h2>
          <p className="text-lg">
            Contact me today for a free consultation and take the first step
            towards smarter automotive decisions.
          </p>
          <div className="mt-7 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#5a4ac8] rounded-lg shadow-lg hover:bg-[#7a6ae8] hover:text-white transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </section>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#5a4ac8] text-white rounded-full shadow-lg hover:bg-[#24803a] transition-all duration-300 animate-bounce"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </Layout>
  );
}
