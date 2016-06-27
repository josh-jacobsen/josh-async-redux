import React from 'react'
import { Link } from 'react-router'

export default(props) => {
  return (
    <div className="display-mountain">
        {props.mountains.map( (mountain) => {
          return (
            <div key={mountain.id}>
              {mountain.name}{' '}
{' '}
              <a href="#" onClick={() => props.showDetails(mountain.id)}>Show Details</a>
            </div>
          )
        })}
    </div>
  )
}
