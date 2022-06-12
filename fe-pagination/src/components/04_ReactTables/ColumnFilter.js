import React from 'react'

// setFilter setter function fro main component with table
// filter - value of text input 
export default function ColumnFilter({column }) {
  const {filterValue, setFilter} = column;
  return (
    <span style={{display:"block", textAlign: "center"}}>
        <input value={filterValue || ''} 
        onChange={e => setFilter(e.target.value)}/>
    </span>
  )
}
