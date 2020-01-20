const initialDate = new Date().setDate(new Date().getDate() - 91)
const initialSettings = {
  accountCreation: initialDate,
  currentBalance: 0,
  fullList: [],
  filteredList: [],
  filterDate: {
    start: initialDate,
    end: new Date()
  }
}

const getTotalBalance = transactionList => {
  return parseFloat(transactionList.map(t => {
    return t.type === 'debit'
      ? -1 * parseFloat(t.value)
      : parseFloat(t.value)
  }).reduce((acc, cur) => acc + cur, 0))
    .toFixed(2).replace('.', ',')
}

const filterByDate = (list, startDate, endDate) => {
  return [ ...list ].filter(t =>
    new Date(t.date).getTime() >= new Date(startDate).getTime() &&
    new Date(t.date).getTime() <= new Date(endDate).getTime()
  )
}

const transactionsReducer = (state = initialSettings, action) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      const newList = [
        ...state.fullList,
        { ...action.transaction, id: state.fullList.length + 1 }
      ].sort((a, b) => new Date(b.date) - new Date(a.date))
      const newListFiltered = filterByDate(newList, state.filterDate.start, state.filterDate.end)
      return {
        ...state,
        fullList: newList,
        filteredList: newListFiltered,
        currentBalance: getTotalBalance(newListFiltered)
      }
    case 'APPLY_FILTER':
      const startDate = (action.start ? new Date(action.start) : new Date(state.accountCreation))
        .setHours(0)
      const endDate = (action.end ? new Date(action.end) : new Date())
        .setHours(23,59,59)
      const newFilteredList = filterByDate(state.fullList, startDate, endDate)

      return {
        ...state,
        filterDate: { start: startDate, end: endDate },
        filteredList: newFilteredList,
        currentBalance: getTotalBalance(newFilteredList)
      }
    default:
      const sortedFullListCopy = [ ...state.fullList ]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
      return {
        ...state,
        fullList: sortedFullListCopy,
        filteredList: sortedFullListCopy,
        currentBalance: getTotalBalance(sortedFullListCopy)
      }
  }
}
export default transactionsReducer
