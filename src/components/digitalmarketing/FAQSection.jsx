import { faqsSalem } from '../../data/digitalmarketing/salem';

export function FAQSection() {
  const { title, items } = faqsSalem;
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="space-y-6">
          {items.map((faq, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Q{idx + 1}: {faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
