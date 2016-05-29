import React from 'react';
import { connect } from 'react-redux';

import ObjList from './ObjList.js';
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
  const { projectId = [], onAddProject, onAddObject } = props;

  return (
    <div>
      <div className="nav">
        <button onClick={onAddProject}>Search</button>
        <button onClick={onAddObject}>Add Objects</button>
      </div>
      <ObjList />
      <div className="projectBox">
        {projectId.map(id => <Project projectId={id} key={id} />)}
      </div>
    </div>
  );
};

App.propTypes = {
  projectId: array.isRequired,
  onAddProject: func.isRequired,
  onAddObject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
