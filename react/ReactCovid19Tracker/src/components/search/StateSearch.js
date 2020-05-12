import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

// uses the 'react-select' package
export default function StateSearch() {
  const [americanState, setAmericanState] = useState();

  console.log("state: ", americanState);

  if (americanState) {
    console.log("state to pass to Rails: ", americanState.value);
  }

  return (
    <div>
      <Select 
        options={options}
        placeholder="Select a State"
        onChange={setAmericanState}
        noOptionsMessage={() => 'Uh-oh nothing matches your search'}
        className=""
        components={makeAnimated()}
        isSearchable
      />
    </div>
  )
}
