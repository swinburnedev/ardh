import MasonaryLayout from '../../../layouts/MasonaryLayout';

const Civil = ({cards}) => {
  return (
    <MasonaryLayout title="Civil | Projects | ARDH" cards={cards} />
  )
};

export async function getStaticProps() {
  return {
    props: {
      cards: [
        {
          type: 'quote-bottom',
          quote: 'If i had asked people what they wanted quote',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/projects/civil/golden-halo-garden'
        },
        {
          type: 'image',
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/test'
        },
        {
          type: 'quote-top',
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/test'
        }
      ]
    }
  }
}

export default Civil;
