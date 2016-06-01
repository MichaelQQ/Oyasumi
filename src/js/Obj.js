import React from 'react';
import { connect } from 'react-redux';

const {
  number,
} = React.PropTypes;

const makeMapStateToProps = (initialState, initialOwnProps) => (state) => ({
  objValue: state.objects[initialOwnProps.ObjId],
});

export const Obj = ({ ...props }) => {
  const { objValue } = props;

  return (<span> {objValue} </span>);
};

Obj.propTypes = {
  objValue: number.isRequired,
};

export default connect(makeMapStateToProps)(Obj);
