import { useState, useEffect } from 'react'
// import Table from './Table';
import Table from './Table';
// import Form from './Form';
import Form from './Form';
// import "./style.css";
import styled from 'styled-components'

const NameContainer = (props) => {
  const [name, setName] = useState([]);

  const fetchNames = async ()=>{
    try{
      let response =await fetch('/Names')
      console.log(response)
      let data = await response.json()
      setName(data)
      console.log(data)
    }
    catch (error){
      console.log(error)
    }
  }
  const fetchNamesUser = async ()=>{
    try{
      let response =await fetch('/users/:id')
      console.log(response)
      let data = await response.json()
      console.log(data)
    }
    catch (error){
      console.log(error)
    }
  }
  const PostNames = async(newNames) =>{
    try{
      let response = await fetch('/new', {
        method: 'POST', headers:{ 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNames)
    })
      console.log(response)
      let message = await response.text()
      console.log(message)
    }
    catch(error){
      console.log(error)
    }
  }
  const UpdatesNames = async ()=>{
    try{
      let response =await fetch('/update/:id')
      console.log(response)
      let data = await response.json()
      console.log(data)
    }
    catch (error){
      console.log(error)
    }
  }
  const deleNames =async()=>{
    try{
      let response =await fetch('/delete/:id')
      console.log(response)
      let data = await response.json()
      console.log(data)
    }
    catch (error){
      console.log(error)
    }
  } 
  const handleRemove = (index) => {
    const deleteName = [...name];
      deleteName.splice(index, 1);
      setName(deleteName);
      deleNames()
      
  }


  const handleSubmit = (favName) => {
     setName([...name, favName])
     PostNames(favName)
     fetchNames()
     UpdatesNames()
     fetchNamesUser()
  }
  const styles = {
    h1Text: {
      fontWeight: "600",
     colors: "#086D86",
    },
    h3Text:{
      fontWeight: "400",
     colors: "#086D86",
    },
    pText:{
      fontWeight: "400",
     colors: "#086D86",
    },

  };


  // const H1= styled.h1`{
  //   font-weight: 600;
  //   colors: #086D86
  // }`;
  // const H3 = styled.h3`{
  //   font-weight: 400;
  //   colors: #086D86
  // }`;
  // const P = styled.p`{
  //   font-weight: 400;
  //   colors: #086D86
  // }

  // `;

  return (
    <div className="container">
      <h1 style={styles.h1Text}>Baby's name list</h1>
      <p style={styles.pText}>Add a new namess to the table.</p>
      {/*TODO - Add Table Component */}
      < Table NameData ={name} removeName={handleRemove}/>

      <br />

      <h3 style={styles.h3Text}>Add new name</h3>
      {/*TODO - Add Form Component */}
      < Form onSubmit={handleSubmit}/>
      
    </div>
  )
}

export default NameContainer
