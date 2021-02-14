import projects from './projects.json';
import { getProjectIds, getCurrentProject, getCurrentProjectIndex, getNextPrevProjects} from '../../../lib/projects';
import Layout from '../../../layouts/Project';

const Project = ({images, title, location, map, next, prev}) => {
  return (
    <Layout images={images} title={title} location={location} map={map} next={next} prev={prev} />
  )
};

export async function getStaticPaths() {
  const paths = getProjectIds(projects);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = getCurrentProject(projects, params);
  const index = getCurrentProjectIndex(projects, params);
  const {next, prev} = getNextPrevProjects(projects, index);

  return {
    props: {
      ...project,
      next: { url: next.id, name: next.title},
      prev: { url: prev.id, name: prev.title},
    },
    revalidate: 1, // In seconds
  }
}

export default Project;
