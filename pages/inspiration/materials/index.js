import Inspiration from '../../../layouts/Inspiration';
import materials from './materials.json';

const Materials = ({title, content}) => {
  return (
    <Inspiration title={title} content={content} data={materials} maxCards={60} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Materials',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  }
}

export default Materials;
