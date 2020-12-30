import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Banner.module.scss';

const Banner = ({img, alt}) => (
  <div className={styles.banner}>
    <Link href="/prev">
      <a className={styles.prev}>
        <Image
          src="/img/svg/prev.svg"
          height="24"
          width="14"
          alt="Next"
        />
      </a>
    </Link>
    {img && <Image
      src={img}
      height="998"
      width="1920"
      alt={alt}
    />}
    <Link href="/next">
      <a className={styles.next}>
        <Image
          src="/img/svg/next.svg"
          height="24"
          width="14"
          alt="Next"
        />
      </a>
    </Link>
  </div>
)

export default Banner;
