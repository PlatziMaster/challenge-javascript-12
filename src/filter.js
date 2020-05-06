import { lastDayOfMonth } from "date-fns";

const makeFilter = (date) => {
  const entryDate = date.getTime();
  const DAY = 1000*60*60*24
  const last7daysRange = entryDate-(DAY*7);
  const last28daysRange = entryDate-(DAY*28);
  const last90daysRange = entryDate-(DAY*90);
  const last365daysRange = entryDate-(DAY*365);
  const last3yearsRanges = [last365daysRange,last365daysRange-(DAY*365),last365daysRange-(DAY*365*2)];

  
  console.log(`the current time is : ${entryDate}\nAnd the last week was: ${last7daysRange}`);
  
  const threater = (range) =>{
    const d = new Date(0);
    const milisecondsTime = d.setUTCMilliseconds(range);
    return new Date(milisecondsTime)
  }

  const last7days = {
    label: 'Últimos 7 días',
    startAt: threater(last7daysRange).toLocaleDateString('en-ZA'),
    endAt: date.toLocaleDateString('en-ZA')
  };

  const last28days = {
    label: 'Últimos 28 días',
    startAt: threater(last28daysRange).toLocaleDateString('en-ZA'),
    endAt: date.toLocaleDateString('en-ZA')
  }
  
  const last90days = {
    label: 'Últimos 28 días',
    startAt: threater(last90daysRange).toLocaleDateString('en-ZA'),
    endAt: date.toLocaleDateString('en-ZA')
  }

  const last365days = {
    label: 'Últimos 365 días',
    startAt: threater(last365daysRange).toLocaleDateString('en-ZA'),
    endAt: date.toLocaleDateString('en-ZA')
  }

  const last3years = [
    {
      label: threater(last3yearsRanges[0]).getFullYear().toString(),
      startAt: threater(last3yearsRanges[0]).toLocaleDateString('en-ZA'),
      endAt: threater(last3yearsRanges[0]+(DAY*364)).toLocaleDateString('en-ZA')
    },
    {
      label: threater(last3yearsRanges[1]).getFullYear().toString(),
      startAt: threater(last3yearsRanges[1]).toLocaleDateString('en-ZA'),
      endAt: threater(last3yearsRanges[1]+(DAY*364)).toLocaleDateString('en-ZA')
    },
    {
      label: threater(last3yearsRanges[2]).getFullYear().toString(),
      startAt: threater(last3yearsRanges[2]).toLocaleDateString('en-ZA'),
      endAt: threater(last3yearsRanges[2]+(DAY*364)).toLocaleDateString('en-ZA')
    },
  ]

  const lastMonth = date.getMonth() - 1;
  console.log(lastMonth);
   

  const lastquarter = [
    {
      label: date.toLocaleDateString('default', { month: 'long'}),
      startAt: threater(last3yearsRanges[0]).toLocaleDateString('en-ZA'),
      endAt: threater(last3yearsRanges[0]+(DAY*364)).toLocaleDateString('en-ZA')
    },
    {
      label: threater(last3yearsRanges[1]).getFullYear().toString(),
      startAt: threater(last3yearsRanges[1]).toLocaleDateString('en-ZA'),
      endAt: threater(last3yearsRanges[1]+(DAY*364)).toLocaleDateString('en-ZA')
    },
    {
      label: threater(last3yearsRanges[2]).getFullYear().toString(),
      startAt: threater(last3yearsRanges[2]).toLocaleDateString('en-ZA'),
      endAt: threater(last3yearsRanges[2]+(DAY*364)).toLocaleDateString('en-ZA')
    },
  ]
  let filters = [last7days, last28days, last90days, last365days, last3years, lastquarter
    // ,quater 
  ];

  console.log(filters);
  // return filters;
}

makeFilter(new Date(2020,0,1))

// module.exports = { makeFilter };