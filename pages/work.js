import Layout from "@/app/components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCar, FaCogs, FaLeaf } from "react-icons/fa";

export default function Work() {
  const workSections = [
    {
      icon: <FaCar className="text-4xl text-[#041338]" />,
      title: "Automobile Consulting",
      description:
        "Providing expert guidance on vehicle purchases, valuation, and best options tailored to your needs.",
    },
    {
      icon: <FaLeaf className="text-4xl text-[#041338]" />,
      title: "CNG Conversion",
      description:
        "Certified in CNG conversions, offering cost-effective and eco-friendly solutions for vehicles.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#041338]" />,
      title: "Fleet Management",
      description:
        "Optimizing fleet operations for efficiency, cost savings, and enhanced performance.",
    },
  ];

  return (
    <Layout>
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-bold">Joshua's Work</h1>
          <p className="mt-4 text-lg text-gray-300">
            Transforming the automobile industry with expertise, innovation, and
            passion.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workSections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
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
    </Layout>
  );
}
