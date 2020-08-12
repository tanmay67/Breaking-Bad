import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InfoItem = ({ char }) => {
  const {
    name,
    birthday,
    status,
    nickname,
    portrayed,
    occupation,
    appearance,
    img,
  } = char;
  return (
    <div className="mt-5 text-center">
      <Breadcrumb className="bread">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>{char.name}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="card card-body bg-dark"
        style={{ boxShadow: '0px 0px 0px 0px' }}
      >
        <div className="row">
          <div className="col-md-5">
            <img
              src={img}
              alt={name}
              className="img-fluid"
              style={{ borderRadius: '20px' }}
            />
          </div>
          <div
            className="col-md-7 text-center text-justify"
            style={{ margin: 'auto' }}
          >
            <h1 style={{ fontSize: '80px' }}>{name}</h1>
            <hr />
            {birthday !== 'Unknown' && (
              <h3>
                Born On <strong>{birthday}</strong>
              </h3>
            )}
            {status && (
              <h3>
                Presumed: <strong>{status}</strong>
              </h3>
            )}
            {nickname && (
              <h3>
                Also known as: <strong>{nickname}</strong>
              </h3>
            )}
            {portrayed && (
              <h3>
                Portrated as: <strong>{portrayed}</strong>
              </h3>
            )}
            <h4>Appeared in {appearance.length} seasons</h4>
            {occupation.map((occ, i) => (
              <p className="badge badge-primary m-2" key={i}>
                {occ}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
