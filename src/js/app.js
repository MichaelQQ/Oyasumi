import createProject from './Project';

export default React => {
  const Project = createProject(React);

  const {
    array,
  } = React.PropTypes;

  const app = ({ ...props }) => {
    const { projects = [] } = props;

    return (
      <div>
        <h1 className="title">Gallery</h1>
        <div className="projectBox">
          {projects.map(project =>
            <Project
              key={project.id}
              name={project.name}
              imgsrc={project.imgsrc}
            />
          )}
        </div>
      </div>
    );
  };

  app.propTypes = {
    projects: array.isRequired,
  };

  return app;
};
