const sub = require("date-fns/sub");
const format = require("date-fns/format");
const getYear = require("date-fns/getYear");
const lastDayOfYear = require("date-fns/lastDayOfYear");
const startOfMonth = require("date-fns/startOfMonth");
const endOfMonth = require("date-fns/endOfMonth");

const esLocale = require("date-fns/locale/es");

const makeFilter = (date) => {
  let filters = [];

  //Ultimos 7 dias
  filters.push(lastDays(7, "Últimos 7 días", date));

  //Ultimos 28 dias
  filters.push(lastDays(28, "Últimos 28 días", date));

  //Ultimos 90 dias
  filters.push(lastDays(90, "Últimos 90 días", date));

  //Ultimos 365 dias
  filters.push(lastDays(365, "Últimos 365 días", date));

  //Ultimos 3 años
  const numYears = 3;
  for (let index = 1; index < numYears + 1; index++) {
    filters.push(lastYears(date, index));
  }

  //Ultimos 3 mese
  lastMonths(date, 3, filters);

  return filters;
};

//Methodes

const lastDays = (numDays, label, date) => {
  const array = {
    label,
    startAt: format(sub(date, { days: numDays }), "yyyy/MM/dd"),
    endAt: format(date, "yyyy/MM/dd"),
  };

  return array;
};

const lastYears = (date, subtracYear) => {
  const lastYear = sub(date, { years: subtracYear });

  const array = {
    label: getYear(lastYear).toString(),
    startAt: format(lastYear, "yyyy/MM/dd"),
    endAt: format(lastDayOfYear(lastYear), "yyyy/MM/dd"),
  };

  return array;
};

const lastMonths = (date, numMonths, array) => {
  for (let index = 1; index <= numMonths; index++) {
    const monthPrev = sub(date, { months: index });
    array.push({
      label: format(monthPrev, "MMMM", { locale: esLocale }),
      startAt: format(startOfMonth(monthPrev), "yyyy/MM/dd"),
      endAt: format(endOfMonth(monthPrev), "yyyy/MM/dd"),
    });
  }
};

module.exports = { makeFilter };
