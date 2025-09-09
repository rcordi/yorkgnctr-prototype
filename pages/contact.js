import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import content from "../content/content.json";

export default function Contact() {
  const { contactPage, contact } = content;

  return (
    <>
      <Navbar content={content} />
      <ScrollToTop />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-64 md:h-96 flex items-center justify-center text-center bg-red-600">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {contactPage.heroTitle}
          </h1>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {contactPage.sectionTitle}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {contactPage.sectionSubtitle}
          </p>

          <form
            action={`mailto:${contact.email}`}
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder={contactPage.form.namePlaceholder}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition-transform duration-200 hover:scale-105"
            />
            <input
              type="email"
              name="email"
              placeholder={contactPage.form.emailPlaceholder}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition-transform duration-200 hover:scale-105"
            />
            <textarea
              name="message"
              placeholder={contactPage.form.messagePlaceholder}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none transition-transform duration-200 hover:scale-105"
              rows={6}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow hover:scale-105"
            >
              {contactPage.form.submitText}
            </button>
          </form>
        </section>
      </main>

      <Footer content={content} />
    </>
  );
}
