import Image from 'next/image';
import styles from '../../styles/components/Cards.module.scss';
import Wrappedink from './WrappedLink';

const FullImage = ({img, alt, url}) => (
  <div className={styles.card}>
    <Wrappedink url={url}>
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
    </Wrappedink>
  </div>
)

export default FullImage;
