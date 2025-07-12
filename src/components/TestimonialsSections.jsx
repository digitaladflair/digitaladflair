export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Digital Adflair transformed our business. From web redesign to ERP integration, everything was smooth and professional.",
      author: "Rakesh M., COO, Logistics Firm"
    },
    {
      quote:
        "Our SEO leads increased by 4X in 3 months. Their digital marketing team knows their game.",
      author: "Divya S., Founder, D2C Brand"
    },
    {
      quote:
        "We didn’t just get an app — we got a product that users love. Great job!",
      author: "Arun V., CEO, Startup Founder"
    }
  ];

  return (
    <section className="bg-white py-16 text-gray-800 container mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">💬 What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="italic mb-4">“{testimonial.quote}”</p>
              <p className="text-right font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}