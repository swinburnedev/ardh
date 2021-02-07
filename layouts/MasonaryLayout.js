import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';

const MasonaryLayout = ({title, cards, maxCards = 6}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Masonary cards={cards} count={maxCards} />
        <Footer />
      </main>
    </>
  )
};

export default MasonaryLayout;
