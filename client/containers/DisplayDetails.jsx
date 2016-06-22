import { connect } from 'react-redux'

import DetailPane from '../components/DetailPane'

const mapStateToProps = (state) => {
  const mountainDetails = state.mountains.filter( (mountain) => {
    if (state.selectedThing === mountain.id) {
      console.log(mountain);
      return mountain
    }
  })
  return {
    mountain: mountainDetails
  }

}






const DisplayDetails = connect(
  mapStateToProps
)(DetailPane)

export default DisplayDetails
