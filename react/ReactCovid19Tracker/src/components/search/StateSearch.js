import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import statesJSON from '../../helpers/states'; 

// uses the 'react-select' package
export default function StateSearch() {
  const [americanState, setAmericanState] = useState();

    // if a state was selected from the dropdown
    if (americanState) {
      // console.log("state to pass to Rails: ", americanState.value);

      axios.get("http://localhost:3001/state_policies/get_state_policy", {
        params: {
          state: americanState.value
        }
      }).then(response => {
        // the response back from the Rails server

        console.log("state policy: ", response); 

        if (response.status === 200) {
          console.log(response.data.state_name); 
        }
      }).catch(error => {
        console.log("Error fetching the state ", americanState.value, error);
      })
      event.preventDefault();
    }    

  // the dropdown select box for states.
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
