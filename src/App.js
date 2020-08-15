import React, { Component } from 'react';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import { calculateSalaryFrom, calculatePercentages } from './salary';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';

export default class App extends Component {

  //inicia o salario bruto
  constructor() {
    super();

    this.state = {
      fullSalary: 3900, 

      calculations: {
        baseINSS: 0,
        discountINSS: 0,
        baseIRPF: 0,
        discountIRPF: 0,
        netSalary: 0,
      },

      percentages: {
        percDiscountINSS: 0, 
        percDiscountIRPF: 0, 
        percNetSalary: 0
      }
    }
  }

  handleInputChange = (event) => {
    const newFullSalary = Number(event.target.value);
    this.setState({ fullSalary: newFullSalary });
  }

  //Realiza calculo inicial
  componentDidMount() {
    const calculations = calculateSalaryFrom(this.state.fullSalary); 
    const percentages = calculatePercentages(this.state.fullSalary);
    this.setState({ calculations, percentages });
  }

  componentDidUpdate(_, previousState) {
    const { fullSalary: oldFullSalary } = previousState; 
    const { fullSalary: newFullSalary } = this.state; 

    if (oldFullSalary !== newFullSalary) {
      const calculations = calculateSalaryFrom(newFullSalary); 
      const percentages = calculatePercentages(newFullSalary);
      this.setState({ calculations, percentages })
    }
  }

  render() {
    const { fullSalary, calculations, percentages } = this.state; 
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculations;
    const { percDiscountINSS, percDiscountIRPF, percNetSalary } = percentages;

    return (
      <div>
        <h1>React Salário</h1>
        <InputFullSalary 
          labelName="Salário Bruto:" 
          value={fullSalary} 
          onInputChange={this.handleInputChange}/>
        <div className="default-flex-row">
          <InputReadOnly 
            labelName="Base INSS:" 
            value={baseINSS} />
          <InputReadOnly 
            labelName="Desconto INSS:" 
            value={discountINSS} 
            percentage={percDiscountINSS}
            color="#e67e22"/>
          <InputReadOnly 
            labelName="Base IRPF:" 
            value={baseIRPF} />
          <InputReadOnly 
            labelName="Desconto IRPF:" 
            value={discountIRPF} 
            percentage={percDiscountIRPF}
            color="#c0392b"/>
        </div>
        <InputReadOnly 
          labelName="Salário Líquido:" 
          value={netSalary}
          percentage={percNetSalary}
          color="#16a085"/>
        <ProgressBarSalary percentages={percentages} />
      </div>
    );

  }
}
