import { connect } from 'react-redux'
import EventListScreen from '../screens/Events/EventListScreen'

const mapStateToProps = state => ({
  eventList: state.eventReducer
})

export default connect(mapStateToProps)(EventListScreen)
