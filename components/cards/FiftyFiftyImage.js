import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteTop = ({imgTop, altTop, imgBottom, altBotom, url}) => (
  <div className={styles.card}>
    <Link href={url}>
      <a>
        <div className={`${styles.image} ${styles.image__fifty}`}>
          <Image
            src={imgTop}
            height="420"
            width="789"
            alt={altTop}
          />
        </div>
        <div className={`${styles.image}`}>
          <Image
            src={imgBottom}
            height="420"
            width="789"
            alt={altBotom}
          />
        </div>
      </a>
    </Link>
  </div>
)

export default QuoteTop;
