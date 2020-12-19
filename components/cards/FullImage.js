import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const QuoteTop = ({img, alt}) => (
  <div className={styles.card}>
    <Link href="/">
      <a>
        <div className={styles.image}>
          <Image
            src={img}
            height="468"
            width="472"
            alt={alt}
          />
        </div>
      </a>
    </Link>
  </div>
)

export default QuoteTop;
