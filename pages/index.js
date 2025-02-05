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
  FaFacebook,
  FaTwitter,
  FaLinkedin,
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
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <Image
            src="/images/joshua.JPG"
            alt="Joshua"
            width={400}
            height={400}
            className="w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-lg object-cover transform hover:scale-105 transition-all duration-500"
          />
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white mb-8">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {expertiseList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-400 text-gray text-center py-16">
        <FuelSavingsCalculator />
      </section>

      <section className="bg-[#041338] text-white text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-lg">
            Ready to make informed auto decisions? Reach out today.
          </p>
          <div className="mt-7 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#7a6ae8] rounded-lg shadow-lg hover:bg-[#5a4ac8] hover:text-white transition-all duration-300"
            >
              Let’s Talk
            </Link>
          </div>
          <div className="flex justify-center space-x-6 text-lg">
            <FaFacebook className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
