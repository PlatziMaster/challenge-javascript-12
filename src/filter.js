const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfMonth = require('date-fns/startOfMonth')
const endOfMonth = require('date-fns/endOfMonth')
const startOfYear = require('date-fns/startOfYear')
const endOfYear = require('date-fns/endOfYear')

const EXPECTED_FORMAT = 'yyyy/MM/dd';

const range = (label, date, days) => {
  return {
    label: label,
    startAt: format(sub(date, { days: days }), EXPECTED_FORMAT),
    endAt: format(date, EXPECTED_FORMAT)
  }
}

const makeFilter = (date) => {
  const values = [7,28,90,365];
  const filters = [];

  const filtersByAmountDays = (i) =>{
    const filter = range(`Últimos ${i} días`, date, i);
    filters.push(filter);
  }

  values.forEach(filtersByAmountDays);

  for (let i = 1; i <= 3; i++) {
    const yearlyRange = sub(date, {years: i});
    const obj = {
      label: format(yearlyRange, 'yyyy'),
      startAt: format(startOfYear(yearlyRange), EXPECTED_FORMAT),
      endAt: format(endOfYear(yearlyRange), EXPECTED_FORMAT)
    }
    filters.push(obj);
  }

  for (let i = 1; i <= 3; i++) {
    const monthlyRange = sub(date, {months: i});
    const obj = {
      label: monthlyRange.toLocaleString('es-CO',{month:"long"}),
      startAt: format(startOfMonth(monthlyRange), EXPECTED_FORMAT),
      endAt: format(endOfMonth(monthlyRange), EXPECTED_FORMAT)
    }
    filters.push(obj);
  }
  console.log(filters);
  console.log(sub);
  
  return filters;
}

module.exports = { makeFilter };