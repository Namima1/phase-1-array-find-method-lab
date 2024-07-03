//superbowlWin(record)
//returns a year the Denver Broncos won the superbowl
//returns undefined if the record has no win objects

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(record) {
   
    const winRecord = record.find(item => item.result === 'W');
    
   
    return winRecord ? winRecord.year : undefined;
}

console.log(superbowlWin(record));