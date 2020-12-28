import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteTop = ({imgTop, altTop, imgBottom, altBotom}) => (
  <div className={styles.card}>
    <Link href="/">
      <a>
        <div className={`${styles.image__top}`}>
          <Image
            src={imgTop}
            height="332"
            width="789"
            alt={altTop}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={imgBottom}
            height="509"
            width="789"
            alt={altBotom}
          />
        </div>
      </a>
    </Link>
  </div>
)

export default QuoteTop;
