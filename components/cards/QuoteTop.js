import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteTop = ({quote, img, alt}) => (
  <div className={styles.card}>
    <Link href="/">
      <a>
        <div className={`${styles.quote} ${styles.quote__top}`}>
          <q className={styles.quote__text}>{ quote }</q>
        </div>
        <div className={styles.image}>
          <Image
            src={img}
            height="509"
            width="789"
            alt={alt}
          />
        </div>
      </a>
    </Link>
  </div>
)

export default QuoteTop;
