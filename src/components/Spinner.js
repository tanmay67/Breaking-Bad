import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="spinner"
      className="d-block mt-5"
      style={{
        width: '200px',
        margin: 'auto',
      }}
    />
  );
};

export default Spinner;
