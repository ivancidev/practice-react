import React from 'react'

export default function Input({label, value, onChange}) {
  return (
    <>
      <label>{label}</label>
      <input style={{padding: "5px", marginRight: "5px"}} type="text" value={value} onChange={onChange} />
    </>
  )
}
