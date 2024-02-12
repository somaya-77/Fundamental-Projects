import React from 'react'

const MenuItem = ({ title, category, price, img, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>{price}</span>
        </header>
      </div>
      <p className='item-text'>{desc}</p>

    </article>
  )
}

export default MenuItem;