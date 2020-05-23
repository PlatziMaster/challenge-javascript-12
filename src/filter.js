const format = require("date-fns/format");
const sub = require("date-fns/sub");
const startOfYear = require("date-fns/startOfYear");
const endOfYear = require("date-fns/endOfYear");
const esLocale = require("date-fns/locale/es");
const formatDay = "yyyy/MM/dd";
const startOfMonth = require("date-fns/startOfMonth");
const endOfMonth = require("date-fns/endOfMonth");

const getFilterDays = (date, days) => {
  return createFilter(`Últimos ${days} días`, sub(date, { days }), date);
};

const getFilterMonths = (date, month) => {
  const monthPrev = sub(date, { months: month });
  return createFilter(
    format(monthPrev, "MMMM", { locale: esLocale }),
    startOfMonth(monthPrev),
    endOfMonth(monthPrev)
  );
};

const getFilterYears = (date, year) => {
  const yearPrev = sub(date, { years: year });
  return createFilter(
    format(yearPrev, "yyyy", { locale: esLocale }),
    startOfYear(yearPrev),
    endOfYear(yearPrev)
  );
};

const createFilter = (label, startAt, endAt) => {
  return {
    label,
    startAt: format(startAt, formatDay),
    endAt: format(endAt, formatDay),
  };
};

const makeFilter = (date) => {
  const lastDays = [7, 28, 90, 365];
  const lastMoths = [1, 2, 3];
  const lastYears = [1, 2, 3];

  let filters = [
    ...lastDays.map((day) => getFilterDays(date, day)),
    ...lastYears.map((year) => getFilterYears(date, year)),
    ...lastMoths.map((month) => getFilterMonths(date, month)),
  ];

  return filters;
};

console.log(makeFilter(new Date(2020, 0, 1)));

module.exports = { makeFilter };