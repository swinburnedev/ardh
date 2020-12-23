import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/ImageGrid.module.scss';

const Masonary = () => (
  <div className={styles.masonry}>
    <div className={styles.masonry__left}>
      <div className={styles.masonry__image}>
        <Image
          src={`https://via.placeholder.com/450x250.png?text=Image 1`}
          height="250"
          width="450"
          alt="1"
        />
      </div>
      <div className={styles.masonry__title}>
        <Link href="/">
          <a className={styles.masonry__link}>Title 1</a>
        </Link>
      </div>
    </div>
    <div className={styles.masonry__right}>
      <div className={styles.masonry__title}>
        <Link href="/">
          <a className={styles.masonry__link}>Title 2</a>
        </Link>
      </div>
      <div className={styles.masonry__image}>
        <Image
          src={`https://via.placeholder.com/450x250.png?text=Image 2`}
          height="250"
          width="450"
          alt="1"
        />
      </div>
    </div>
    <div className={styles.masonry__left}>
      <div className={styles.masonry__image}>
        <Image
          src={`https://via.placeholder.com/450x250.png?text=Image 3`}
          height="250"
          width="450"
          alt="1"
        />
      </div>
      <div className={styles.masonry__title}>
        <Link href="/">
          <a className={styles.masonry__link}>Title 3</a>
        </Link>
      </div>
    </div>
  </div>
)

export default Masonary;
