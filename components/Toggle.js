import styles from '../styles/components/Toggle.module.scss';

const Toggle = ({toggleMenu}) => {
  return (
    <div className={styles.toggle}>
      <input type="checkbox" onClick={toggleMenu} />
      <span className={styles.toggle__bar}></span>
      <span className={styles.toggle__bar}></span>
    </div>
  )
};

export default Toggle;
