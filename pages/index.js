import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TabbedIcons from '../components/TabbedIcons';
import ImageGrid from '../components/ImageGrid';
import styles from '../styles/Home.module.scss';

const Home = ({cards, tabs}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <TabbedIcons tabs={tabs} />
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
          description: 'ARDH Limited is a design based practice established in 2019 in the UK. \
          We offer consultancy services in Landscape Design, Urbanism and Place-making. \
          We have worked with clients throughout the UK, Middle East and Asia on a wide range of projects and are fully committed to help our clients make a positive change to the wider public realm'
        },
        { 
          key: 'philosophy',
          title: 'Philosophy',
          icon: 'philosophy',
          description: 'ARDH Limited is a design based practice established in 2019 in the UK. \
          We offer consultancy services in Landscape Design, Urbanism and Place-making. \
          We have worked with clients throughout the UK, Middle East and Asia on a wide range of projects and are fully committed to help our clients make a positive change to the wider public realm'
        }
      ],
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
          img: '/img/inspiration/decking-design.jpg',
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
          img: '/img/inspiration/decking-design.jpg',
          alt: ''
        },
        {
          type: 'quote-top',
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: ''
        }
      ]
    },
  }
}

export default Home;
