import Inspiration from '../../../layouts/Inspiration';
import quotes from './quotes.json';

const Quotes = ({title, content}) => {
  return (
    <Inspiration title={title} content={content} data={quotes} maxCards={9} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Quotes',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  }
}

export default Quotes;
