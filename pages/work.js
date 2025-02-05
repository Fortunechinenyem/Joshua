import { motion } from "framer-motion";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import {
  FaBriefcase,
  FaTrophy,
  FaCogs,
  FaHandshake,
  FaCar,
} from "react-icons/fa";
import Link from "next/link";

export default function Work() {
  const workExperience = [
    {
      year: "2015 - Present",
      role: "Auto Consultant & Fleet Specialist",
      company: "Self-Employed",
      description:
        "Providing expert guidance on vehicle selection, fleet optimization, and CNG conversions. Helped businesses save millions through cost-effective solutions.",
      icon: <FaBriefcase className="text-4xl text-[#5a4ac8]" />,
    },
    {
      year: "2010 - 2015",
      role: "Senior Fleet Manager",
      company: "EcoTransit Solutions",
      description:
        "Managed a fleet of 200+ vehicles, implemented fuel-saving strategies, and oversaw CNG conversions for the entire fleet.",
      icon: <FaCar className="text-4xl text-[#5a4ac8]" />,
    },
    {
      year: "2008 - 2010",
      role: "Automotive Engineer",
      company: "Urban Motors",
      description:
        "Worked on vehicle design and optimization, focusing on fuel efficiency and sustainability.",
      icon: <FaCogs className="text-4xl text-[#5a4ac8]" />,
    },
  ];

  const achievements = [
    {
      title: "10+ Years of Experience",
      description:
        "Extensive knowledge in auto consulting and fleet management.",
      icon: <FaTrophy className="text-4xl text-[#5a4ac8]" />,
    },
    {
      title: "$1M+ Saved for Clients",
      description: "Delivered cost-effective solutions for businesses.",
      icon: <FaHandshake className="text-4xl text-[#5a4ac8]" />,
    },
    {
      title: "500+ Vehicles Managed",
      description: "Optimized fleets for performance and efficiency.",
      icon: <FaCar className="text-4xl text-[#5a4ac8]" />,
    },
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center justify-center min-h-[50vh] text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            My Work
          </h1>
          <p className="text-lg text-gray-300">
            A journey of expertise, innovation, and success in the automotive
            industry.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white text-center mb-8">
          Professional Journey
        </h2>
        <div className="space-y-8">
          {workExperience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{item.year}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white text-center mb-8">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
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
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Project Highlights</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Image
            src="/images/joshua.JPG"
            alt="Work Example 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/joshua.JPG"
            alt="Work Example 2"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/joshua.JPG"
            alt="Work Example 3"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Client Testimonials
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg"
        >
          <p className="text-gray-700 italic">
            "Joshua provided outstanding consulting services and helped me make
            an informed decision on my vehicle purchase. Highly recommended!"
          </p>
          <h4 className="mt-4 font-semibold text-gray-900">
            - Satisfied Client
          </h4>
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#5a4ac8] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Let’s Work Together</h2>
          <p className="text-lg">
            Ready to optimize your fleet or explore CNG solutions? Reach out
            today!
          </p>
          <div className="mt-7 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#5a4ac8] rounded-lg shadow-lg hover:bg-[#7a6ae8] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
