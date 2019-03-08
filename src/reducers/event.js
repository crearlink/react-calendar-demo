import { getFormattedDate } from '../helpers'


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
          title: ''
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


    case 'INSERT_EVENT':
      const date = getFormattedDate(state.editingEvent.date)

      const dateEvents = date in state.days ? state.days[date] : []

      dateEvents.push({ title: action.payload.title })

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
