import MasonaryLayout from '../../../layouts/MasonaryLayout';

const Residential = ({cards}) => {
  return (
    <MasonaryLayout title="Residential | Projects | ARDH" cards={cards} />
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
          url: '/projects/residential/golden-halo-garden'
        },
        {
          type: 'image',
          img: '/img/inspiration/decking-design.jpg',
          alt: '',
          url: '/projects/residential/project-2'
        },
        {
          type: 'quote-top',
          quote: 'Beauty perishes in life, but is immortal in art',
          img: '/img/inspiration/basketball-court.jpg',
          alt: '',
          url: '/projects/residential/project-3'
        }
      ]
    }
  }
}

export default Residential;
