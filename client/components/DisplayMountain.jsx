import React from 'react'

export default(props) => {
  return (
    <div className="display-mountain">
      <ul>
        {props.mountains.map( (mountain) => {
          return (
            <li key={mountain.id}>
              {mountain.name}{' '}
{' '}
              <a href="#" onClick={() => props.showDetails(mountain.id)}>Show Details</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
