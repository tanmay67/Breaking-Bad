import React from 'react';
import { Link } from 'react-router-dom';

const CharItem = ({ item }) => {
  return (
    <Link to={`/${item.char_id}`} className="card card-body m-4 p-0 bg-dark">
      <img
        src={item.img}
        alt="img"
        className="img-fluid"
        style={{ height: '400px', width: 'auto' }}
      />
    </Link>
  );
};

export default CharItem;
