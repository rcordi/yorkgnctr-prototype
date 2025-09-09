import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SponsorsGrid from "../components/SponsorsGrid";
import content from "../content/content.json";

export default function Sponsors() {
  return (
    <>
      <Navbar content={content} />
      <ScrollToTop />

      <main className="pt-20">
        {/* Hero Section for Sponsors */}
        <section className="relative h-64 md:h-96 flex items-center justify-center text-center bg-red-600">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {content.sponsors.title}
          </h1>
        </section>

        {/* Sponsors Grid */}
        <SponsorsGrid content={content} />
      </main>

      <Footer content={content} />
    </>
  );
}
