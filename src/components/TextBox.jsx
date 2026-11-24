import React from 'react'

export default function TextBox({ ref, placeholder = "Type something...", ...props }) {
  return (
   <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      {...props}
    />
  )
}
