import fns from 'date-fns'
const { format , sub, startOfYear, endOfYear, startOfMonth, endOfMonth, locale} = fns;

const makeFilter = (date) => {
  const expetedFormat =  'yyyy/MM/dd'
  const last7daysRange = format(sub(date,{days: 7}), expetedFormat);
  const last28daysRange =  format(sub(date,{days: 28}), expetedFormat);
  const last90daysRange =  format(sub(date,{days: 90}), expetedFormat);
  const last365daysRange =  format(sub(date,{days: 365}), expetedFormat);
  
  
  
  const last7days = {
    label: 'Últimos 7 días',
    startAt: last7daysRange,
    endAt: format(date,expetedFormat)
  };
  
  const last28days = {
    label: 'Últimos 28 días',
    startAt: last28daysRange,
    endAt: format(date,expetedFormat)
  }
  
  const last90days = {
    label: 'Últimos 90 días',
    startAt: last90daysRange,
    endAt: format(date,expetedFormat)
  }
  
  const last365days = {
    label: 'Últimos 365 días',
    startAt: last365daysRange,
    endAt: format(date,expetedFormat)
  }
  
  const datesGenerator = (date) =>{
    const arr = [];
    for (let i=1 ; i <= 3; i++){
      const a = sub(date,{years: i});
      const y = {
        label: format(a,'yyyy'),
        startAt: format(startOfYear(a), expetedFormat),
        endAt: format (endOfYear(new Date(a)), expetedFormat)
      }
      const b = sub(date,{months: i});
      const z = {
        label: format(b,'MMMM'),
        startAt: format (startOfYear(b), expetedFormat),
        endAt: format (endOfYear(new Date(b)), expetedFormat)
      }
      
      arr.push(z)
      console.log(`fecha añadida ${z.label} ${z.startAt} ${z.endAt}`);      
    }
    
    
    return arr;
  }
  
  const arr = datesGenerator(date);
  
  const last3years = arr;

          let filters = [last7days, last28days, last90days, last365days, last3years,
            //    lastquarter
            // ,quater 
          ];
          
          console.log(filters);
          console.log(format(date,'MMMM', locale));
          // return filters;
}
        
        makeFilter(new Date(2020,0,1))
        
        // module.exports = { makeFilter };