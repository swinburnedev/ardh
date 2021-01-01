import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TabbedIcons from '../components/TabbedIcons';
import Masonary from '../components/Masonary';

const Home = ({cards, tabs}) => {
  return (
    <>
      <Head>
        <title>Home | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <TabbedIcons tabs={tabs} />
        <Masonary cards={cards} />
        <Footer />
      </main>
    </>
  )
};

export async function getStaticProps() {
  return {
    props: {
      tabs: [
        { 
          key: 'establishment',
          title: 'Establishment',
          icon: 'establishment',
          description: 'ARDH Limited is a design based practice established in 2019 in the UK. \
          We offer consultancy services in Landscape Design, Urbanism and Place-making. \
          We have worked with clients throughout the UK, Middle East and Asia on a wide range of projects and are fully committed to help our clients make a positive change to the wider public realm'
        },
        { 
          key: 'vision',
          title: 'Vision',
          icon: 'vision',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        { 
          key: 'philosophy',
          title: 'Philosophy',
          icon: 'philosophy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ],
      cards: [
        {
          type: 'double-image',
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

export default Home;
