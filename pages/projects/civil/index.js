import MasonaryLayout from '../../../layouts/MasonaryLayout';
import civil from './projects.json';

const Civil = ({cards}) => {
  return (
    <MasonaryLayout title="Civil | Projects | ARDH" cards={cards} maxCards={3} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [ ...civil ]
    },
    revalidate: 1, // In seconds
  }
}

export default Civil;
