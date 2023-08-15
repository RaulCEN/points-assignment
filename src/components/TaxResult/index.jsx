import React from "react";

import './TaxResult.style.css'

export const TaxResult = ({ amount }) => (
  <div className="tax-result">
    <span className="tax-result--amount">${ amount }</span>
    <p className="tax-result--label">In taxes</p>
  </div>
);
