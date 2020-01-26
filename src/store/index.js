// https://redux-docs.netlify.com/recipes/configuring-your-store/
import { combineReducers } from 'redux'
import transactions from './transactions'

export default combineReducers({
  transactions
})
