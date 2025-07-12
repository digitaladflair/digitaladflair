// components/HeroSection.jsx
export function HeroSection({ title, subtitle, description, className = '' }) {
  return (
    <section className={`bg-white text-center py-16 px-6 text-gray-800 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl font-semibold mb-6">{subtitle}</h2>
        <p className="text-lg leading-relaxed mb-8">{description}</p>
      </div>
    </section>
  );
}
