// const moment = require('moment');
// console.log(moment(today).format('YYYY/MM/DD'));

const format = require('date-fns/format');
const sub = require('date-fns/sub');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const esLocale = require('date-fns/locale/es');

const today = new Date();
const todayFormat = format(today, 'yyyy/MM/dd');


let filters = [
  {
    label: 'Últimos 7 días',
    startAt: format(sub(today, {days: 7}), 'yyyy/MM/dd'),
    endAt: todayFormat
  },
  {
    label: 'Últimos 30 días',
    startAt: format(sub(today, {days: 30}), 'yyyy/MM/dd'),
    endAt: todayFormat
  },
  {
    label: 'Últimos 90 días',
    startAt: format(sub(today, {days: 90}), 'yyyy/MM/dd'),
    endAt: todayFormat
  },
  {
    label: 'Últimos 365 días',
    startAt: format(sub(today, {days: 365}), 'yyyy/MM/dd'),
    endAt: todayFormat
  },
  {
    label: '2020',
    startAt: format(startOfYear(today), 'yyyy/MM/dd'),
    endAt: todayFormat
  },
  {
    label: '2019',
    startAt: format(startOfYear(sub(today, {days: 365})), 'yyyy/MM/dd'),
    endAt: format(endOfYear(sub(today, {days: 365})), 'yyyy/MM/dd')
  },
];

for (let index = 1; index <= 3; index++) {
  console.log(index);
  const prevMonth = sub(today, {months: index});
  filters.push({
    label: format(prevMonth, 'MMMM', {locale: esLocale}),
    startAt: format(startOfMonth(prevMonth), 'yyyy/MM/dd'),
    endAt: format(endOfMonth(prevMonth), 'yyyy/MM/dd'),
  });
}

console.log(filters);