import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Logo.module.scss';

const Logo = () => (
  <Link href="/">
    <a>
      <Image
        className={styles.logo}
        src="/img/ardh-logo.png"
        height="167"
        width="200"
        alt="ARDH"
      />
    </a>
  </Link>
)

export default Logo;
