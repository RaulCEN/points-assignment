import React from "react";

import './Messages.style.css'

export const Error = ({ message }) => (<span data-testid='error-taxes' className="messages--error">{message}</span>)
