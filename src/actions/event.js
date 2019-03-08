export const createEvent = date => ({
  type: 'CREATE_EVENT',
  payload: { date }
})


export const closeEvent = () => ({
  type: 'CLOSE_EVENT'
})


export const deleteEvent = payload => ({
  type: 'DELETE_EVENT',
  payload
})


export const editEvent = payload => ({
  type: 'EDIT_EVENT',
  payload
})


export const saveEvent = payload => ({
  type: 'SAVE_EVENT',
  payload
})
