import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';

const Expertise = () => {
  return (
    <>
      <Head>
        <title>Expertise | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ImageGrid />
        <Footer />
      </main>
    </>
  )
};

export default Expertise;
