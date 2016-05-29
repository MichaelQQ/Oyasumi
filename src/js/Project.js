import React from 'react';
import { connect } from 'react-redux';

const {
  object,
  func,
} = React.PropTypes;

const makeMapStateToProps = (initialState, initialOwnProps) => (state) => ({
  project: state.projects[initialOwnProps.projectId],
});

const mapDispatchToProps = (dispatch) => ({
  onAddLike: (id) => {
    dispatch({
      type: 'ADD_LIKE',
      id,
    });
  },
});

export const Project = ({ ...props }) => {
  const { project, onAddLike } = props;

  return (
    <div className="project">
      <h2>{project.name}</h2>
      <img src={project.imgsrc} alt="project pic" />
      <div>{project.content}</div>
      <div className="likeBar">
        <span>
          <input
            type="button"
            className="like-btn"
            onClick={() => onAddLike(project.id)}
            value="Like"
          />
          {project.likes}
        </span>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: object.isRequired,
  onAddLike: func.isRequired,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Project);
