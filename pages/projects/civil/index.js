import MasonaryLayout from '../../../layouts/MasonaryLayout';
import civil from './projects.json';

const Civil = ({cards}) => {
  return (
    <MasonaryLayout title="Civil | Projects | ARDH" cards={cards} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [ ...civil ]
    }
  }
}

export default Civil;
