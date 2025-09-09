import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import TeamIntro from "../components/TeamIntro";
import ProjectDetails from "../components/ProjectDetails";
import Gallery from "../components/Gallery";
import content from "../content/content.json";

export default function Home() {
  return (
    <>
      <Navbar content={content} />
      <ScrollToTop />
      <main className="pt-20">
        <Hero content={content} />
        <TeamIntro content={content} />
        <ProjectDetails content={content} />
        <Gallery content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
