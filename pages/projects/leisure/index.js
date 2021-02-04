import MasonaryLayout from '../../../layouts/MasonaryLayout';
import leisure from './projects.json';

const Residential = ({cards}) => {
  return (
    <MasonaryLayout title="Leisure &amp; Hospitality | Projects | ARDH" cards={cards} />
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
