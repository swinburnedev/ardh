import Quote from '../components/cards/Quote';
import QuoteTop from '../components/cards/QuoteTop';
import QuoteBottom from '../components/cards/QuoteBottom';
import FiftyFiftyImage from '../components/cards/FiftyFiftyImage';
import FullImage from '../components/cards/FullImage';
import DoubleImage from '../components/cards/DoubleImage';

const Masonry = ({cards, count = 9}) => {
  cards = cards.slice(0, count);
  return (
    <div className="container">
      { cards && cards.map((card, i) => {
          switch (card.type) {
            case 'fify-image':
              return <FiftyFiftyImage key={i} {...card} />;
            case 'double-image':
              return <DoubleImage key={i} {...card} />;
            case 'quote':
                return <Quote key={i} {...card} />;
            case 'quote-top':
              return <QuoteTop key={i} {...card} />;
            case 'quote-bottom':
              return <QuoteBottom key={i} {...card} />;
            case 'image':
              return <FullImage key={i} {...card} />;
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
}

export default Masonry;
