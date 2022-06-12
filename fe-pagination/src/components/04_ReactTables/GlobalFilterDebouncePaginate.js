import React, {useState} from 'react'
import { useAsyncDebounce } from "react-table";

// setFilter setter function fro main component with table
// filter - value of text input 
export default function GlobalFilterDebouncePaginate({filter:initialFilter, setFilter }) {
    const [value, setValue] = useState(initialFilter)
    const onChange = useAsyncDebounce(value => {
      // console.log("goto page 0")
      // gotoPageCallback(0)
      setFilter(value || undefined)

      }, 1000)

  return (
    <span style={{display:"block", textAlign: "center"}}>
        Search:{' '}
        <input value={value || ''} 
        onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }}/>
    </span>
  )
}
