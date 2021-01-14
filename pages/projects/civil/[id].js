import projects from './projects.json';
import { getProjectIds } from '../../../lib/projects';
import Layout from '../../../layouts/Project';

const Project = ({images, title, location, map, next, prev}) => {
  return (
    <Layout images={images} title={title} location={location} map={map} next={next} prev={prev} />
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
  const next = { url: '/test', name: 'Long project name'};
  const prev = { url: '/test', name: 'Prev project name'};
  return {
    props: {
      ...project,
      next,
      prev
    }
  }
}

export default Project;
