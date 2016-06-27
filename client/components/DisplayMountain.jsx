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
            <Link to={{ pathname: '/mountains', query: {id: mountain.id} }}>Show Details</Link>
            </div>
          )
        })}
    </div>
  )
}



// <button><a onClick={() => { props.showDetails(mountain.id)
//     hashHistory.push("display")}}>Show Details</a></button>
