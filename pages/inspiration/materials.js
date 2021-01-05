import { useState } from 'react';
import Head from 'next/head';
import ContentArea from '../../components/ContentArea';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGrid from '../../components/ImageGrid';
import LightBox from '../../components/LightBox';

const Materials = ({title, content, cards}) => {
  const CARD_COUNT = 9;
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState();
  const materials = cards.slice(0, CARD_COUNT);
  return (
    <>
      <Head>
        <title>{title} | Inspiration | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="wrapper">
          <LightBox active={active} setActive={setActive} cards={materials} index={index} setIndex={setIndex} />
          <ContentArea title={title} content={content} />
          <ImageGrid cards={materials} setActive={setActive} setIndex={setIndex} />
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

export async function getStaticProps() {
  return {
    props: {
      title: 'Materials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      cards: [
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes',
          title: 'Material 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 1'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/materials',
          title: 'Material 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 2'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes',
          title: 'Material 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 3'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/materials',
          title: 'Material 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 4'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/quotes',
          title: 'Material 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 5'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/images',
          title: 'Material 6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 6'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/images',
          title: 'Material 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 7'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/quotes',
          title: 'Material 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 8'
        },
        {
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/inspiration/images',
          title: 'Material 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 9'
        },
        {
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/inspiration/materials',
          title: 'Material 10',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 10'
        }
      ]
    },
  }
}

export default Materials;
