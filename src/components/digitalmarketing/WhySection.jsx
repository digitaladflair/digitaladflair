// components/digitalmarketing/WhySection.jsx
import { whySalem } from '@/data/digitalmarketing/salem';
import styles from '@/components/digitalmarketing/WhySection.module.css';

export function WhySection() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          {whySalem.title}
        </h2>
        <div className={styles.cardGrid}>
          {whySalem.points.map((point, i) => (
            <div key={i} className={styles.card}>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
