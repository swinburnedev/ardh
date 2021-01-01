import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';

const MasonaryLayout = ({title, cards}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Masonary cards={cards} />
        <Footer />
      </main>
    </>
  )
};

export default MasonaryLayout;