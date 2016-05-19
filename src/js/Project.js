import React from 'react';
import { connect } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

const {
  object,
  func,
} = React.PropTypes;

const makeMapStateToProps = (initialState, initialOwnProps) => {
  const { id } = initialOwnProps;
  const mapStateToProps = (state) => {
    const { projects } = state;
    const project = projects[id];
    return {
      project,
    };
  };
  return mapStateToProps;
};

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
        <span>{project.likes} <button onClick={() => onAddLike(project.id)}>+</button></span>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: object.isRequired,
  onAddLike: func.isRequired,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Project);
