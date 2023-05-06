import React from 'react';

const Cell = ({
  number, operator, colspan, handle,
}) => (
  <button onClick={handle} type="button" style={{ backgroundColor: operator ? 'orange' : '', width: colspan === 2 ? '50%' : '25%' }} className="cell">
    {number}
  </button>
);

Cell.propTypes = {
  number: Number.isRequired,
  operator: Boolean,
  colspan: Number,
  handle: Function.isRequired,
};

Cell.defaultProps = {
  operator: false,
  colspan: 1,
};

export default Cell;
