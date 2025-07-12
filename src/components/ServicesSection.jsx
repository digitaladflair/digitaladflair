export function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-gray-100 text-gray-800 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14 animate-pulse">🔧 Our Services</h2>
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    title: "💻 Web Design & Development",
    points: [
      "🎨 Custom Website Design (UI/UX Focused)",
      "🔧 Frontend & Backend Development",
      "🌐 WordPress, Laravel, Node.js, React, Angular",
      "🧩 CMS Development & Maintenance",
      "🛍️ E-commerce Sites (Shopify, WooCommerce, Magento)"
    ]
  },
  {
    title: "📱 Mobile Application Development",
    points: [
      "📲 Android & iOS App Development",
      "⚙️ Flutter, React Native, and Native Apps",
      "🏢 Enterprise Mobility Solutions",
      "🔍 App Maintenance & Testing"
    ]
  },
  {
    title: "☁️ Cloud Computing & DevOps",
    points: [
      "☁️ Cloud Migration & Deployment (AWS, Azure, GCP)",
      "🔁 DevOps Automation & CI/CD Pipelines",
      "🖥️ Server Management & Hosting",
      "🧪 SaaS Application Deployment"
    ]
  },
  {
    title: "🖥️ Web & Enterprise Applications",
    points: [
      "🛠️ Custom Web Application Development",
      "📦 ERP, CRM & Business Automation Systems",
      "💼 SaaS Product Development",
      "🔗 API Integrations & Third-Party Services"
    ]
  },
  {
    title: "📊 Data Analytics & Business Intelligence",
    points: [
      "📈 Data Visualization (Power BI, Tableau)",
      "🧮 Data Warehousing & ETL Pipelines",
      "🤖 Predictive Analytics & Machine Learning",
      "📊 BI Strategy & Consulting"
    ]
  },
  {
    title: "🏢 SAP & Enterprise Solutions",
    points: [
      "🔧 SAP Implementation (FICO, MM, SD, ABAP)",
      "🌟 SAP S/4HANA Consulting",
      "🔗 Integration with Business Apps",
      "🛡️ SAP Maintenance & Support"
    ]
  },
  {
    title: "🔐 IT Infrastructure & Cybersecurity",
    points: [
      "🌐 Network Setup & Monitoring",
      "🛡️ Threat Detection & Endpoint Security",
      "🔥 Firewalls & VPN Configurations",
      "🔍 Cloud Security Audits"
    ]
  },
  {
    title: "📈 Digital Marketing",
    points: [
      "🚀 SEO, PPC, Social Media, Email",
      "🧠 Content & Reputation Management",
      "🛍️ Branding, Creatives & Graphic Design",
      "🤝 Influencer & Affiliate Marketing"
    ]
  },
  {
    title: "🤖 AI & Automation",
    points: [
      "💬 AI Chatbots & Assistants",
      "🔄 Workflow Automation",
      "🤖 AI Integrations & RPA"
    ]
  },
  {
    title: "🧠 IT Consulting & Support",
    points: [
      "🧭 Tech Strategy & Roadmapping",
      "🧾 Software Audits & Optimization",
      "🧑‍💻 Managed Services & 24/7 Support",
      "🧠 IT Strategy for SMEs & Enterprises"
    ]
  }
];
