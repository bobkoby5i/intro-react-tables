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

      const handlerChangeValue = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }

  return (
    <div className="input-group  mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">Search </span>
      <input type="text" value={value || ''}  onChange={handlerChangeValue} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
    </div>
  )
}

