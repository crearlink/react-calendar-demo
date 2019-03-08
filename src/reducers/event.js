const initialState = {
  editingEvent: false
}


export default function (state = initialState, action) {
  switch (action.type) {

    case 'EDIT_EVENT':
      return {
        ...state,
        editingEvent: true
      }

    default:
      return {
        ...state
      }

  }
}
