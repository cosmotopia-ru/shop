import React from 'react'

export default function Header({ cartCount, onCartClick, isCartOpen }) {
  return (<>
    <header>
      <div className='container header-inner'>
        <span className='logo'>House Shop</span>
        <div className='header-actions'>
          <button
            type='button'
            className='cart-button'
            onClick={onCartClick}
            aria-haspopup='dialog'
            aria-expanded={isCartOpen}
            aria-label={`Open cart. ${cartCount} item${cartCount === 1 ? '' : 's'} in cart.`}
          >
            <span className='cart-icon' aria-hidden='true'>🛒</span>
            <span className='cart-label'>Cart</span>
            <span className='cart-badge' title='Cart items'>{cartCount}</span>
          </button>
        </div>
      </div>
      <div className='presentation'></div>
    </header>
  </>)
}
