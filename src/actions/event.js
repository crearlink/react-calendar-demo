export const createEvent = date => ({
  type: 'CREATE_EVENT',
  payload: { date }
})


export const closeEvent = () => ({
  type: 'CLOSE_EVENT'
})


export const insertEvent = payload => ({
  type: 'INSERT_EVENT',
  payload
})
