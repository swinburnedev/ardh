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
          img: '/img/banner/civil_public_realm.jpg',
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
        },
        {
          img: '/img/banner/hospitality_leisure.jpg',
          alt: 'Hospitality leisure',
          title: 'Hospitality / Leisure',
          subtitle: 'Info',
          url: '/projects/leisure'
        }
      ],
      tabs: [
        { 
          key: 'establishment',
          title: 'Establishment',
          icon: 'establishment',
          description: 'ARDH Limited is a design-based practice established in 2019 in the UK. We offer consultancy services in Landscape Design, Urbanism and Place-making. We have worked with clients throughout the UK, Middle East, and Asia on a wide range of projects and are fully committed to help our clients make a positive change to the wider public realm.'
        },
        { 
          key: 'vision',
          title: 'Vision',
          icon: 'vision',
          description: 'ARDH is committed to the creation of productive, sustainable, and livable spaces.  Connecting communities through the design of comfortable, vibrant, safe, and enjoyable destinations and ultimately making a positive difference to places in which we live, work and play.'
        },
        { 
          key: 'philosophy',
          title: 'Philosophy',
          icon: 'philosophy',
          description: 'ARDH’s philosophy is based around three key design principles that help drive the creative process:<br/>\
          VISION - Each design should start with a clear vision of the wider practice aspirations and the specific client vision for their project.<br/>\
          COLLABORATION - We have a strong belief in a collaborative design approach which encompasses clients, related design disciplines, contractors and wider public engagement.<br/>\
          ENJOYMENT - At the core of the design process should be a sense of enjoyment. We firmly believe that the joy the designers feel during the creative process will be expressed into the places they create.'
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
    },
    revalidate: 1, // In seconds
  }
}

export default Home;
