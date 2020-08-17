import React from 'react'

export default function Bar({ value, color = "black" } ) {
  return (
    <div
      style={{
        marginTop: "40px",
        width: value + "%",
        height: "20px",
        backgroundColor: color
      }}
    />
  )
}
