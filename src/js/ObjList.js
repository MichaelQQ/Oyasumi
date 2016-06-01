import React from 'react';
import { connect } from 'react-redux';

import Obj from './Obj';

const {
  array,
} = React.PropTypes;

const mapStateToProps = (state) => ({
  objectId: state.objectId,
});

export const ObjList = ({ ...props }) => {
  const { objectId = [] } = props;

  return (
    <div>
      {objectId.map(o => <Obj key={o} ObjId={o} />)}
    </div>
  );
};

ObjList.propTypes = {
  objectId: array.isRequired,
};

export default connect(mapStateToProps)(ObjList);
