import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import shallowCompare from 'react-addons-shallow-compare';

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

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.addObject = this.addObject.bind(this);
    this.addProject = this.addProject.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  addObject() {
    return this.props.onAddProject();
  }

  addProject() {
    return this.props.onAddObject();
  }

  render() {
    const { projectId } = this.props;
    return (
      <div>
        <h1 className="title">Gallery</h1>
        <div className="nav">
          <button onClick={this.addObject}>Add Project</button>
          <button onClick={this.addProject}>Add Objects</button>
        </div>
        <Obj />
        <div className="projectBox">
          {projectId.map(id => <Project projectId={id} key={id} />)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  projectId: array.isRequired,
  onAddProject: func.isRequired,
  onAddObject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
