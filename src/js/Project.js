export default React => {
  const {
    string,
  } = React.PropTypes;

  const project = ({ name }) => (
    <div>
      <h2>{name}</h2>
      <div>Content</div>
    </div>
  );

  project.propTypes = {
    name: string.isRequired,
  };

  return project;
};
