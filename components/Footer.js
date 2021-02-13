import Image from 'next/image';
import LinkedIn from '../public/img/svg/linkedin.svg';
import Instagram from '../public/img/svg/instagram.svg';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>If you’re interested in working with us, get in touch and we will respond as soon as we can.</p>
    <p>ARDH<br />
    Rawa House<br />
    Whitwick Road, Coalville<br />
    United Kingdom<br />
    LE67 3FA</p>
    <p>For new business enquiries please email <a className={styles.footer__link} href="mailto:info@ardh.co.uk">info@ardh.co.uk</a></p>
    <ul className={styles.social}>
      <li className={styles.social__item}>
        <a
          href="https://www.linkedin.com/company/a-r-d-h/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className={styles.social__icon} />
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          href="https://www.instagram.com/ardh.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className={styles.social__icon} />
        </a>
      </li>
    </ul>
    <p>&copy; 2021 ARDH Ltd</p>
  </footer>
)

export default Footer;
