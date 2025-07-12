export function TechnologiesSection() {
  const techCategories = [
    {
      title: "Programming & Frameworks",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "PHP", "Python", "Java", ".NET", "Node.js", "Laravel", "Django", "Spring Boot"]
    },
    {
      title: "Frontend",
      items: ["React", "Angular", "Vue.js", "TailwindCSS", "Bootstrap"]
    },
    {
      title: "CMS & E-commerce",
      items: ["WordPress", "WooCommerce", "Shopify", "Magento"]
    },
    {
      title: "Mobile",
      items: ["Flutter", "React Native", "Kotlin", "Swift"]
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Analytics",
      items: ["Power BI", "Tableau", "Looker", "Google Data Studio"]
    },
    {
      title: "AI/ML",
      items: ["TensorFlow", "PyTorch", "OpenAI", "ChatGPT API"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-800 container mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">🛠️ Technologies We Use</h2>
        <p className="max-w-4xl mx-auto text-center text-lg mb-12">
          We don’t just follow trends — we use the right stack for the job.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
