import assert from 'assert'

import { getNext35Days, getMonthDays, getFirstSunday } from './date'


describe('getNext35Days()', () => {

  const next35Days = getNext35Days(new Date('2019-03-08T00:00'))

  it('contains 35 elements', () => {
    assert.equal(next35Days.length, 35)
  })

  it('asserts 3 days after', () => {
    assert.equal(next35Days[3].getUTCDate(), 11)
  })

})



describe('getFirstSunday()', () => {

  it('returns first Sunday', () => {
    const pastMonday = getFirstSunday(new Date('2019-09-03T00:00'))
    assert.equal(pastMonday.getDay(), 0)
    assert.equal(pastMonday.getDate(), 1)
  })

  it('returns last Month\'s Sunday', () => {
    const pastMonday = getFirstSunday(new Date('2019-03-09T00:00'))
    assert.equal(pastMonday.getUTCDay(), 0)
    assert.equal(pastMonday.getUTCDate(), 24)
  })

})


describe('getMonthDays()', () => {

  const monthDays = getMonthDays(new Date('2019-03-18T00:00'))

  it('contains 35 elements', () => {
    assert.equal(monthDays.length, 35)
  })

  it('asserts first day is Sunday', () => {
    assert.equal(monthDays[0].getDay(), 0)
  })

  it('asserts 4th day is Wednesday', () => {
    assert.equal(monthDays[3].getDay(), 3)
  })

})
