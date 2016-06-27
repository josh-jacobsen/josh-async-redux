import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  console.log("detail pane", props.mountain);
  return (
    <div>
      <p>Detail Pane</p>
      {props.mountain.map ((mountain) => {
        return(
          <div key={mountain.id}>
            {mountain.name}
            <div className="imgDiv">
              <img src={mountain.imgURL}/>
            </div>
            <div className="homeLink">
              <Link to="/">Home</Link>
            </div>
          </div>
          )
      })}
    </div>
  )
}
