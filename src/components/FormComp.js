import React, { useState, useContext, useEffect } from 'react';
import BadContext from '../context/bad/badContext';

const FormComp = () => {
  const [name, setName] = useState('');
  const badContext = useContext(BadContext);
  const { searchFunction, overallFunction } = badContext;

  useEffect(() => {
    if (name === '') {
      overallFunction();
    }
    // eslint-disable-next-line
  }, [name]);

  const onChange = (e) => {
    setName(e.target.value);
    searchFunction(name);
  };

  return (
    <form className="form mt-4">
      <div className="form-group">
        <input
          type="text"
          name="text"
          id="text"
          className="form-control"
          placeholder="name the character...."
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default FormComp;
