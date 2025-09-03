import content from "../content/content.json";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-red-700">{content.home.title}</h1>
      <p className="mt-4 text-xl text-gray-700">{content.home.subtitle}</p>
    </section>
  );
}
