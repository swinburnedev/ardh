import Head from './Head';
import ContentArea from '../components/ContentArea';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';

const MasonaryLayout = ({title, content = '', cards, maxCards = 6}) => {
  return (
    <>
      <Head title={title} />
      <main>
        <Header />
        { content && <ContentArea title={title} content={content} />}
        <Masonary cards={cards} count={maxCards} />
        <Footer />
      </main>
    </>
  )
};

export default MasonaryLayout;
