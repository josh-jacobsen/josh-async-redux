import React from 'react'
import { Link } from 'react-router'

import DisplayPort from '../containers/DisplayPort'
import DisplayDetails from '../containers/DisplayDetails'


export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <h2 className="title">Welcome</h2>
        </div>
        <Link to="mountains">Show mountains</Link>
        <div>
          {this.props.children}
        </div>

      </div>
    )
  }
})
