import Inspiration from '../../../layouts/Inspiration';
import images from './images.json';

const Images = ({title, content}) => {
  return (
    <Inspiration title={title} content={content} data={images} maxCards={6} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Images',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  }
}

export default Images;
