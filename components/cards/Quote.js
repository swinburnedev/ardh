import styles from '../../styles/components/Cards.module.scss';
import Wrappedink from './WrappedLink';

const Quote = ({quote, url}) => (
  <Wrappedink url={url} className={styles.card}>
    <div className={`${styles.quote} ${styles.quote__only}`}>
        <q className={styles.quote__text}>{ quote }</q>
    </div>
  </Wrappedink>
)

export default Quote;
