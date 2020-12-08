import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Logo.module.scss';

const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>
      <Image
        src="/img/logo.png"
        height="120"
        width="100"
        alt="ARDH"
      />
    </a>
  </Link>
)

export default Logo;
