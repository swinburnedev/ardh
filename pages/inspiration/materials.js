import Head from 'next/head';
import ContentArea from '../../components/ContentArea';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGrid from '../../components/ImageGrid';

const Materials = ({title, content, cards}) => {
  const CARD_COUNT = 9;
  return (
    <>
      <Head>
        <title>{title} | Inspiration | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ContentArea title={title} content={content} />
        <ImageGrid cards={cards.slice(0, CARD_COUNT)} />
        <Footer />
      </main>
    </>
  )
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Materials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      cards: [
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/materials'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/images'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/materials'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/images'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/materials'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/images'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes'
        }
      ]
    },
  }
}

export default Materials;
