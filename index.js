function superbowlWin(record){
	let oneRecord = record.find((r)=> r.result == "W");
    if(oneRecord){
        return oneRecord.year;
    }else{
        return oneRecord;
    }
}
