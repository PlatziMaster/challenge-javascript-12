const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');

const makeFilter = (date) => {
  const formatDate = format(date, 'yyyy/MM/dd');
  let filters = [
    {
      label: 'Últimos 7 días',
      startAt: format(sub(date, {days: 7}), 'yyyy/MM/dd'),
      endAt: formatDate
    },
    {
      label: 'Últimos 28 días',
      startAt: format(sub(date, { days: 28 }), 'yyyy/MM/dd'),
      endAt: formatDate
    },
    {
      label: 'Últimos 90 días',
      startAt: format(sub(date, { days: 90 }), 'yyyy/MM/dd'),
      endAt: formatDate
    },
    {
      label: 'Últimos 365 días',
      startAt: format(sub(date, { days: 365 }), 'yyyy/MM/dd'),
      endAt: formatDate
    },
    {
      label: '2019',
      startAt: format(startOfYear(sub(date, { years: 1 })), 'yyyy/MM/dd'),
      endAt: format(endOfYear(sub(date, { years: 1 })), 'yyyy/MM/dd')
    },
    {
      label: '2018',
      startAt: format(startOfYear(sub(date, { years: 2 })), 'yyyy/MM/dd'),
      endAt: format(endOfYear(sub(date, { years: 2 })), 'yyyy/MM/dd')
    },
    {
      label: '2017',
      startAt: format(startOfYear(sub(date, { years: 3 })), 'yyyy/MM/dd'),
      endAt: format(endOfYear(sub(date, { years: 3 })), 'yyyy/MM/dd')
    },
    {
      label: 'diciembre',
      startAt: format(startOfMonth(sub(date, { months: 1 })), 'yyyy/MM/dd'),
      endAt: format(endOfMonth(sub(date, { months: 1 })), 'yyyy/MM/dd')
    },
    {
      label: 'noviembre',
      startAt: format(startOfMonth(sub(date, { months: 2 })), 'yyyy/MM/dd'),
      endAt: format(endOfMonth(sub(date, { months: 2 })), 'yyyy/MM/dd')
    },
    {
      label: 'octubre',
      startAt: format(startOfMonth(sub(date, { months: 3 })), 'yyyy/MM/dd'),
      endAt: format(endOfMonth(sub(date, { months: 3 })), 'yyyy/MM/dd')
    },
  ];
  return filters;
}

module.exports = { makeFilter };