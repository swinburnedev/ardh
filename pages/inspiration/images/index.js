import Inspiration from '../../../layouts/Inspiration';
import { getImageCards } from '../../../lib/util';
import images from './images.json';

const Images = ({title, content, imagesCards}) => {
  return (
    <Inspiration title={title} content={content} data={imagesCards} maxCards={9} />
  )
};

export async function getStaticProps() {
  const imagesCards = getImageCards(9, images);
  return {
    props: {
      title: 'Images',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagesCards
    },
    revalidate: 1, // In seconds
  }
}

export default Images;
