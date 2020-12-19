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
      background-color: #f5f5f5;
      display: flex;
      flex-flow: row wrap;
      padding: 0.25rem;
      width: 100%;
    `}</style>
  </div>
)

export default ImageGrid;
