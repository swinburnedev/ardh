import Head from '../layouts/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TabbedIcons from '../components/TabbedIcons';
import Masonary from '../components/Masonary';
import { getImageCards, getQuoteCards, getQuoteOnly } from '../lib/util';
import images from './inspiration/images/images.json';
import quotes from './inspiration/quotes/quotes.json';
import materials from './inspiration/materials/materials.json';
import civil from './projects/civil/projects.json';
import leisure from './projects/leisure/projects.json';
import residential from './projects/residential/projects.json';

const Home = ({cards, hero, tabs}) => {
  return (
    <>
      <Head title="Home" />
      <main>
        <Header />
        <Hero slides={hero} />
        <TabbedIcons tabs={tabs} />
        <Masonary cards={cards} />
        <Footer />
      </main>
    </>
  )
};

export async function getStaticProps() {
  const quoteCards = getQuoteOnly(1, quotes, '/inspiration/quotes');
  const imageCards = getImageCards(1, images, '/inspiration/images');
  const materialCards = getImageCards(1, materials, '/inspiration/materials');
  const civilCards = getImageCards(1, civil);
  const leisureCards = getImageCards(1, leisure);
  const residentialCards = getImageCards(1, residential);
  return {
    props: {
      hero: [
        {
          img: '/img/banner/civil_public_garden.jpg',
          alt: 'Civil public garden',
          title: 'Civil / Public Realm',
          subtitle: 'Info',
          url: '/projects/civil'
        },
        {
          img: '/img/banner/private_garden_leeds.jpg',
          alt: 'Civil public garden',
          title: 'Residential',
          subtitle: 'Info',
          url: '/projects/residential'
        }
      ],
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
        ...civilCards,
        ...quoteCards,
        ...leisureCards,
        ...materialCards,
        ...imageCards,
        ...residentialCards
      ]
    }
  }
}

export default Home;
