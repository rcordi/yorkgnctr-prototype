import useScrollAnimation from "./useScrollAnimation";
import Image from "next/image";

export default function Hero({ content }) {
  const animationClass = useScrollAnimation();

  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <Image
        src={`/images/${content.hero.image}`}
        alt="Hero background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
        priority
      />
      <div className="hero-overlay" />

      <div
        className={`relative z-10 text-light px-6 max-w-2xl transition-animate ${animationClass}`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
          {content.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-dark drop-shadow-lg">
          {content.hero.subtitle}
        </p>
        <a href={content.site.ctaLink} className="btn btn-primary">
          {content.site.ctaText}
        </a>
      </div>
    </section>
  );
}
