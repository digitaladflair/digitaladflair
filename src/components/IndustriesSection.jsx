export function IndustriesSection() {
  const industries = [
    "🏦 Fintech & Banking",
    "🛍️ E-commerce & Retail",
    "🏥 Healthcare & Wellness",
    "🏫 EdTech & Training",
    "🏢 Real Estate & Construction",
    "🚚 Logistics & Transportation",
    "📢 Media & Advertising",
    "🏭 Manufacturing & Industrial",
    "🧑‍💼 Government & Public Sector"
  ];

  return (
    <section className="py-16 bg-white text-gray-800 container mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">🌍 Industries We Serve</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-12">
          We work with clients across multiple industries, tailoring every solution to fit business-specific goals:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 text-center rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-lg font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}