import { useState } from 'react'
import { Component } from 'react/cjs/react.production.min'

const Form = (props) => {
  const [name, setName] = useState('')
  const handleChange = (event) => { 
         if( event.target.name == "name"){
        setName(event.target.value) 
        }
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       props.onSubmit({"name": name})
        
           
  }

  return (
    <form>
      <label htmlFor="name">Name</label> <br></br>
         <input
           type="text"
           name="name"
         onChange ={(handleChange)}/><br></br>
 <button onClick={(onFormSubmit)}>Submit</button>
    </form>
  )
}

export default Form
