import { whySalem } from '@/data/digitalmarketing/salem';
import styles from '@/components/digitalmarketing/WhySection.module.css';

export function WhySection() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          {whySalem.title}
        </h2>
        <div className={styles.cardGrid}>
          {whySalem.points.map((point, i) => (
            <div key={i} className={styles.cardWrapper}>
              <h3 className={styles.cardTitle}>
                {point.icon} {point.title}
              </h3>
              <div className={styles.card}>
                <div className={styles.cardPrompt}>🔽 know more</div>
                <div className={styles.cardDesc}>
                  {point.desc.map((line, index) => (
                    <div key={index} className={styles.tagBox}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
