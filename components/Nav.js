import Link from 'next/link';
import styles from '../styles/components/Nav.module.scss';

const Nav = () => (
  <nav>
    <ul className={styles.nav__menu}>
      <li>
        <Link href="/expertise/">
          <a>Expertise</a>
        </Link>
      </li>
      <li>
        <Link href="/projects/">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/inspiration/">
          <a>Inspiration</a>
        </Link>
      </li>
      <li>
        <Link href="/contact/">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav;
