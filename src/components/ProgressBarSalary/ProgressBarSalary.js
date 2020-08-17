import React from 'react'
import Bar from './Bar'

export default function ProgressBarSalary({ percentages }) {
  const { percDiscountINSS, percDiscountIRPF, percNetSalary } = percentages; 
  return (
    <div className="default-flex-row">
        <Bar value={percDiscountINSS} color="#e67e22" />
        <Bar value={percDiscountIRPF} color="#c0392b" />
        <Bar value={percNetSalary} color="#16a085" />
    </div>
  )
}
