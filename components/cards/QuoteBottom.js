import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteBottom = ({quote, img, alt, url}) => (
  <div className={styles.card}>
    <Link href={url}>
      <a className={styles.image}>
        <Image
          src={img}
          height="509"
          width="789"
          alt={alt}
        />
      </a>
    </Link>
    <div className={`${styles.quote} ${styles.quote__bottom}`}>
      <Link href={url}>
        <a>
          <q className={styles.quote__text}>{ quote }</q>
        </a>
      </Link>
    </div>
  </div>
)

export default QuoteBottom;
