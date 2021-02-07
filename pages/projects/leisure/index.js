import MasonaryLayout from '../../../layouts/MasonaryLayout';
import leisure from './projects.json';

const Residential = ({cards}) => {
  return (
    <MasonaryLayout title="Leisure &amp; Hospitality | Projects | ARDH" cards={cards} maxCards={3} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [ ...leisure ]
    }
  }
}


export default Residential;
