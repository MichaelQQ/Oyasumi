import createProject from './Project';

export default (React, connect) => {
  const Project = createProject(React, connect);

  let nextProjectId = 5;
  const addProject = () => (
    {
      type: 'ADD_PROJECT',
      id: nextProjectId,
      name: `Proj${nextProjectId++}`,
      imgsrc: 'http://www.planwallpaper.com/static/images/image-slider-2.jpg',
      content: 'test',
      likes: 0,
    }
  );

  const mapDispatchToProps = (dispatch) => ({
    onAddProject: () => {
      dispatch(addProject());
    },
  });

  const {
    array,
    func,
  } = React.PropTypes;

  const app = ({ ...props }) => {
    const { projects = [], onAddProject } = props;

    return (
      <div>
        <h1 className="title">Gallery</h1>
        <div className="nav">
          <button onClick={onAddProject}>Add Project</button>
        </div>
        <div className="projectBox">
          {projects.map(project =>
            <Project project={project} key={project.id} />
          )}
        </div>
      </div>
    );
  };

  app.propTypes = {
    projects: array.isRequired,
    onAddProject: func.isRequired,
  };

  return connect ? connect(null, mapDispatchToProps)(app) : app;
};
