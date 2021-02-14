import Head from '../../layouts/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Masonary from '../../components/Masonary';
import { getImageCards } from '../../lib/util';
import civil from './civil/projects.json';
import leisure from './leisure/projects.json';
import residential from './residential/projects.json';

const Projects = ({title, cards}) => {
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

export async function getStaticProps() {
  const civilCards = getImageCards(2, civil, '1:1');
  const leisureCards = getImageCards(2, leisure, '1:1');
  const residentialCards = getImageCards(2, residential, '1:1');
  return {
    props: {
      title: 'Projects',
      cards: [
        ...civilCards,
        ...leisureCards,
        ...residentialCards
      ]
    }
  }
}

export default Projects;
