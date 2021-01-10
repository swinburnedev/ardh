import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Hero.module.scss';

const Hero = ({slides}) => {
  const [index, setIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState(styles.hero__right);
  // Iterate over slide indexes for Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      let nextSlide = 0;
      if (index !== slides.length - 1) {
        nextSlide = index + 1;
      }
      setAnimateClass((index % 2 == 0) ? styles.hero__left : styles.hero__right);
      // Delay updating index by 1 second, to allow animation to complete before re-rendering
      setTimeout(() => {
        setIndex(nextSlide)
      }, 1000);
      // TODO clear timeout
    }, 3000);
    return () => clearInterval(interval);
  });
  const {img, alt, title, subtitle, url} = slides[index];
  return (
    <div className={styles.hero}>
      <img
        className={styles.hero__image}
        src={img}
        height="700"
        width="1465"
        alt={alt}
        layout="intrinsic"
      />
      <div className={`${styles.hero__panel} ${animateClass}`}>
        <Link href={url}>
          <a className={styles.next}>
            <h2 className={styles.hero__title}>{title}</h2>
            <p className={styles.hero__info}>{subtitle}</p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Hero;
