import { caseStudiesSalem } from '../../data/digitalmarketing/salem';

export function CaseStudiesSection() {
  const { title, items } = caseStudiesSalem;
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((study, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-700">{study.results}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}