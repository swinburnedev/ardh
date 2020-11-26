import Image from 'next/image';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.social}>
      <li className={styles.social__item}>
        <a
          href="https://www.instagram.com/ardh.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/instagram.png" height={42} width={42} alt="Instagram" />
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          href="https://www.linkedin.com/company/a-r-d-h/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/linkedin.png" height={42} width={42} alt="LinkedIn" />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer;
