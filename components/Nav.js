import Link from 'next/link';
import { useRouter } from "next/router";
import Toggle from './Toggle';
import styles from '../styles/components/Nav.module.scss';

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav} role="navigation">
      <div className={styles.nav__wrapper}>
        <Toggle />

        <ul className={styles.nav__menu}>
          <li className={router.pathname == "/expertise" ? styles.nav__menu__active : ""}>
            <Link href="/expertise">
              <a>Expertise</a>
            </Link>
          </li>
          <li className={`${styles.nav__has__submenu} ${router.pathname.includes("/projects") ? styles.nav__menu__active : ''}`}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <ul className={styles.nav__submenu}>
              <li className={styles.nav__submenu__item}>
                <Link href="/projects/residential">
                  <a>Residential</a>
                </Link>
              </li>
              <li className={`${styles.nav__submenu__item} ${router.pathname.includes("/projects/civil") ? styles.nav__menu__active : ''}`}>
                <Link href="/projects/civil">
                  <a>Civil/Public Realm</a>
                </Link>
              </li>
              <li className={styles.nav__submenu__item}>
                <Link href="/projects/leisure">
                  <a>Leisure/Hospitality</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.nav__has__submenu} ${router.pathname == "/inspiration" ? styles.nav__menu__active : ''}`}>
            <Link href="/inspiration">
              <a>Inspiration</a>
            </Link>
            <ul className={styles.nav__submenu}>
              <li className={styles.nav__submenu__item}>
                <Link href="/inspiration/images">
                  <a>Images</a>
                </Link>
              </li>
              <li className={styles.nav__submenu__item}>
                <Link href="/inspiration/materials">
                  <a>Materials</a>
                </Link>
              </li>
              <li className={styles.nav__submenu__item}>
                <Link href="/inspiration/quotes">
                  <a>Quotes</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={router.pathname == "/contact" ? styles.nav__menu__active : ""}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;
