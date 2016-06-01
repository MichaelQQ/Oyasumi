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
  const { project } = props;

  // const divStyle = {
  //   backgroundImage: `url(${project.imgsrc})`,
  // };

  return (
    <div className="project">
      <div className="project-img">
        <img src={project.imgsrc} alt={project.name} onShow={(e) => console.log('show',e)} />
      </div>
      <div className="project-view">
        <div className="project-bar">{project.name}</div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: object.isRequired,
  onAddLike: func.isRequired,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Project);
