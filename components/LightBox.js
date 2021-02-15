import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/components/LightBox.module.scss';

const LightBox = ({active, setActive, cards, index, setIndex}) => {
  const closeLightBox = () => setActive(false);
  const next = () => setIndex(++index);
  const prev = () => setIndex(--index);
  const isFirst = () => parseInt(index) === 0;
  const isLast = () => parseInt(index) === cards.length - 1;
  const handleKeyDown = e => {
    if (e.code === 'ArrowRight') {
      !isLast() && next();
    }
    if (e.code === 'ArrowLeft') {
      !isFirst() && prev();
    }
    if (e.code === 'Escape') {
      closeLightBox();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })
  const current = cards[index];
  const { title, description, img, alt } = current || {};
  
  if (!active) return null;
  return (
    <div className={`${styles.lightbox} ${active ? styles.lightbox__active : ''}`}>
      <h3 className={styles.lightbox__title}>{title}</h3>
      <p className={styles.lightbox__description}>{description}</p>
      <div className={styles.lightbox__thumbnail}>
        <button className={`${styles.icon} ${styles.close}`} type="button" onClick={closeLightBox}>
          <Image
            src="/img/svg/close.svg"
            height="24"
            width="24"
            alt="Close"
          />
        </button>
        {!isFirst() &&
          <button className={`${styles.icon} ${styles.prev}`} type="button" onClick={prev}>
            <Image
              src="/img/svg/prev.svg"
              height="36"
              width="21"  
              alt="Previous"
            />
          </button>
        }
        {img && <img
          className={styles.image}
          src={img}
          alt={alt}
          height={540}
          width={960}
        />}
        {!isLast() &&
          <button className={`${styles.icon} ${styles.next}`} type="button" onClick={next}>
            <Image
              src="/img/svg/next.svg"
              height="36"
              width="21"
              alt="Next"
            />
          </button>
        }
      </div>
    </div>
  )
}

export default LightBox;
