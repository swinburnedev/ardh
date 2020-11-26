import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/ImageGrid.module.scss';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ImageGrid = () => (
  <div className={styles.imageGrid}>
    { images.map(element => (
      <div className={styles.logo}>
        <Image
          key={element}
          src={`https://via.placeholder.com/300x300.png?text=Image ${element}`}
          height="300"
          width="300"
          alt={element}
        />
      </div>
    )) }
  </div>
)

export default ImageGrid;
