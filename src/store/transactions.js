const initialSettings = {
  list: [
    {
      id: 1,
      date: new Date(),
      description: 'Pag*Mecanicatonimek',
      value: 214.50,
      operation: 'credit'
    },
    {
      id: 2,
      date: '03 NOV',
      description: 'Pag*Ahupa',
      value: 213.50,
      operation: 'credit'
    },
    {
      id: 3,
      date: new Date('2019-01-09'),
      description: 'Pag*Lebodele',
      value: 212.50,
      operation: 'credit'
    }
  ]
}

const transactionsReducer = (state = initialSettings, action) => {
  switch(action.type) {
    default:
      return state
  }
}
export default transactionsReducer
