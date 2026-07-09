export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-4xl font-bold">
          Contact Us
        </h2>

        <p className="text-gray-400 mt-5">
          Interested in bringing secure biometric verification to your
          organization? Get in touch with our team.
        </p>

        <div className="mt-8 space-y-3 text-gray-300">

          <p>
            📧 Email: contact@gripdigits.com
          </p>

          <p>
            📞 Phone: +254 XXX XXX XXX
          </p>

          <p>
            📍 Location: Nairobi, Kenya
          </p>

        </div>

        <button className="mt-8 px-8 py-3 rounded-xl bg-white text-black font-semibold">
          Request Demo
        </button>

      </div>
    </section>
  );
}