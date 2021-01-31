import styles from '../../styles/components/Cards.module.scss';

const Quote = ({quote}) => (
  <div className={styles.card}>
    <div className={`${styles.quote} ${styles.quote__only}`}>
      <q className={styles.quote__text}>{ quote }</q>
    </div>
  </div>
)

export default Quote;
