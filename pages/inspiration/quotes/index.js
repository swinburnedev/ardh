import MasonaryLayout from '../../../layouts/MasonaryLayout';
import { getQuoteOnly } from '../../../lib/util';
import quotes from './quotes.json';

const Quotes = ({title, content, quoteCards}) => {
  return (
    <MasonaryLayout title={title} content={content} cards={quoteCards} maxCards={9} />
  )
};

export async function getStaticProps() {
  const quoteCards = getQuoteOnly(9, quotes);
  return {
    props: {
      title: 'Quotes',
      content: 'Another great source of inspiration can be the written word, we like to collect and record as many inspirational quotes we hear or see from around the world. These not only help us in our design development but can also encourage creativity and enjoyment in our everyday lives.',
      quoteCards
    },
    revalidate: 1, // In seconds
  }
}

export default Quotes;
