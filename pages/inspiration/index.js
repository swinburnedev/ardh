import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Masonary from '../../components/Masonary';

const Inspiration = ({cards}) => {
  return (
    <>
      <Head>
        <title>Inspiration | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <Masonary cards={cards} />
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
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes'
        },
        {
          type: 'quote-bottom',
          quote: 'If i had asked people what they wanted quote',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/materials'
        },
        {
          type: 'image',
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/images'
        },
        {
          type: 'quote-bottom',
          quote: 'If i had asked people what they wanted quote',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/materials'
        },
        {
          type: 'image',
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/images'
        },
        {
          type: 'quote-top',
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes'
        }
      ]
    },
  }
}

export default Inspiration;
