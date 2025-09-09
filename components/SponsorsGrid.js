import useScrollAnimation from "./useScrollAnimation";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsGrid({ content }) {
  const animationClass = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 bg-light">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {content.sponsors.title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
        {content.sponsors.list.map((sponsor, idx) => (
          <div
            key={idx}
            className={`card flex justify-center items-center filter grayscale hover:grayscale-0 ${animationClass}`}
          >
            <img
              src={`/images/${sponsor.logo}`}
              alt={sponsor.name}
              className="h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* CTA Link to Sponsors Page */}
      <div className="text-center mt-12">
        <a href="/sponsors" className="btn btn-primary">
          {content.sponsors.ctaText}
        </a>
      </div>
    </section>
  );
}
