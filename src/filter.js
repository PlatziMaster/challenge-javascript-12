const { subDays } = require('date-fns')

const makeFilter = (date) => {

  let sdate = date.getFullYear() + "/" + ("0"+(date.getMonth()+1)).slice(-2) + "/" + ("0" + date.getDate()).slice(-2);

  let dia7 = subDays( date, 7);
  let sdia7 = dia7.getFullYear() + "/" + ("0"+(dia7.getMonth()+1)).slice(-2) + "/" + ("0" + dia7.getDate()).slice(-2);

  let d28 = subDays( date, 28);
  let sd28 = d28.getFullYear() + "/" + ("0"+(d28.getMonth()+1)).slice(-2) + "/" + ("0" + d28.getDate()).slice(-2);

  let d90 = subDays( date, 90);
  let sd90 = d90.getFullYear() + "/" + ("0"+(d90.getMonth()+1)).slice(-2) + "/" + ("0" + d90.getDate()).slice(-2);

  let d365 = subDays( date, 365);
  let sd365 = d365.getFullYear() + "/" + ("0"+(d365.getMonth()+1)).slice(-2) + "/" + ("0" + d365.getDate()).slice(-2);

  let sy1 = subDays( date, 365);
  let ssy1 = sy1.getFullYear() + "/" + ("0"+(sy1.getMonth()+1)).slice(-2) + "/" + ("0" + sy1.getDate()).slice(-2);

  let ey1 = subDays( date, 1);
  let sey1 = ey1.getFullYear() + "/" + ("0"+(ey1.getMonth()+1)).slice(-2) + "/" + ("0" + ey1.getDate()).slice(-2);

  let sy2 = subDays( date, 730);
  let ssy2 = sy2.getFullYear() + "/" + ("0"+(sy2.getMonth()+1)).slice(-2) + "/" + ("0" + sy2.getDate()).slice(-2);

  let ey2 = subDays( date, 366);
  let sey2 = ey2.getFullYear() + "/" + ("0"+(ey2.getMonth()+1)).slice(-2) + "/" + ("0" + ey2.getDate()).slice(-2);

  let sy3 = subDays( date, 1095);
  let ssy3 = sy3.getFullYear() + "/" + ("0"+(sy3.getMonth()+1)).slice(-2) + "/" + ("0" + sy3.getDate()).slice(-2);

  let ey3 = subDays( date, 731);
  let sey3 = ey3.getFullYear() + "/" + ("0"+(ey3.getMonth()+1)).slice(-2) + "/" + ("0" + ey3.getDate()).slice(-2);

  let sm1 = subDays( date, 31);
  let ssm1 = sm1.getFullYear() + "/" + ("0"+(sm1.getMonth()+1)).slice(-2) + "/" + ("0" + sm1.getDate()).slice(-2);

  let em1 = subDays( date, 1);
  let sem1 = em1.getFullYear() + "/" + ("0"+(em1.getMonth()+1)).slice(-2) + "/" + ("0" + em1.getDate()).slice(-2);

  let sm2 = subDays( date, 61);
  let ssm2 = sm2.getFullYear() + "/" + ("0"+(sm2.getMonth()+1)).slice(-2) + "/" + ("0" + sm2.getDate()).slice(-2);

  let em2 = subDays( date, 32);
  let sem2 = em2.getFullYear() + "/" + ("0"+(em2.getMonth()+1)).slice(-2) + "/" + ("0" + em2.getDate()).slice(-2);

  let sm3 = subDays( date, 92);
  let ssm3 = sm3.getFullYear() + "/" + ("0"+(sm3.getMonth()+1)).slice(-2) + "/" + ("0" + sm3.getDate()).slice(-2);

  let em3 = subDays( date, 62);
  let sem3 = em3.getFullYear() + "/" + ("0"+(em3.getMonth()+1)).slice(-2) + "/" + ("0" + em3.getDate()).slice(-2);

  let filters = [
    {
      label: 'Últimos 7 días',
      startAt: sdia7,
      endAt: sdate
    },
    {
      label: 'Últimos 28 días',
      startAt: sd28,
      endAt: sdate
    },
    {
      label: 'Últimos 90 días',
      startAt: sd90,
      endAt: sdate
    },
    {
      label: 'Últimos 365 días',
      startAt: sd365,
      endAt: sdate
    },
    { label: '2019', startAt: ssy1, endAt: sey1 },
    { label: '2018', startAt: ssy2, endAt: sey2},
    { label: '2017', startAt: ssy3, endAt: sey3 },
    { label: 'diciembre', startAt: ssm1, endAt: sem1 },
    { label: 'noviembre', startAt: ssm2, endAt: sem2 },
    { label: 'octubre', startAt: ssm3, endAt: sem3 }
  ]

  return filters;
}

module.exports = { makeFilter };