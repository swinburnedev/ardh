import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/components/Banner.module.scss';

const Banner = ({images}) => {
  const [index, setIndex] = useState(0);
  const {img, alt} = images[index] || {};
  const nextImage = () => setIndex(index + 1);
  const prevImage = () => setIndex(index - 1);
  const showNext = () => index !== images.length - 1;
  const showPrev = () => index !== 0;
  const handleKeyDown = e => {
    if (e.code === 'ArrowRight') {
      showNext() && nextImage();
    }
    if (e.code === 'ArrowLeft') {
      showPrev() && prevImage();
    }
  }
  useEffect(() => {
    setIndex(0);
  }, [images]);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })

  return (
    <div className={`container ${styles.banner}`}>
      {showPrev() &&
        <button
          type="button"
          className={styles.prev}
          onClick={prevImage}
        >
          <Image
            src="/img/svg/prev.svg"
            height="24"
            width="14"
            alt="Previous"
          />
        </button>}
      <img
        className={styles.banner__image}
        src={img}
        height="675"
        width="1200"
        alt={alt}
      />
      {showNext() && 
        <button
          type="button"
          className={styles.next}
          onClick={nextImage}
        >
          <Image
            src="/img/svg/next.svg"
            height="24"
            width="14"
            alt="Next"
          />
        </button>}
    </div>
  )
}

export default Banner;
