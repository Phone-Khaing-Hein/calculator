import React, { useState } from 'react';
import Cell from './Cell';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleBtn = (btn) => setObj(calculate(obj, btn));

  const operator = true;
  return (
    <div className="d-flex gap-5">
      <h2>Let us do some Math!</h2>
      <div className="calculator">
        <p>
          {obj?.total}
          {' '}
          {obj?.operation}
          {' '}
          {obj?.next}

        </p>
        <div className="cellgroup">
          <Cell number="AC" handle={() => handleBtn('AC')} />
          <Cell number="+/-" handle={() => handleBtn('+/-')} />
          <Cell number="%" handle={() => handleBtn('%')} />
          <Cell number="+" handle={() => handleBtn('+')} operator={operator} />
        </div>
        <div className="cellgroup">
          <Cell number="7" handle={() => handleBtn('7')} />
          <Cell number="8" handle={() => handleBtn('8')} />
          <Cell number="9" handle={() => handleBtn('9')} />
          <Cell number="x" handle={() => handleBtn('x')} operator={operator} />
        </div>
        <div className="cellgroup">
          <Cell number="4" handle={() => handleBtn('4')} />
          <Cell number="5" handle={() => handleBtn('5')} />
          <Cell number="6" handle={() => handleBtn('6')} />
          <Cell number="-" handle={() => handleBtn('-')} operator={operator} />
        </div>
        <div className="cellgroup">
          <Cell number="1" handle={() => handleBtn('1')} />
          <Cell number="2" handle={() => handleBtn('2')} />
          <Cell number="3" handle={() => handleBtn('3')} />
          <Cell number="+" handle={() => handleBtn('+')} operator={operator} />
        </div>
        <div className="cellgroup">
          <Cell number="0" handle={() => handleBtn('0')} colspan={2} />
          <Cell number="." handle={() => handleBtn('.')} />
          <Cell number="=" handle={() => handleBtn('=')} operator={operator} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
