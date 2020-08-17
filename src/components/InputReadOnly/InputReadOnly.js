import React from 'react'
import { formatNumber } from '../../helpers/formatCurrency'

export default function InputReadOnly(props) {
  const { labelName, value, percentage = 0, color = "black" } = props;

  var valueString = formatNumber(value);
  if ( percentage > 0 ) {
    valueString = `${valueString} (${percentage}%)`; 
  }

  return (
    <div>
      <label>
        <span>{labelName}</span>
        <input 
          style={{fontWeight: "bold", color: color}} 
          type="text" 
          readOnly 
          disabled 
          value={valueString}
          /> 
      </label>
    </div>
  )
}
