import projects from '../data/projects.json';

export const getProjectIds = () => projects.map(project => {
  return {
    params: {
      id: project.id
    }
  }
});