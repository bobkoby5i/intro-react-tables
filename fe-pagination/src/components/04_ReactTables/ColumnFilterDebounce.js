import React, {useState} from 'react'
import { useAsyncDebounce } from "react-table";

// setFilter setter function fro main component with table
// filter - value of text input 
export default function ColumnFilter({column }) {
  const [value, setValue] = useState(column.filterValue)
  const {filterValue, setFilter} = column;

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  
  return (
    <span style={{display:"block", textAlign: "center"}}>
        <input value={value || ''} 
        onChange={e => {
          setValue(e.target.value)
          onChange(e.target.value)          

        }}/>
    </span>
  )
}


