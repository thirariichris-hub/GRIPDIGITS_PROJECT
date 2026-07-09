import Image from "next/image";

export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Live Demonstration
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-10">
          Watch how GripDigits verifies identity within seconds using
          advanced biometric hand recognition.
        </p>

        <Image
     src="/images/product.jpeg"
    alt="GripDigits biometric device"
    width={400}
    height={400}
    className="w-[250px] h-[250px] object-cover mx-auto rounded-2xl shadow-lg mb-8"
/>

        <video
          controls
          className="w-full max-w-2xl h-[350px] mx-auto rounded-3xl shadow-2xl object-cover"
          poster="/images/demo-cover.jpg"
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
        </video>

      </div>
    </section>
  );
}