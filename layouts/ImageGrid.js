import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';

const ImageGridLayout = ({title, cards}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ImageGrid cards={cards} />
        <Footer />
      </main>
    </>
  )
};

export default ImageGridLayout;