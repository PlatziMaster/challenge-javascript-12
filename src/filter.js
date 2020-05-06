const makeFilter = (date) => {
  // let filters = [week, month, ninety, year, years,quater ];
  const currentTime = date.getTime();
  const lastWeek = currentTime-(1000*60*60*24*7);
  console.log(`the current time is : ${currentTime}\nAnd the last week was: ${lastWeek}`);
  
  const d = new Date(0);
  const startAt = d.setUTCMilliseconds(lastWeek)
  console.log(new Date(startAt));
  
  // return filters;
}

makeFilter(new Date(2020,0,1))

// module.exports = { makeFilter };