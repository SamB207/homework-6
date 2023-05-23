import { useState, useEffect } from 'react'
// import Table from './Table';
import Table from './Table';
// import Form from './Form';
import Form from './Form';

const NameContainer = (props) => {
  const [name, setName] = useState([]);

  
  // useEffect(() => {
  //   fetch("http://localhost:8001/api")
  //   .then(res =>{
  //     console.log(res)
  //   })
  //   .catch(err =>{
  //     console.log(err)
  //   })


  //})
  const handleRemove = (index) => {
    const deleteName = [...name];
      deleteName.splice(index, 1);
      setName(deleteName);
      
  }

  const handleSubmit = (favName) => {
     setName([...name, favName])
  }

  return (
    <div className="container">
      <h1>Baby's name list</h1>
      <p>Add a new namess to the table.</p>
      {/*TODO - Add Table Component */}
      < Table NameData ={name} removeName={handleRemove}/>

      <br />

      <h3>Add new name</h3>
      {/*TODO - Add Form Component */}
      < Form onSubmit={handleSubmit}/>
    </div>
  )
}

export default NameContainer
