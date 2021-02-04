import MasonaryLayout from '../../../layouts/MasonaryLayout';
import residential from './projects.json';

const Residential = ({cards}) => {
  return (
    <MasonaryLayout title="Residential | Projects | ARDH" cards={cards} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [ ...residential ]
    }
  }
}

export default Residential;
