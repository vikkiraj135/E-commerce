import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';

// Create a component for individual popular items
const PopularItem = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="popular-item" key={id}>
      <img src={image} alt={name} />
      <div className='title'>
        <h2>{name}</h2>
      </div>
      <p className="new-price">${new_price}</p>
      <p className="old-price">${old_price}</p>
    </div>
  );
};

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item, i) => (
          <PopularItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
