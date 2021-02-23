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
      content: 'It can be those little details that make or break a project. At ARDH we always have those details in mind throughout the lifecycle of a project, be it at a concept stage, schematic or detail. It is always a good idea to be on the lookout for that special detail that will help elevate your design to the next level, whether it be a specific species of plant, paving pattern, or piece of furniture.',
      materialsCards
    },
    revalidate: 1, // In seconds
  }
}

export default Materials;
