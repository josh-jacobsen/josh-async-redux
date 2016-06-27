import React from 'react'
import {connect} from 'react-redux'

import DisplayMountain from '../components/DisplayMountain'
import {showDetails} from '../actions'

const mapStateToProps = (state) => {
  return {
    mountains: state.mountains
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDetails: (id) => {
      dispatch(showDetails(id))
    }
  }
}



const DisplayPort = connect(
  mapStateToProps, mapDispatchToProps
)(DisplayMountain)

export default DisplayPort
