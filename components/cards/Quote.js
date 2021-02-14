import styles from '../../styles/components/Cards.module.scss';
import Wrappedink from './WrappedLink';

const Quote = ({quote, author, url, style = 'light'}) => (
  <Wrappedink url={url} className={styles.card}>
    <div className={`quote ${styles.quote} ${styles.quote__only}`}>
        <q className={styles.quote__text}>{ quote }</q>
        <p className={styles.quote__author}>{author}</p>
    </div>
  </Wrappedink>
)

export default Quote;
