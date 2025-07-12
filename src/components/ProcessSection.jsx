// ProcessSection.jsx
export function ProcessSection() {
  const steps = [
    {
      title: "Discover",
      description: "Understand your goals, pain points, and expectations"
    },
    {
      title: "Strategize",
      description: "Create a tech roadmap tailored for your business"
    },
    {
      title: "Develop",
      description: "Design, build, and test solutions with agile precision"
    },
    {
      title: "Deploy",
      description: "Go live with full training and documentation"
    },
    {
      title: "Support",
      description: "Monitor, maintain, and scale your systems"
    }
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">🧩 How We Work: Our 5-Step Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto">
          Every project comes with full transparency, timely updates, and zero jargon.
        </p>
      </div>
    </section>
  );
}
