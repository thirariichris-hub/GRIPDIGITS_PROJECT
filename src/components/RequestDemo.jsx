export default function RequestDemo() {
  return (
    <section id="request-demo" className="py-24 bg-slate-950">

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10">

        <h2 className="text-4xl font-bold text-center">
          Request a Demonstration
        </h2>

        <p className="text-center text-gray-400 mt-3 mb-10">
          Schedule a live demonstration of GripDigits for your
          organization.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="text"
            placeholder="Organization"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your demonstration request..."
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-semibold"
          >
            Submit Request
          </button>

        </form>

      </div>

    </section>
  );
}