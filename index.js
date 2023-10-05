// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
 

function superbowlWin(array){
  const yearWin = array.find((record) => record.result === 'W');
  if(yearWin){
      return yearWin.year;
  }
  return undefined;
}
superbowlWin(record);

// alternative function definition and call::
/*function superbowlWin(record){
  const winRecord = record.find(record => record.result === 'W');
  return winRecord ? winRecord.year : undefined;
}

record.find(superbowlWin);*/




