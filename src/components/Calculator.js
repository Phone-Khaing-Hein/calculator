import React, { useState } from 'react';
import Cell from './Cell';

const Calculator = () => {
  const [result] = useState(0);

  const operator = true;
  return (
    <div className="calculator">
      <p>{result}</p>
      <div className="cellgroup">
        <Cell number="AC" />
        <Cell number="+/-" />
        <Cell number="%" />
        <Cell number="+" operator={operator} />
      </div>
      <div className="cellgroup">
        <Cell number="7" />
        <Cell number="8" />
        <Cell number="9" />
        <Cell number="x" operator={operator} />
      </div>
      <div className="cellgroup">
        <Cell number="4" />
        <Cell number="5" />
        <Cell number="6" />
        <Cell number="-" operator={operator} />
      </div>
      <div className="cellgroup">
        <Cell number="1" />
        <Cell number="2" />
        <Cell number="3" />
        <Cell number="+" operator={operator} />
      </div>
      <div className="cellgroup">
        <Cell number="0" colspan={2} />
        <Cell number="." />
        <Cell number="=" operator={operator} />
      </div>
    </div>
  );
};

export default Calculator;
