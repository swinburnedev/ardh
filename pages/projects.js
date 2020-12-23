import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Masonary />
        <Footer />
      </main>
    </>
  )
};

export default Projects;
