import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-section"
    >
      <h1>Expert Automobile Consulting & CNG Installations</h1>
      <p>Trusted by clients worldwide</p>
    </motion.div>
  );
};

export default Hero;
