// components/HeroSection.jsx
import styles from '@/components/digitalmarketing/HeroSection.module.css';
import Image from 'next/image';
export function HeroSection({ title, subtitle, description, className = '' }) {
  return (
    <section
      className={`relative overflow-hidden text-center className="pt-20" text-gray-100 ${className}`}
      style={{ paddingTop:'80px'}}
    >
      <div className={styles.gradientBackground} />
      <div className={styles.overlay} />

      <div className={`relative z-20 max-w-4xl mx-auto ${styles.fadeIn} ${styles.textHover}`}>
       <h1 className="text-[28px] md:text-[48px] font-bold mb-4 pt-3 text-black">
  {title}
</h1>
        <p className="text-lg leading-relaxed mb-8 text-white/80"
        style={{ color: '#757575', fontSize:'16px' ,margin:'16px'}}
        >
          {description}
        </p>
        <button className={styles.button}>Contact Us</button>
        <Image
        className='mx-auto'
          src="/assets/images/HeroBack.png"
          alt="Hero Background"
          width={450}
          height={600}
          priority
        />
      </div>
    </section>
  );
}
