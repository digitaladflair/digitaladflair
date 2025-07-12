export function CTASection() {
  return (
    <section className="bg-blue-600 text-white py-16 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📞 Ready to Transform Your Business?</h2>
        <p className="text-lg mb-6">
          Whether you're looking to build from scratch, upgrade your systems, or grow your digital reach, <strong>Digital Adflair</strong> is your go-to tech partner.
        </p>
        <h3 className="text-xl font-semibold mb-6">🎯 Let’s turn your ideas into results.</h3>
        <p className="text-lg mb-8">📩 Book your free strategy call today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#schedule-call" className="bg-white text-blue-600 px-5 py-2 rounded font-medium hover:bg-gray-200 transition">
            📞 Schedule a Call
          </a>
          <a href="#contact" className="bg-white text-blue-600 px-5 py-2 rounded font-medium hover:bg-gray-200 transition">
            📧 Contact Us
          </a>
          <a href="#blog" className="bg-white text-blue-600 px-5 py-2 rounded font-medium hover:bg-gray-200 transition">
            🌐 Visit Our Blog for Insights
          </a>
        </div>
      </div>
    </section>
  );
}