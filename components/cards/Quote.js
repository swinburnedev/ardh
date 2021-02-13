import styles from '../../styles/components/Cards.module.scss';
import Wrappedink from './WrappedLink';

const Quote = ({quote, url, style = 'light'}) => (
  <Wrappedink url={url} className={styles.card}>
    <div className={`${styles.quote} ${styles.quote__only} ${style === 'light' ? styles.quote__light : styles.quote__dark}`}>
        <q className={styles.quote__text}>{ quote }</q>
    </div>
  </Wrappedink>
)

export default Quote;
