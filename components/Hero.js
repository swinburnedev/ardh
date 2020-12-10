import Image from 'next/image';
import styles from '../styles/components/Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <Image
        src="/img/banner/civil_public_garden.jpg"
        height="1314"
        width="1465"
        alt="Civil public garden"
      />
  </div>
)

export default Hero;
