import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';

const Expertise = ({cards}) => {
  return (
    <>
      <Head>
        <title>Expertise | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ImageGrid cards={cards} />
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
          url: '/test'
        },
        {
          type: 'quote-bottom',
          quote: 'If i had asked people what they wanted quote',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/test'
        },
        {
          type: 'image',
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/test'
        },
        {
          type: 'quote-bottom',
          quote: 'If i had asked people what they wanted quote',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/test'
        },
        {
          type: 'image',
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/test'
        },
        {
          type: 'quote-top',
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/test'
        }
      ]
    }
  }
}

export default Expertise;
