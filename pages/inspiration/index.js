import Head from '../../layouts/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Masonary from '../../components/Masonary';
import { getImageCards, getQuoteOnly } from '../../lib/util';
import images from './images/images.json';
import materials from './materials/materials.json';
import quotes from './quotes/quotes.json';

const Inspiration = ({cards}) => {
  return (
    <>
      <Head title={title} />
      <main>
          <Header />
          <Masonary cards={cards} />
          <Footer />
      </main>
    </>
  )
};

export async function getStaticProps() {
  const imageCards = getImageCards(2, images, '/inspiration/images');
  const quoteCards = getQuoteOnly(2, quotes, '/inspiration/quotes');
  const materialCards = getImageCards(2, materials, '/inspiration/materials');
  return {
    props: {
      title: 'Inspiration',
      cards: [
        ...quoteCards,
        ...imageCards,
        ...materialCards
      ]
    },
  }
}

export default Inspiration;
