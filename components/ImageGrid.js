import QuoteTop from '../components/cards/QuoteTop';
import QuoteBottom from '../components/cards/QuoteBottom';
import FullImage from '../components/cards/FullImage';
import styles from '../styles/components/ImageGrid.module.scss';

const ImageGrid = ({cards}) => (
  <div className={styles.imageGrid}>
    { cards.map(card => {
        switch (card.type) {
          case 'quote-top':
            return <QuoteTop {...card} />;
          case 'quote-bottom':
            return <QuoteBottom {...card} />;
          case 'image':
            return <FullImage {...card} />;
        }
      })
    }
  </div>
)

export default ImageGrid;
