import useScrollAnimation from "./useScrollAnimation";

export default function ProjectDetails({ content }) {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 bg-light">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {content.projects.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {content.projects.list.map((project, idx) => {
          const animationClass = useScrollAnimation();
          return (
            <div key={idx} className={`card ${animationClass}`}>
              <img
                src={`/images/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
