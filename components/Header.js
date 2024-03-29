import Logo from './Logo';
import Nav from './Nav';
import styles from '../styles/components/Header.module.scss';

const Header = () => (
  <header className={`${styles.header} container`}>
    <Logo />
    <Nav />
  </header>
)

export default Header;
