import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import statesJSON from '../../helpers/states'; 
// import makeAnimated from 'react-select/animated';

// uses the 'react-select' package
export default function StateSearch(props) {
  const [americanState, setAmericanState] = useState();

  useEffect(() => {
    // if a state was selected from the dropdown

    console.log("state....", americanState);

    if (americanState) {
      axios.get("http://localhost:3001/state_policies/get_state_policy", {
        params: {
          state: americanState.value
        }
      }).then(response => {
        // the response back from the Rails server
        if (response.status === 200) {
          props.parentCallback(response.data); // send data back up to parent
        }
      }).catch(error => {
        console.log("Error fetching the state ", americanState.value, error);
      })
      event.preventDefault();
    }    
  }, [americanState]);

  // the dropdown select box for states.
  return (
    <div className="search-margin">
      <Select 
        options={statesJSON}
        placeholder="Select a State"
        onChange={setAmericanState}
        noOptionsMessage={() => 'Uh-oh nothing matches your search'}
        className=""
        // isMulti
        // components={animatedComponents}
        isSearchable
        isClearable={true}
      />
    </div>
  )
}
