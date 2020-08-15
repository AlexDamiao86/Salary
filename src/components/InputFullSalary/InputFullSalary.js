import React, { Component } from 'react'

export default class InputFullSalary extends Component {
  handleInputFullSalary = (event) => {
    const { onInputChange } = this.props;
    onInputChange(event);
  }

  render() {
    const { labelName, value } = this.props;
    return (
      <div>
        <label>
          <span>{labelName}</span>
          <input 
            type="number" 
            value={value} 
            onChange={this.handleInputFullSalary}/> 
        </label>
      </div>
    )
  }
}
