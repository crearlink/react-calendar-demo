export const getNext35Days = date => {
  const dates = []

  for (let i = 0; i < 35; i++) {
    const datePointer = new Date(date)
    datePointer.setDate(datePointer.getDate() + i)
    dates.push(datePointer)
  }

  return dates
}


export const getFirstSunday = date => {
  const datePointer = new Date(date)
  datePointer.setDate(1)
  datePointer.setDate(datePointer.getDate() - datePointer.getDay())

  return datePointer
}


export const getMonthDays = date => {
  const monday = getFirstSunday(date)

  return getNext35Days(monday)
}


export const getFormattedDate = date => date.toISOString().substr(0, 10)
