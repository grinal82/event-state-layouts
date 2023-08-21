import React from 'react'

const ShopItem = ({ product }) => {
    return (
        <div className="item" style={{backgroundImage:`url(${product.img})`, backgroundSize:"cover"}}>
          <h4 className='item__name'>{product.name}</h4>
          <p className='item__color'>{product.color}</p>
          <div className="item-price__wrapper">
            <p className='item__price'>${product.price}</p>
            <button className='item-button'>Add to cart</button>
          </div>
        </div>
      );
}

export default ShopItem