import QuoteTop from '../components/cards/QuoteTop';
import QuoteBottom from '../components/cards/QuoteBottom';
import FullImage from '../components/cards/FullImage';

const ImageGrid = ({cards}) => (
  <div>
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
    <style jsx>{`
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: masonry;
      grid-gap: 10px;
      padding: 10px;

      @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}</style>
  </div>
)

export default ImageGrid;
