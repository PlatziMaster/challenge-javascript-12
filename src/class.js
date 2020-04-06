const add = require('date-fns/add');
const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const differenceInDays = require('date-fns/differenceInDays');

const esLocale = require('date-fns/locale/es');

const today = new Date();

const rta = add(today, {days: 90, years: 2});

console.log(format(rta, 'yyyy/MM/dd'));
const diff = differenceInDays(rta, today);

console.log('diff', diff);

const todayFormat = format(today, 'yyyy/MM/dd');

let filters = [
  {
    label: 'Últimos 7 días',
    startAt: format(sub(today, {days: 7}), 'yyyy/MM/dd'),
    endAt: todayFormat
  },
  {
    label: 'Últimos 28 días',
    startAt: format(sub(today, {days: 28}), 'yyyy/MM/dd'),
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
    startAt: format(startOfYear(sub(today, {years: 1})), 'yyyy/MM/dd'),
    endAt: format(endOfYear(sub(today, {years: 1})), 'yyyy/MM/dd')
  }
];

const filtersMonths = [1,2,3].map((item) => {
  const monthPrev = sub(today, {months: item});
  return {
    label: format(monthPrev, 'MMMM', {locale: esLocale}),
    startAt: format(startOfMonth(monthPrev), 'yyyy/MM/dd'),
    endAt: format(endOfMonth(monthPrev), 'yyyy/MM/dd')
  };
});

filters = filters.concat(filtersMonths);

console.log(filtersMonths);

for (let index = 1; index <= 3; index++) {
  const monthPrev = sub(today, {months: index});
  filters.push({
    label: format(monthPrev, 'MMMM', {locale: esLocale}),
    startAt: format(startOfMonth(monthPrev), 'yyyy/MM/dd'),
    endAt: format(endOfMonth(monthPrev), 'yyyy/MM/dd')
  });
}



console.log(filters);
// const moment = require('moment');

// const rta2 = moment(today).add(2, 'days');

// console.log(moment(rta2).format('YYYY/MM/DD'));