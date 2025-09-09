import Image from "next/image";
import { useState } from "react";

export default function Footer({ content }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed ${email} to the mailing list!`);
    setEmail("");
  };

  return (
    <footer className="bg-dark text-light py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left: Team Logo + Address */}
        <div className="flex flex-col items-start space-y-4">
          <div className="relative w-20 h-20">
            <Image
              src="/images/yorklogo.png"
              alt="York GNCTR Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-400">{content.contact.address}</p>
        </div>

        {/* Center: Mailing List */}
        <div className="flex flex-col items-start md:items-center space-y-4">
          <h3 className="text-xl font-bold text-primary">
            {content.contact.mailingList.title}
          </h3>
          <p className="text-gray-400 text-center md:text-left">
            {content.contact.mailingList.description}
          </p>
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200 hover:scale-105 text-dark"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-light rounded-r-lg font-semibold hover:bg-secondary transition-transform duration-200 hover:scale-105"
            >
              {content.contact.mailingList.buttonText}
            </button>
          </form>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h3 className="text-xl font-bold text-primary">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href={content.contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            </a>
            <a
              href={content.contact.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            </a>
            <a href={`mailto:${content.contact.email}`}>
              <Image
                src="/images/email.png"
                alt="Email"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} York GNCTR. All rights reserved.
      </div>
    </footer>
  );
}
