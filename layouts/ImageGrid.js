import Head from './Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';

const MasonaryLayout = ({title, cards}) => {
  return (
    <>
      <Head title={title} />
      <main>
        <Header />
        <Masonary cards={cards} />
        <Footer />
      </main>
    </>
  )
};

export default MasonaryLayout;