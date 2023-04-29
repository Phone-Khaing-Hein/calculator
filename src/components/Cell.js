/* eslint-disable react/prop-types */
import React from 'react';

const Cell = ({ number, operator = false, colspan = 1 }) => (
  <div style={{ backgroundColor: operator ? 'orange' : '', width: colspan === 2 ? '50%' : '25%' }} className="cell">
    {number}
  </div>
);

export default Cell;
