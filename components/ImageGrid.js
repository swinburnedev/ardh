import Image from 'next/image';
import styles from '../styles/components/ImageGrid.module.scss';

const ImageGrid = ({cards}) => {
  return (
    <div>
      { cards && cards.map((card, i) => (
          // Img 16 x 9
          <Image
            className={styles.image}
            key={i}
            alt={card.alt}
            src={card.img} 
            height={270}
            width={480}
          />
        )
      )}
      <style jsx>{`
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: masonry;
        grid-gap: 5px;
        padding: 5px;

        @media screen and (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 1024px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `}</style>
    </div>
  )
}

export default ImageGrid;
