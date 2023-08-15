import React from 'react';

import './Button.style.css'

export const Button = ({children, onClick}) => (<button data-testid className='button' onClick={onClick}>{ children }</button>)
