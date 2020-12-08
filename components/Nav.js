import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../styles/components/Nav.module.scss';

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        <li className={router.pathname == "/expertise" ? "active" : ""}>
          <Link href="/expertise">
            <a>Expertise</a>
          </Link>
        </li>
        <li className={router.pathname == "/projects" ? "active" : ""}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className={router.pathname == "/inspiration" ? "active" : ""}>
          <Link href="/inspiration">
            <a>Inspiration</a>
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
