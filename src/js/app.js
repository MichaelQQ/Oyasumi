import React from 'react';
import { connect } from 'react-redux';

import Project from './Project';

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

const mapStateToProps = (state) => ({
  projects: state,
});

const mapDispatchToProps = (dispatch) => ({
  onAddProject: () => {
    dispatch(addProject());
  },
});

const {
  array,
  func,
} = React.PropTypes;

export const App = ({ ...props }) => {
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

App.propTypes = {
  projects: array.isRequired,
  onAddProject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
