import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteBottom = ({quote, img, alt}) => (
  <div className={styles.card}>
    <Link href="/">
      <a>
        <div className={styles.image}>
          <Image
            src={img}
            height="509"
            width="789"
            alt={alt}
          />
        </div>
        <div className={`${styles.quote} ${styles.quote__bottom}`}>
          <q className={styles.quote__text}>{ quote }</q>
        </div>
      </a>
    </Link>
  </div>
)

export default QuoteBottom;
