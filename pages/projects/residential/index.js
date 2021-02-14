import MasonaryLayout from '../../../layouts/MasonaryLayout';
import residential from './projects.json';

const Residential = ({cards}) => {
  return (
    <MasonaryLayout title="Residential | Projects | ARDH" cards={cards} maxCards={6} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [ ...residential ]
    },
    revalidate: 1, // In seconds
  }
}

export default Residential;
