import Layout from "@/app/components/Layout";
import { FaArrowUp, FaHandshake, FaCar, FaCogs } from "react-icons/fa";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

const options = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const funFacts = [
  "I really love Jesus, I think He's cool🙂",
  "I play the acoustic guitar really well",

  "I love solving puzzles and riddles.",
];

export default function About() {
  const [funFact, setFunFact] = useState("");
  const [showButton, setShowButton] = useState(false);

  const showFunFact = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  };

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
      <section
        className="relative h-[500px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/joshua.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">Joshua Ayodeji Aribido</h1>
          <p className="mt-4 text-lg">
            Entreprenuer | Auto Consultant | Sustainable Mobility
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#041338] text-white rounded-lg hover:bg-[#041338] transition-all duration-300"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold dark:text-white">My Mission</h2>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {expertise.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all hover:scale-105"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">
          Fun Facts About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">{fact}</p>
            </motion.div>
          ))}
        </div>
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
          <div className="mt-7">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#7a6ae8] rounded-lg shadow-lg hover:bg-[#5a4ac8] hover:text-white transition-all duration-300"
            >
              Let’s Talk
            </Link>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-[#041338] text-white rounded-full shadow-lg hover:bg-[#24803a] transition-all duration-300"
            aria-label="Back to Top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
}
const expertise = [
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
