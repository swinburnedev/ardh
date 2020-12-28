import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteTop = ({quote, img, alt, url}) => (
  <div className={styles.card}>
    <div className={`${styles.quote} ${styles.quote__top}`}>
      <Link href={url}>
        <a>
          <q className={styles.quote__text}>{ quote }</q>
        </a>
      </Link>
    </div>
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
  </div>
)

export default QuoteTop;
