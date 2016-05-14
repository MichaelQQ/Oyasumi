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

const defaultProjects = [];
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
    const { projects } = this.props;
    return (
      <div>
        <h1 className="title">Gallery</h1>
        <div className="nav">
          <button onClick={this.addObject}>Add Project</button>
          <button onClick={this.addProject}>Add Objects</button>
        </div>
        <Obj />
        <div className="projectBox">
          {projects.map(project =>
            <Project project={project} key={project.id} />
          ) || defaultProjects}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  projects: array.isRequired,
  onAddProject: func.isRequired,
  onAddObject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
