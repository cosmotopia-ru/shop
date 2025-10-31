import React from 'react'

export default function Footer() {
  return (<>
    <footer>
      <div className='container'>
        <p>© {new Date().getFullYear()} House Shop — Все права защищены.</p>
      </div>
    </footer>
  </>)
}
