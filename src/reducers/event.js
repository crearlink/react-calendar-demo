const initialState = {
  isEditingEvent: false,
  editingEvent: null
}


export default function (state = initialState, action) {
  switch (action.type) {

    case 'CREATE_EVENT':
      return {
        ...state,
        editingEvent: {
          date: action.payload.date
        },
        isEditingEvent: true
      }

    case 'CLOSE_EVENT':
      return {
        ...state,
        isEditingEvent: false
      }

    default:
      return {
        ...state
      }

  }
}
