const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(allRecord){
    for ( const oneRecord of allRecord){
        if (oneRecord.result === "W"){
            return oneRecord.year
        }
    }
}
superbowlWin(record)
    