'use strict'

const dateFormat = require('dateformat')
const moment = require('moment')

const labelDays = (days) => {
  return `Últimos ${days} días`
}

const labelYear = (year) => {
  return year
}

const dateLabel = (date) => {
  return `${date}`
}

const lastDateLabel = (date, days) => {
  return `${date - days}`
}

const dateSubstraction = (date, days) => {
  const daysSubstraction = 1000 * 60 * 60 * 24 * days;
  const substraction = date - daysSubstraction
  return dateFormat(new Date(substraction), "yyyy/mm/dd")
}

const dateAddition = (date, days) => {
  const month = moment(date).add(days, 'days')
  return dateFormat(new Date(month), "yyyy/mm/dd")
}

const lastDays = (filter, date, days) => {
  const label = labelDays(days)
  const startAt = dateSubstraction(date, days)
  const endAt = dateLabel(dateFormat(date, "yyyy/mm/dd"))
  return filter.concat({ label, startAt, endAt })
}

const lastYear = (filter, date, year, days, daysYear) => {
  const label = `${year}`
  const startAt = dateSubstraction(date, days)
  const endAt = dateAddition(new Date(startAt), daysYear)
  return filter.concat({ label, startAt, endAt })
}

const lastMonths = (filter, date, months, days, daysYear) => {
  const label = `${months}`
  const startAt = dateSubstraction(date, days)
  const endAt = dateAddition(new Date(startAt), daysYear)
  return filter.concat({ label, startAt, endAt })
}

const makeFilter = (date) => {
  let filters = [];
  const days = [7, 28, 90, 366, 31, 61, 92, 29, 30, 365, 364]
  const year = [2020, 2019, 2018, 2017]
  const months = ['diciembre', 'noviembre', 'octubre']
  filters = lastDays(filters, date, days[0])
  filters = lastDays(filters, date, days[1])
  filters = lastDays(filters, date, days[2])
  filters = lastDays(filters, date, days[9])
  filters = lastYear(filters, date, year[1], days[9], days[10])
  filters = lastYear(filters, date, year[2], days[9] * 2, days[10])
  filters = lastYear(filters, date, year[3], days[9] * 3, days[10])
  filters = lastMonths(filters, date, months[0], days[4], days[8])
  filters = lastMonths(filters, date, months[1], days[5], days[7])
  filters = lastMonths(filters, date, months[2], days[6], days[8])

  return filters
}

module.exports = { makeFilter };