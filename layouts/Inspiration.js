import { useState } from 'react';
import Head from './Head';
import ContentArea from '../components/ContentArea';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';
import LightBox from '../components/LightBox';

const Inspiration = ({title, content, data, maxCards = 3}) => {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState();
  const cards = data.slice(0, maxCards);
  return (
    <>
      <Head title={`${title} | Inspiration`} />
      <main>
        <Header />
        <div className="wrapper">
          <LightBox active={active} setActive={setActive} cards={cards} index={index} setIndex={setIndex} />
          <ContentArea title={title} content={content} />
          <ImageGrid cards={cards} setActive={setActive} setIndex={setIndex} />
        </div>
        <Footer />
      </main>
      <style jsx>{`
        .wrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </>
  )
};

export default Inspiration;
