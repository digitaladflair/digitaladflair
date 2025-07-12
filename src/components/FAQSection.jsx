export function FAQSection() {
  const faqs = [
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Absolutely. We tailor solutions for all business sizes — whether you're just starting or scaling fast."
    },
    {
      question: "Can I hire you for just one service like SEO or web design?",
      answer:
        "Yes. You can choose one or multiple services based on your needs."
    },
    {
      question: "What’s your typical turnaround time?",
      answer:
        "It depends on the project scope. Websites take 2–6 weeks, apps may take 1–3 months."
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide maintenance, updates, and helpdesk support under various packages."
    },
    {
      question: "How do I get started?",
      answer:
        "Simple. Just click Get a Free Consultation or contact us — we’ll take care of the rest."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">❓ Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Q{index + 1}: {faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
