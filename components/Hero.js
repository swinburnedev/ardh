import Image from 'next/image';
import styles from '../styles/components/Hero.module.scss';

//TODO update hardcoded values - is this still used
const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.hero__image}>
      <Image
          src="/img/banner/civil_public_garden.jpg"
          height="997"
          width="1465"
          alt="Civil public garden"
        />
    </div>
    <div className={styles.hero__panel}>
      <h2 className={styles.hero__title}>Civil / Public Realm</h2>
      <p className={styles.hero__info}>Info</p>
    </div>
  </div>
)

export default Hero;
