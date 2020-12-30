import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGrid from '../../components/ImageGrid';

const Projects = ({cards}) => {
  return (
    <>
      <Head>
        <title>Projects | ARDH</title>
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
          type: 'fify-image',
          imgTop: '/img/inspiration/paint.png',
          altTop: 'Alt top',
          imgBottom: '/img/inspiration/basketball-court.jpg',
          altBottom: 'Alt top',
          url: '/projects/civil/golden-halo-garden'
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

export default Projects;
