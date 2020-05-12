import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import statesJSON from '../../helpers/states'; 

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
        options={statesJSON}
        placeholder="Select a State"
        onChange={setAmericanState}
        noOptionsMessage={() => 'Uh-oh nothing matches your search'}
        className=""
        components={makeAnimated()}
        isSearchable
        isClearable={true}
      />
    </div>
  )
}
