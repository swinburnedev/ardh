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
      content: 'A selection of images that help inspire our designs. We feel the creative process is greatly enhanced by constantly using inspiration from the world around us and so we look to capture these moments at every opportunity. You never know when that random photo will spark the flame of creativity.',
      imagesCards
    },
    revalidate: 1, // In seconds
  }
}

export default Images;
