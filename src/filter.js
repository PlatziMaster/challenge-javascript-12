const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfMonth = require('date-fns/startOfMonth')
const endOfMonth = require('date-fns/endOfMonth')
const startOfYear = require('date-fns/startOfYear')
const endOfYear = require('date-fns/endOfYear')

const EXPECTED_FORMAT = 'yyyy/MM/dd';

const makeFilter = (date) => {
  const filters = [];
  const days = [7,28,90,365];

  const objGen = (label,startAt,endAt)=>{
    return {
      label: label,
      startAt: startAt,
      endAt: endAt
    }
  }

  const filterObj = (label, date, subtract) => {
    const newFilter = objGen(
      label,
      format(sub(date, { days: subtract }), EXPECTED_FORMAT),
      format(date, EXPECTED_FORMAT)
    )
    return newFilter;
  }

  const filtersByAmountDays = (i) =>{
    const filter = filterObj(`Últimos ${i} días`, date, i);
    filters.push(filter);
  }

  days.forEach(filtersByAmountDays);

  for (let i = 1; i <= 3; i++) {
    const yearlyRange = sub(date, {years: i});
    const obj = objGen(
      format(yearlyRange, 'yyyy'),
      format(startOfYear(yearlyRange),EXPECTED_FORMAT),
      format(endOfYear(yearlyRange),EXPECTED_FORMAT)
    )
    filters.push(obj);
  }

  for (let i = 1; i <= 3; i++) {
    const monthlyRange = sub(date, {months: i});
    const obj = objGen(
      monthlyRange.toLocaleString('es-CO',{month:"long"}),
      format(startOfMonth(monthlyRange), EXPECTED_FORMAT),
      format(endOfMonth(monthlyRange), EXPECTED_FORMAT)
    )
    filters.push(obj);
  }
  
  return filters;
}

module.exports = { makeFilter };