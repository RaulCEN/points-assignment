import React from 'react';

import './Button.style.css'

export const Button = ({children, disable, onClick}) => (
  <button
    data-testid
    className='button'
    disabled={disable}
    onClick={onClick}
  >
    { children }
  </button>
)
