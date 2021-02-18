import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Logo.module.scss';

const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>
      <Image
        src="/img/logo.gif"
        height="100"
        width="100"
        alt="ARDH"
        layout="intrinsic"
      />
    </a>
  </Link>
)

export default Logo;
