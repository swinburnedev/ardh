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
        <Masonary cards={cards} count={6} />
        <Footer />
      </main>
    </>
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [
        {
          type: 'quote-top',
          img: '/img/expertise/landscape_architecture.jpg',
          alt: 'Landscape Architecture',
          quote: 'Landscape Architecture'
        },
        {
          type: 'quote-top',
          img: '/img/expertise/place_making_urbanism.jpg',
          alt: 'Place Making Urbanism',
          quote: 'Place Making Urbanism'
        },
        {
          type: 'quote-top',
          img: '/img/expertise/garden_design.jpg',
          alt: 'Garden Design',
          quote: 'Garden Design'
        },
        {
          type: 'quote-top',
          img: '/img/expertise/concept_design.jpg',
          alt: 'Concept Design',
          quote: 'Concept Design'
        },
        {
          type: 'quote-top',
          img: '/img/expertise/detail_design.jpg',
          alt: 'Detail Design',
          quote: 'Detail Design'
        },
        {
          type: 'quote-top',
          img: '/img/expertise/Landscape_project_management.jpg',
          alt: 'Landscape project management',
          quote: 'Landscape project management'
        }
      ]
    }
  }
}

export default Expertise;
