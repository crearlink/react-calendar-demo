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


    case 'INSERT_EVENT':
      const date = getFormattedDate(state.editingEvent.date)

      const dateEvents = date in state.days ? state.days[date] : []

      dateEvents.push({ title: action.payload.title })

      const days = { ...state.days }
      days[date] = dateEvents

      return {
        ...state,
        isEditingEvent: false,
        days
      }

    default:
      return {
        ...state
      }

  }
}
