import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  console.log(props.params)
  return (
    <div>
      <p>Detail Pane</p>
      {props.mountains.filter((mountain) => ( mountain.id === Number(props.params.id))).map ((mountain) => {
        return(
          <div key={mountain.id}>
            {mountain.name}
            <div className="imgDiv">
              <img src={mountain.imgURL}/>
            </div>
            <div className="homeLink">
              <button><Link to="/">Home</Link></button>
            </div>
          </div>
          )
      })}
    </div>
  )
}
