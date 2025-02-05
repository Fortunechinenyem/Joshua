import Layout from "@/app/components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

import { FaArrowUp, FaCar, FaCogs, FaGasPump } from "react-icons/fa";
import { motion } from "framer-motion";

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
  const [consultingRate, setConsultingRate] = useState(100);
  const [isClient, setIsClient] = useState(false);
  const [showButton, setShowButton] = useState(false);

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

  const handleSliderChange = (value) => {
    setConsultingRate(value);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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

      <section className="mt-20 px-4">
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="flex justify-center">
              <FaCar className="text-4xl text-[#041338]" />
            </div>
            <h3 className="text-2xl font-semibold text-center dark:text-white mt-4">
              Auto Consulting
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              Expert guidance on vehicle selection, valuation, and procurement.
              Whether you're buying your first car or expanding your fleet, I
              provide tailored advice to meet your needs.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-[#041338] text-white rounded-md shadow-md hover:bg-[#5a4ac8] transition-all duration-300 max-w-[180px] w-full"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="flex justify-center">
              <FaGasPump className="text-4xl text-[#041338]" />
            </div>
            <h3 className="text-2xl font-semibold text-center dark:text-white mt-4">
              CNG Conversion
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              Certified installations and advice on CNG adoption for fuel
              efficiency. Reduce costs and environmental impact with
              professionally executed CNG conversions.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-[#041338] text-white rounded-md shadow-md hover:bg-[#5a4ac8] transition-all duration-300 max-w-[180px] w-full"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="flex justify-center">
              <FaCogs className="text-4xl text-[#041338]" />
            </div>
            <h3 className="text-2xl font-semibold text-center dark:text-white mt-4">
              Fleet Management
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              Optimizing business fleets for cost-efficiency and performance.
              From maintenance schedules to route optimization, I help you
              maximize your fleet's potential.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-[#041338] text-white rounded-md shadow-md hover:bg-[#5a4ac8] transition-all duration-300 max-w-[180px] w-full"
              >
                Optimize Now
              </Link>
            </div>
          </motion.div>
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold dark:text-white">Pricing Plans</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Choose a plan that suits your needs and budget.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <span className="mr-2">✔️</span>
                      {feature}
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

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold dark:text-white">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Hear from those who have benefited from my services.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "John Doe",
                role: "Business Owner",
                testimonial:
                  "Joshua's fleet management solutions transformed my business. His expertise is unmatched!",
              },
              {
                id: 2,
                name: "Jane Smith",
                role: "CNG Conversion Client",
                testimonial:
                  "The CNG conversion process was seamless, and I’m already seeing savings on fuel costs. Highly recommend Joshua!",
              },
              {
                id: 3,
                name: "Mike Johnson",
                role: "Auto Consulting Client",
                testimonial:
                  "Joshua helped me find the perfect vehicle for my needs. His advice was spot on and saved me time and money.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
              >
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.testimonial}"
                </p>
                <p className="mt-4 font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}{" "}
                  <span className="text-gray-500">- {testimonial.role}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 py-16 bg-[#041338] text-white text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg mt-4">
            Let’s work together to achieve your goals. Contact me today!
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#7a6ae8] rounded-lg hover:bg-[#5a4ac8] hover:text-white transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </section>

      {showButton && (
        <div className="group fixed bottom-8 right-8">
          <button
            onClick={scrollToTop}
            className="p-4 bg-[#041338] text-white rounded-full shadow-lg hover:bg-[#5a4ac8] transition-all duration-300"
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-xl" />
          </button>
          <div className="absolute bottom-14 right-0 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Back to Top
          </div>
        </div>
      )}
    </Layout>
  );
}
