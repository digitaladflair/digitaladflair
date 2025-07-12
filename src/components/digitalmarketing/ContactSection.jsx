import { contactSalem } from '../../data/digitalmarketing/salem';

export function ContactSection() {
  const { title, subtitle, phone, email } = contactSalem;
  return (
    <section className="py-16 px-6 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${phone}`} className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-200">
            Call Us
          </a>
          <a href={`mailto:${email}`} className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-200">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
