function findWinner(oneRecord){
    if(oneRecord.result == "W"){
        return oneRecord;
    }else{
        return undefined;
    }
}

function superbowlWin(record){
    let oneRecord = record.find(findWinner);
    if(oneRecord){
        // let oneRecord = { year: "2015", result: "W"},
        //oneRecord.year -> to get the year

        return oneRecord.year;
    }else{
        return oneRecord;
    }
}
