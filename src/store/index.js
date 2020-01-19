// https://redux-docs.netlify.com/recipes/configuring-your-store/
import { combineReducers } from 'redux'
import sample from './sample'
import transactions from './transactions'

export default combineReducers({
  sample,
  transactions
})
