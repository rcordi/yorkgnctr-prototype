// components/MotionSection.js
import { motion } from "framer-motion";

export default function MotionSection({
  children,
  delay = 0,
  className = "",
  keyProp,
}) {
  return (
    <motion.section
      key={keyProp}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
