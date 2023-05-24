import { useState } from 'react'
import styled from 'styled-components'

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
       props.onSubmit({"name": name})
        
           
  }
  const Input = styled.input`
  padding:10px 20px;
  background: #000;
  border: none;
  border-radius: 3px;
`;

  return (
    <form>
      <label htmlFor="name">Name</label> <br></br>
         <Input
           type="text"
           name="name"
         onChange ={(handleChange)}/><br></br>
 <button onClick={(onFormSubmit)}>Submit</button>
    </form>
  )
}

export default Form
