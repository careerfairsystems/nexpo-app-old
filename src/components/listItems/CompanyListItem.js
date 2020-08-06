import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import CompanySelectableListItem from './CompanySelectableListItem'
import FavoriteButton from '../../containers/FavoriteButton'

const styles = {
  title: {
    flex: 1,
    fontSize: 16
  }
}

const { title } = styles
const CompanyListItem = ({ navigation, company }) => (
  <CompanySelectableListItem navigation={navigation} item={company}>
    <Text style={title}>{company.name}</Text>
    <FavoriteButton company={company} color="#000" />
  </CompanySelectableListItem>
)

CompanyListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default CompanyListItem
