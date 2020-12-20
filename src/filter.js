const { format, sub, startOfYear, endOfYear, startOfMonth } = require('date-fns');
const { es } = require('date-fns/locale')

const makeFilter = (date) => {
  let filters = [
    {
      label: 'Últimos 7 días',
      startAt: format(sub(date, { days: 7 }), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    {
      label: 'Últimos 28 días',
      startAt: format(sub(date, { days: 28 }), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    {
      label: 'Últimos 90 días',
      startAt: format(sub(date, { days: 90 }), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    {
      label: 'Últimos 365 días',
      startAt: format(sub(date, { years: 1 }), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    {
      label: format( startOfYear( sub( date, { years: 1 } ) ), 'yyyy'),
      startAt: format( startOfYear( sub( date, { years: 1 } ) ), 'yyyy/MM/dd'),
      endAt: format( endOfYear( sub( date, { years: 1 } ) ), 'yyyy/MM/dd')
    },
    {
      label: format( startOfYear( sub( date, { years: 2 } ) ), 'yyyy'),
      startAt: format( startOfYear( sub( date, { years: 2 } ) ), 'yyyy/MM/dd'),
      endAt: format( endOfYear( sub( date, { years: 2 } ) ), 'yyyy/MM/dd')
    },
    {
      label: format( startOfYear( sub( date, { years: 3 } ) ), 'yyyy'),
      startAt: format( startOfYear( sub( date, { years: 3 } ) ), 'yyyy/MM/dd'),
      endAt: format( endOfYear( sub( date, { years: 3 } ) ), 'yyyy/MM/dd')
    },
    {
      label: format( endOfYear( sub( date, { years: 1 } ) ), 'MMMM', { locale: es }),
      startAt: format( startOfMonth( endOfYear( sub( date, { years: 1 } ) ) ), 'yyyy/MM/dd'),
      endAt: format( endOfYear( sub( date, { years: 1 } ) ), 'yyyy/MM/dd')
    },
    {
      label: format( sub( endOfYear( sub( date, { years: 1 } ) ), { months: 1 } ), 'MMMM', { locale: es }),
      startAt: format( sub( startOfMonth( endOfYear( sub( date, { years: 1 } ) ) ), { months: 1 } ), 'yyyy/MM/dd'),
      endAt: format( sub( endOfYear( sub( date, { years: 1 } ) ), { months: 1 } ), 'yyyy/MM/dd')
    },
    {
      label: format( sub( endOfYear( sub( date, { years: 1 } ) ), { months: 2 } ), 'MMMM', { locale: es }),
      startAt: format( sub( startOfMonth( endOfYear( sub( date, { years: 1 } ) ) ), { months: 2 } ), 'yyyy/MM/dd'),
      endAt: format( sub( endOfYear( sub( date, { years: 1 } ) ), { months: 2 } ), 'yyyy/MM/dd')
    }
  ];
  return filters;
}


console.log( makeFilter( new Date(2020,0,1) ) )

module.exports = { makeFilter };