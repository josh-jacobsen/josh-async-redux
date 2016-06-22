import React from 'react'

export default (props) => {
  console.log("detail pane", props.mountain);
  return (
    <div>
      <p>Detail Pane</p>
      {props.mountain.map ((mountain) => {
        return(
          <div key={mountain.id}>
            {mountain.name}
          </div>
          )
      })}
    </div>
  )
}
