import React from 'react'
import { hashHistory } from 'react-router'

export default(props) => {
  return (
    <div className="display-mountain">
        {props.mountains.map( (mountain) => {
          return (
            <div key={mountain.id}>
              {mountain.name}{' '}
              {' '}
              <a onClick={() => { props.showDetails(mountain.id)
              hashHistory.push("display")}}>Show Details</a>

            </div>
          )
        })}
    </div>
  )
}
