const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');

// spanish
const spanish = require('date-fns/locale/es');

// today
const today = new Date(2020, 0, 1);

// Last years
const lastYear = sub(today, {years:1});
const lastTwoYear = sub(today, {years:2});
const lastThreeYear = sub(today, {years:3});

// Last months
const lastMonth = sub(today, {months:1});
const lastTwoMonth = sub(today, {months:2});
const lastThreeMonth = sub(today, {months:3});

const makeFilter = (date) => {
	
	let filters = [
		// Filters per days
		{
			label: 'Últimos 7 días',
			startAt: format(sub(date, {days: 7}), 'yyyy/MM/dd'),
			endAt: format(date, 'yyyy/MM/dd')
		},
		{
			label: 'Últimos 28 días',
			startAt: format(sub(date, {days: 28}), 'yyyy/MM/dd'),
			endAt: format(date, 'yyyy/MM/dd')
		},
		{
			label: 'Últimos 90 días',
			startAt: format(sub(date, {days: 90}), 'yyyy/MM/dd'),
			endAt: format(date, 'yyyy/MM/dd')
		},
		{
			label: 'Últimos 365 días',
			startAt: format(sub(date, {days: 365}), 'yyyy/MM/dd'),
			endAt: format(date, 'yyyy/MM/dd')
		},

		// Filters per years
		{
			label: format(lastYear, 'yyyy'), 
			startAt: format(startOfYear(lastYear), 'yyyy/MM/dd'),
			endAt: format(endOfYear(lastYear), 'yyyy/MM/dd')
		},
		{
			label: format(lastTwoYear, 'yyyy'), 
			startAt: format(startOfYear(lastTwoYear), 'yyyy/MM/dd'),
			endAt: format(endOfYear(lastTwoYear), 'yyyy/MM/dd')
		},
		{
			label: format(lastThreeYear, 'yyyy'), 
			startAt: format(startOfYear(lastThreeYear), 'yyyy/MM/dd'),
			endAt: format(endOfYear(lastThreeYear), 'yyyy/MM/dd')
		},

		// Filters per months
		{
			label: format(lastMonth, 'MMMM', {locale: spanish}), 
			startAt: format(startOfMonth(lastMonth), 'yyyy/MM/dd'),
			endAt: format(endOfMonth(lastMonth), 'yyyy/MM/dd')
		},
		{
			label: format(lastTwoMonth, 'MMMM', {locale: spanish}), 
			startAt: format(startOfMonth(lastTwoMonth), 'yyyy/MM/dd'),
			endAt: format(endOfMonth(lastTwoMonth), 'yyyy/MM/dd')
		},
		{
			label: format(lastThreeMonth, 'MMMM', {locale: spanish}), 
			startAt: format(startOfMonth(lastThreeMonth), 'yyyy/MM/dd'),
			endAt: format(endOfMonth(lastThreeMonth), 'yyyy/MM/dd')
		},
		
	];

  return filters;
}

module.exports = { makeFilter };