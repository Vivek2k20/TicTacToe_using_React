import React from 'react';

const Square = args => {
  return (
    <button type="button" className="square">
      {args.value}
    </button>
  );
};

export default Square;
