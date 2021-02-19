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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quoteCards
    },
    revalidate: 1, // In seconds
  }
}

export default Quotes;
