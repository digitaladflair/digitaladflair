import { packagesSalem } from '../../data/digitalmarketing/salem';

export function PackagesSection() {
  const { title, plans } = packagesSalem;
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="font-medium">Ideal For: {plan.ideal}</p>
              <p className="my-2">Services: {plan.services}</p>
              <p className="text-lg font-bold">{plan.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
