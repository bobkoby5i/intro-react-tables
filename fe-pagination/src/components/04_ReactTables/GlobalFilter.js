import React from 'react'

// setFilter setter function fro main component with table
// filter - value of text input 
export default function GlobalFilter({filter, setFilter }) {
  return (
    <span style={{display:"flex", justifyContent:"center"}}>
        Search: {' '}
        <input value={filter || ''} 
        onChange={e => setFilter(e.target.value)}/>
    </span>
  )
}
