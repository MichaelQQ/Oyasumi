import createProject from './Project';

export default React => {
  const Project = createProject(React);

  const {
    array,
    func,
  } = React.PropTypes;

  const app = ({ ...props }) => {
    const { projects = [], onClick } = props;

    return (
      <div>
        <h1 className="title">Gallery</h1>
        <div className="nav">
          <button onClick={onClick}>Add Project</button>
        </div>
        <div className="projectBox">
          {projects.map(project =>
            <Project
              key={project.id}
              name={project.name}
              imgsrc={project.imgsrc}
              content={project.content}
              likes={project.likes}
            />
          )}
        </div>
      </div>
    );
  };

  app.propTypes = {
    projects: array.isRequired,
    onClick: func.isRequired,
  };

  return app;
};
