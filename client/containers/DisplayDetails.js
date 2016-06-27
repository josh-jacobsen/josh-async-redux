import { connect } from 'react-redux'

import DetailPane from '../components/DetailPane'

const mapStateToProps = (state) => {
  return {
    mountains: state.mountains 
  }

}






const DisplayDetails = connect(
  mapStateToProps
)(DetailPane)

export default DisplayDetails
