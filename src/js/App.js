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
  projectId: state.projectId,
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
  object,
  array,
  func,
} = React.PropTypes;

export const App = ({ ...props }) => {
  const { projectId = [], projects = {}, onAddProject, onAddObject } = props;

  return (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="nav">
        <button onClick={onAddProject}>Add Project</button>
        <button onClick={onAddObject}>Add Objects</button>
      </div>
      <Obj />
      <div className="projectBox">
        {projectId.map(id =>
          <Project project={projects[id]} key={id} />
        )}
      </div>
    </div>
  );
};

App.propTypes = {
  projectId: array.isRequired,
  projects: object.isRequired,
  onAddProject: func.isRequired,
  onAddObject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
