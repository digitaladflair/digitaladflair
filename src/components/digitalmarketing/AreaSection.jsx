import { areasSalem } from '../../data/digitalmarketing/salem';
export function AreasSection() {
  const { title, items } = areasSalem;
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <ul className="columns-2 gap-4 text-lg list-disc list-inside">
          {items.map((area, i) => (
            <li key={i}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}