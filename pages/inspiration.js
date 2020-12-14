import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';
import styles from '../styles/Home.module.scss';

const Inspiration = ({cards}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inspiration | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <ImageGrid cards={cards} />
          <Footer />
      </main>
    </div>
  )
};

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      cards: [
        {
          type: 'quote-top',
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: ''
        },
        {
          type: 'quote-bottom',
          quote: 'If i had asked people what they wanted quote',
          img: '/img/inspiration/basketball-court.jpg',
          alt: ''
        },
        {
          type: 'image',
          img: '/img/inspiration/basketball-court.jpg',
          alt: ''
        },
      ]
    },
  }
}

export default Inspiration;
