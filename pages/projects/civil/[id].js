import projects from './projects.json';
import { getProjectIds } from '../../../lib/projects';
import Layout from '../../../layouts/Project';

const Project = ({alt, img, title, location, map}) => {
  return (
    <Layout alt={alt} img={img} title={title} location={location} map={map} />
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
