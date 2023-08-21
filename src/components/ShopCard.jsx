import React from 'react';

const ShopCard = ({ product }) => {
  return (
    <div className="card-long">
      <div className="card__image">
        <img src={product.img} alt={product.name} />
      </div>
      
      <h4 className='card__name'>{product.name}</h4>
      <p className='card__color'>{product.color}</p>
      <p className='card__price'>${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ShopCard;
