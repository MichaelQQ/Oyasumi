import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import shallowCompare from 'react-addons-shallow-compare';

const {
  object,
  func,
} = React.PropTypes;

const mapDispatchToProps = (dispatch) => ({
  onAddLike: (id) => {
    dispatch({
      type: 'ADD_LIKE',
      id,
    });
  },
});

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  addLike() {
    return this.props.onAddLike(this.props.project.id);
  }

  render() {
    const { project } = this.props;
    return (
      <div className="project">
        <h2>{project.name}</h2>
        <img src={project.imgsrc} alt="project pic" />
        <div>{project.content}</div>
        <div className="likeBar">
          <span>{project.likes} <button onClick={this.addLike}>+</button></span>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: object.isRequired,
  onAddLike: func.isRequired,
};

export default connect(
  (initialState, initialOwnProps) => (state) => ({
    project: state.projects[initialOwnProps.projectId],
  }), mapDispatchToProps)(Project);
