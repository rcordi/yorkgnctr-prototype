import useScrollAnimation from "./useScrollAnimation";

export default function Gallery({ content }) {
  const animationClass = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 bg-light">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {content.gallery.title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {content.gallery.images.map((img, idx) => (
          <div key={idx} className={`card ${animationClass}`}>
            <img
              src={`/images/${img}`}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
