import Image from 'next/image';
import styles from '../../styles/components/Cards.module.scss';
import Wrappedink from './WrappedLink';

const FullImage = ({img, thumb, alt, url}) => (
  <div className={styles.card}>
    <Wrappedink url={url}>
      <div className={`${styles.image}`}>
        {/* TODO add layout="fill" / image variant */}
        {/*  ${styles.image__desktop} */}
        <Image
          height="400"
          width="400"
          src={thumb ? thumb : 'https://via.placeholder.com/400'}
          alt={alt}
        />
      </div>
      {/* <div className={`${styles.image} ${styles.image__mobile}`}>
        <Image
          src={img}
          height="468"
          width="472"
          alt={alt}
        />
      </div> */}
    </Wrappedink>
  </div>
)

export default FullImage;
