import React, {useState} from 'react'
import { useAsyncDebounce } from "react-table";

// setFilter setter function fro main component with table
// filter - value of text input 
export default function ColumnFilterDebounceBootstap({column }) {
  const [value, setValue] = useState(column.filterValue)
  const {filterValue, setFilter} = column;

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)

  const handlerChangeValue = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)    
  }  
  
  return (
  <div class="input-group mb-3">
    <input type="text"  input value={value || ''} onChange={handlerChangeValue} class="form-control" placeholder="" aria-label="search text"/>
  </div> 
  )
}




{/* <span style={{display:"block", textAlign: "center"}}>
        <input value={value || ''} 
        onChange={e => {
          setValue(e.target.value)
          onChange(e.target.value)          

        }}/>
    </span> */}


{/* 
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
</div> 
*/}
