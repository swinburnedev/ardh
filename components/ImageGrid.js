import QuoteTop from '../components/cards/QuoteTop';
import QuoteBottom from '../components/cards/QuoteBottom';
import FullImage from '../components/cards/FullImage';
import DoubleImage from '../components/cards/DoubleImage';

const ImageGrid = ({cards}) => (
  <div>
    { cards && cards.map(card => {
        switch (card.type) {
          case 'double-image':
            return <DoubleImage {...card} />;
          case 'quote-top':
            return <QuoteTop {...card} />;
          case 'quote-bottom':
            return <QuoteBottom {...card} />;
          case 'image':
            return <FullImage {...card} />;
        }
      })
    }
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

export default ImageGrid;
