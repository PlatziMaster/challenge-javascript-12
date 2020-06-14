const format = require("date-fns/format");
const sub = require("date-fns/sub");
const startOfYear = require("date-fns/startOfYear");
const endOfYear = require("date-fns/endOfYear");
const startOfMonth = require("date-fns/startOfMonth");
const endOfMonth = require("date-fns/endOfMonth");

const esLocale = require("date-fns/locale/es");

const makeFilter = (date) => {
   const todayFormat = format(date, "yyyy/MM/dd");
   let filters = [
      {
         label: "Últimos 7 días",
         startAt: format(sub(date, { days: 7 }), "yyyy/MM/dd"),
         endAt: todayFormat,
      },
      {
         label: "Últimos 28 días",
         startAt: format(sub(date, { days: 28 }), "yyyy/MM/dd"),
         endAt: todayFormat,
      },
      {
         label: "Últimos 90 días",
         startAt: format(sub(date, { days: 90 }), "yyyy/MM/dd"),
         endAt: todayFormat,
      },
      {
         label: "Últimos 365 días",
         startAt: format(sub(date, { days: 365 }), "yyyy/MM/dd"),
         endAt: todayFormat,
      },
   ];

   for (let index = 1; index <= 3; index++) {
      const yearPrev = sub(date, { years: index });
      filters.push({
         label: format(yearPrev, "yyyy"),
         startAt: format(startOfYear(yearPrev), "yyyy/MM/dd"),
         endAt: format(endOfYear(yearPrev), "yyyy/MM/dd"),
      });
   }

   for (let index = 1; index <= 3; index++) {
      const monthPrev = sub(date, { months: index });
      filters.push({
         label: format(monthPrev, "MMMM", { locale: esLocale }),
         startAt: format(startOfMonth(monthPrev), "yyyy/MM/dd"),
         endAt: format(endOfMonth(monthPrev), "yyyy/MM/dd"),
      });
   }

   return filters;
};

module.exports = { makeFilter };
