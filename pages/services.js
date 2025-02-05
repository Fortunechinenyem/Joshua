import Layout from "@/app/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp, FaCar, FaCogs, FaGasPump } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCar className="text-4xl text-[#041338]" />,
    title: "Auto Consulting",
    description:
      "Expert guidance on vehicle selection, valuation, and procurement. Whether you're buying your first car or expanding your fleet, I provide tailored advice to meet your needs.",
    linkText: "Learn More",
    link: "/contact",
  },
  {
    icon: <FaGasPump className="text-4xl text-[#041338]" />,
    title: "CNG Conversion",
    description:
      "Certified installations and advice on CNG adoption for fuel efficiency. Reduce costs and environmental impact with professionally executed CNG conversions.",
    linkText: "Get Started",
    link: "/contact",
  },
  {
    icon: <FaCogs className="text-4xl text-[#041338]" />,
    title: "Fleet Management",
    description:
      "Optimizing business fleets for cost-efficiency and performance. From maintenance schedules to route optimization, I help you maximize your fleet's potential.",
    linkText: "Optimize Now",
    link: "/contact",
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "$100",
    features: [
      "1-hour auto consultation session",
      "Personalized vehicle selection advice",
      "Email support for 7 days",
      "Basic fleet management tips",
      "Introduction to CNG conversion benefits",
    ],
  },
  {
    title: "Standard",
    price: "$250",
    features: [
      "3-hour consultation session",
      "In-depth vehicle valuation and procurement guidance",
      "Email & chat support for 14 days",
      "Fleet optimization strategies",
      "CNG conversion feasibility analysis",
    ],
  },
  {
    title: "Premium",
    price: "$500",
    features: [
      "6-hour consultation session",
      "End-to-end fleet management solutions",
      "24/7 priority support for 30 days",
      "Certified CNG conversion planning and execution",
      "Lifetime access to exclusive auto industry resources",
    ],
  },
];

export default function Services() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <section className="relative h-[400px] flex items-center justify-center text-center bg-[url('/images/joshua.JPG')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="relative text-white">
          <h1 className="text-5xl font-bold">My Services</h1>
          <p className="mt-4 text-lg">
            Expert solutions for auto consulting, CNG conversion, and fleet
            management.
          </p>
        </div>
      </section>

      <section className="mt-20 px-4 grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-center dark:text-white mt-4">
              {service.title}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              {service.description}
            </p>
            <div className="mt-6 text-center">
              <Link
                href={service.link}
                className="px-5 py-2 bg-[#041338] text-white rounded-md shadow-md hover:bg-[#5a4ac8] transition-all duration-300"
              >
                {service.linkText}
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold dark:text-white">Pricing Plans</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Choose a plan that suits your needs and budget.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-center dark:text-white">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-[#041338] text-center mt-4">
                {plan.price}
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    ✔️ {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-[#041338] text-white rounded-lg hover:bg-[#5a4ac8] transition-all duration-300">
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-[#041338] text-white rounded-full shadow-md hover:bg-[#5a4ac8] transition-all duration-300"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </Layout>
  );
}
