import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TabbedIcons from '../components/TabbedIcons';
import Masonary from '../components/Masonary';
import styles from '../styles/Home.module.scss';
import utils from '../styles/Utils.module.scss';

const Home = ({tabs}) => {
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
        <Masonary />
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
      ]
    },
  }
}

export default Home;
