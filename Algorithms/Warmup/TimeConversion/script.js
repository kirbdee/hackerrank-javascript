function processData(input){

	var pmTime;
	var amTime;
	var answer;
	var pmHour;
	var isAM = input.indexOf('AM');
	var isPM = input.indexOf('PM');

	if (isAM > 0){
		amTime = getTime(input,isAM);
		if(amTime[0] == '12'){
			amTime[0] = '00';
			answer = joinTime(amTime);
		}else{
			answer = joinTime(amTime)
		}
	}else{
		pmTime = getTime(input,isPM);
		if(pmTime[0] == '12'){
			answer = joinTime(pmTime);
		}else{
			pmHour = parseInt(pmTime[0]) + 12;
			pmTime[0] = pmHour; 
			answer = joinTime(pmTime);
		}
	}
	process.stdout.write(answer);
}

function getTime(input,index){
	var timeString = input.substring(0,index);
	var timeArray = timeString.split(':');
	
	return timeArray;
}

function joinTime(newTimeArray){
	return newTimeArray.join(':');
}

console.log(processData('05:59:00AM'));
