import useScrollAnimation from "./useScrollAnimation";

export default function TeamIntro({ content }) {
  const animationClass = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {content.team.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {content.team.members.map((member, idx) => (
          <div
            key={idx}
            className={`text-center bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 ${animationClass}`}
          >
            <img
              src={`/images/${member.image}`}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
