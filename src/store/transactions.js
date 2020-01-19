const initialSettings = {
  fullList: [
    {
      id: 1,
      date: new Date(),
      description: 'Freela Maroto',
      value: 300.00,
      type: 'credit'
    },
    {
      id: 2,
      date: new Date('2020-01-09'),
      description: 'Freela do Capiroto',
      value: 700.00,
      type: 'credit'
    }
  ],
  filteredList: [],
  filterDate: {
    start: undefined,
    end: undefined
  }
}

const transactionsReducer = (state = initialSettings, action) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      const newTransaction = {
        ...action.transaction,
        id: state.fullList.length
      }
      return {
        ...state,
        fullList: [ ...state.fullList, newTransaction ]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      }
    default:
      return {
        ...state,
        fullList: [ ...state.fullList ]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      }
  }
}
export default transactionsReducer
