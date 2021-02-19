import Inspiration from '../../../layouts/Inspiration';
import { getImageCards } from '../../../lib/util';
import materials from './materials.json';

const Materials = ({title, content, materialsCards}) => {
  return (
    <Inspiration title={title} content={content} data={materialsCards} maxCards={9} />
  )
};

export async function getStaticProps() {
  const materialsCards = getImageCards(9, materials);
  return {
    props: {
      title: 'Materials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      materialsCards
    },
    revalidate: 1, // In seconds
  }
}

export default Materials;
