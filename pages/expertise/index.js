import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Masonary from '../../components/Masonary';
import { getImageCards, getQuoteCards } from '../../lib/util';

const Expertise = ({cards}) => {
  return (
    <>
      <Head>
        <title>Expertise | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Masonary cards={cards} count={3} />
        <Footer />
      </main>
    </>
  )
};

export async function getStaticProps() {
  // const imageCards = getImageCards(2, images);
  return {
    props: {
      cards: [
        {
          type: 'image',
          img: '/img/expertise/garden_design_1.jpg',
          alt: 'Garden Design',
          url: '/test'
        },
        {
          type: 'image',
          img: '/img/expertise/landscape_architecture.jpg',
          alt: 'Landscape Architecture',
          url: '/test'
        },
        {
          type: 'image',
          img: '/img/expertise/place_making_urbanism.jpg',
          alt: 'Place Making Urbanism',
          url: '/test'
        },
        {
          type: 'image',
          img: '/img/expertise/technical_design.jpg',
          alt: 'Technical Design',
          url: '/test'
        },
      ]
    }
  }
}

export default Expertise;
