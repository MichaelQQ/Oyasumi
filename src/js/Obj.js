import React from 'react';
import { connect } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

const {
  array,
} = React.PropTypes;

const mapStateToProps = (state) => ({
  objects: state.objects,
});

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
