export default function Security() {
  return (
    <section id="security" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Enterprise-Grade Security
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          GripDigits is designed with advanced biometric protection to
          provide secure identity verification while keeping user data safe.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">
              Biometric Protection
            </h3>
            <p className="text-gray-400 mt-3">
              Uses unique hand recognition patterns to verify users securely.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">
              Data Privacy
            </h3>
            <p className="text-gray-400 mt-3">
              Designed to protect sensitive identity information with secure
              processing methods.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">
              Fast Verification
            </h3>
            <p className="text-gray-400 mt-3">
              Provides quick identity checks without compromising security.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}