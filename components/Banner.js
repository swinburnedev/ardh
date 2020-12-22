import Image from 'next/image';
import styles from '../styles/components/Banner.module.scss';

const Banner = ({img, alt}) => (
  <div className={styles.banner}>
    <Image
      src={img}
      height="998"
      width="1920"
      alt={alt}
    />
  </div>
)

export default Banner;
