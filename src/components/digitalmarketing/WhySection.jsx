export function WhySection() {
  const points = [
    {
      title: 'Local Expertise You Can Trust',
      desc: 'As a Salem-based marketing expert, we understand the local market better than anyone. Whether you want to reach nearby customers or expand across Tamil Nadu, our digital marketing strategies are designed to target your ideal audience effectively.'
    },
    {
      title: 'E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness',
      desc: '15+ years of real results, certified professionals, trusted by 300+ local businesses, 100% transparency and measurable ROI.'
    },
    {
      title: 'Full-Service Under One Roof',
      desc: 'SEO, PPC, SMM, content, email, branding, influencer campaigns, e-commerce marketing, lead generation—all in one place.'
    }
  ];
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Digital Marketing Company in Salem?</h2>
        <div className="space-y-8">
          {points.map((p, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
