import { servicesSalem } from "../../data/digitalmarketing/salem";


export function ServicesSection() {
  const { title, items } = servicesSalem;
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-disc list-inside text-lg">
          {items.map((service, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

