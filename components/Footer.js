import content from "../content/content.json";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} York GNCTR</p>
      <div className="mt-2 space-x-4">
        <a href={`mailto:${content.contact.email}`} className="hover:underline">
          {content.contact.email}
        </a>
        <a
          href={content.contact.instagram}
          target="_blank"
          className="hover:underline"
        >
          Instagram
        </a>
        <a
          href={content.contact.linkedin}
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
