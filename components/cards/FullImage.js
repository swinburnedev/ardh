import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Cards.module.scss';

const FullImage = ({img, alt, url}) => (
  <div className={styles.card}>
    <Link href={url}>
      <a>
        <div className={`${styles.image} ${styles.image__desktop}`}>
          {/* TODO add layout="fill" / image variant */}
          <Image
            height="765"
            width="765"
            src={img}
            alt={alt}
          />
        </div>
        <div className={`${styles.image} ${styles.image__mobile}`}>
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

export default FullImage;
