import React from 'react'

export default function InputFullSalary({ onInputChange, labelName, value }) {
  const handleInputFullSalary = (event) => {
    onInputChange(event);
  }

  return (
    <div>
      <label>
        <span>{labelName}</span>
        <input 
          type="number" 
          value={value} 
          onChange={handleInputFullSalary}/> 
      </label>
    </div>
  )
}
