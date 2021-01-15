// import projects from '../data/projects.json';

// TODO use ID for single or slug for dynamic
export const getProjectIds = (projects) => projects.map(project => {
  return {
    params: {
      id: project.id,
      slug: project.slug
    }
  }
});

const checkProject = (project, params) => project.id === params.id;
// const project = projects.find(checkProject);
// const index = projects.findIndex(checkProject);

const nextIndex = (index, projects) => index !== projects.length - 1 ? index + 1 : 0;
const prevIndex = (index, projects) => index !== 0 ? index - 1 : projects.length - 1;

export const getCurrentProject = (projects, params) => projects.find(project => checkProject(project, params));

export const getCurrentProjectIndex = (projects, params) => projects.findIndex(project => checkProject(project, params));

export const getNextPrevProjects = (projects, index) => ({ next: projects[nextIndex(index, projects)], prev: projects[prevIndex(index, projects)] });
// export const getPrevProject = (projects, index) => projects[prevIndex(index, projects)] || {};

// const nextProject = projects[nextIndex(index)] || {};
// const prevProject = projects[prevIndex(index)] || {};

// const next = { url: nextProject.id, name: nextProject.title};
// const prev = { url: prevProject.id, name: prevProject.title};