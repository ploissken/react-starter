const initialSettings = {
  message: 'redux is ready!',
  message2: 'redux is still ready!'
}

const sampleReducer = (state = initialSettings, action) => {
  switch(action.type) {
    default:
      return state
  }
}
export default sampleReducer
