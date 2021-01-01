import projects from '../data/projects.json';

// TODO use ID for single or slug for dynamic
export const getProjectIds = () => projects.map(project => {
  return {
    params: {
      id: project.id,
      slug: project.slug
    }
  }
});