import Image from 'next/image';
import styles from '../../styles/components/Cards.module.scss';
import Wrappedink from './WrappedLink';

const QuoteTop = ({quote, img, alt, url}) => (
  <div className={styles.card}>
    <div className={`${styles.quote} ${styles.quote__top}`}>
      <Wrappedink url={url}>
        <p className={styles.quote__text}>{ quote }</p>
      </Wrappedink>
    </div>
    <Wrappedink url={url} className={styles.image}>
      <Image
        src={img}
        height="441"
        width="784"
        alt={alt}
      />
    </Wrappedink>
  </div>
)

export default QuoteTop;
