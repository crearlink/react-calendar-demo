const initialState = {
  isEditingEvent: false,
  editingEvent: null,
  days: {}
}


export default function (state = initialState, action) {
  switch (action.type) {

    case 'CREATE_EVENT':
      return {
        ...state,
        editingEvent: {
          date: action.payload.date,
          title: '',
          key: null
        },
        isEditingEvent: true
      }

    case 'CLOSE_EVENT':
      return {
        ...state,
        isEditingEvent: false
      }


    case 'DELETE_EVENT':
      delete (state.days[action.payload.date][action.payload.key])

      return {
        ...state
      }


    case 'EDIT_EVENT':
      const event = state.days[action.payload.date][action.payload.key]

      return {
        ...state,
        editingEvent: {
          date: action.payload.date,
          title: event.title,
          key: action.payload.key
        },
        isEditingEvent: true
      }


    case 'SAVE_EVENT':
      const { date, key } = state.editingEvent
      const { title } = action.payload

      const dateEvents = date in state.days ? state.days[date] : []

      if (key === null) {
        dateEvents.push({ title })
      } else {
        state.days[date][key] = {
          title
        }
      }

      state.days[date] = dateEvents

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
