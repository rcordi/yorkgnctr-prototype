// pages/_app.js
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import MotionSection from "../components/MotionSection";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <MotionSection
        keyProp={router.route}
        className="bg-light text-dark min-h-screen"
      >
        <Component {...pageProps} />
      </MotionSection>
    </AnimatePresence>
  );
}

export default MyApp;
