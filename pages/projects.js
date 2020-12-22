import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';
import styles from '../styles/Home.module.scss';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <Footer />
        <Masonary />
      </main>
    </>
  )
};

export default Projects;
