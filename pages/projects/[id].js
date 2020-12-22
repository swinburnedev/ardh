import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Location from '../../components/ProjectLocation';
import projects from '../../data/projects.json';
import { getProjectIds } from '../../lib/projects';

const Project = ({alt, img, title, location, map}) => {
  console.log('map:', map);
  return (
    <>
      <Head>
        <title>Project | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner img={img} alt={alt} />
        <Location title={title} location={location} map={map} />
        <Footer />
      </main>
    </>
  )
};

export async function getStaticPaths() {
  const paths = getProjectIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find(project => project.id === params.id);
  return {
    props: {
      ...project
    }
  }
}

export default Project;
