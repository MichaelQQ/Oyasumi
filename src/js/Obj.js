import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  objects: state.objects,
});

const {
  array,
} = React.PropTypes;

export const Obj = ({ ...props }) => {
  const { objects = [] } = props;

  return (
    <div>
      {objects.map(obj => <span key={obj.id}> {obj.id} </span>)}
    </div>
  );
};

Obj.propTypes = {
  objects: array.isRequired,
};

export default connect(mapStateToProps)(Obj);
