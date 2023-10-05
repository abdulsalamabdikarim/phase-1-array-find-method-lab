// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  //console.log(record[0].year)
function superbowlWin(record){
  const winRecord = record.find(record => record.result === 'W');
  return winRecord ? winRecord.year : undefined;
}

record.find(superbowlWin);



