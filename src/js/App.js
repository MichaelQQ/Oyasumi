import React from 'react';
import { connect } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

import Obj from './Obj.js';
import Project from './Project';

let nextProjectId = 5;
let nextObjId = 0;

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

const addObject = () => ({
  type: 'ADD_OBJECT',
  id: nextObjId++,
});

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onAddProject: () => {
    dispatch(addProject());
  },

  onAddObject: () => {
    dispatch(addObject());
  },
});

const {
  array,
  func,
} = React.PropTypes;

export const App = ({ ...props }) => {
  const { projects = [], onAddProject, onAddObject } = props;

  return (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="nav">
        <button onClick={onAddProject}>Add Project</button>
        <button onClick={onAddObject}>Add Objects</button>
      </div>
      <Obj />
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
  onAddObject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
