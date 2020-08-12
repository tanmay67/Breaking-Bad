import React from 'react';
import { useEffect, useContext } from 'react';
import BadContext from '../context/bad/badContext';
import Spinner from './Spinner';
import InfoItem from './InfoItem';

const Info = ({ match }) => {
  const badContext = useContext(BadContext);
  const { charFunction, loading, chars } = badContext;
  useEffect(() => {
    charFunction(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="text-light">
      {chars !== null && !loading ? (
        chars.map((char) => <InfoItem key={char.char_id} char={char} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Info;
