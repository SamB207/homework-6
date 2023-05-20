import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.NameData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <button type="submit" onClick={() => props.removeName(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  {return (
      <div>
        <table>
      <TableHeader /> 
      <TableBody NameData = {props.NameData} removeName={props.removeName}/>
      </table>
    </div>
  )
  }
}

export default Table
