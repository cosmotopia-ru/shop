import React from 'react'

export default function Header({ cartCount }) {
  return (<>
    <header>
      <div className='container header-inner'>
        <span className='logo'>House Shop</span>
        <div className='header-actions'>
          <span className='cart-badge' title='Cart items'>{cartCount}</span>
        </div>
      </div>
      <div className='presentation'></div>
    </header>
  </>)
}
