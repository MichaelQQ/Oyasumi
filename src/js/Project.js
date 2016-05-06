export default React => {
  const {
    string,
    number,
  } = React.PropTypes;

  const project = ({ ...props }) => {
    const { name, imgsrc, content, likes, addLike } = props;

    return (
      <div className="project" >
        <h2>{name}</h2>
        <img src={imgsrc} alt="project pic" />
        <div>{content}</div>
        <div className="likeBar">
          <span>{likes} <button onClick={addLike}>+</button></span>
        </div>
      </div>
    );
  };

  project.propTypes = {
    name: string.isRequired,
    imgsrc: string.isRequired,
    content: string.isRequired,
    likes: number.isRequired,
  };

  return project;
};
