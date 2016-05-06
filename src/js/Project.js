export default React => {
  const {
    string,
  } = React.PropTypes;

  const project = ({ ...props }) => {
    const { name, imgsrc } = props;

    return (
      <div className="project">
        <h2>{name}</h2>
        <img src={imgsrc} alt="project pic" />
        <div>Content</div>
      </div>
    );
  };

  project.propTypes = {
    name: string.isRequired,
    imgsrc: string.isRequired,
  };

  return project;
};
