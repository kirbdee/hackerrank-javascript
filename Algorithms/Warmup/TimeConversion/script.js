// tested on HackerRank - passed all test cases

function processData(input){

	var pmTime;
	var amTime;
	var answer;
	var pmHour;
	var isAM = input.indexOf('AM');
	var isPM = input.indexOf('PM');

	if (isAM > 0){
		amTime = getTime(input,isAM);
		
		// corner case #1
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
			// corner case #2
			pmHour = parseInt(pmTime[0]) + 12;
			pmTime[0] = pmHour; 
			answer = joinTime(pmTime);
		}
	}
	process.stdout.write(answer); // return
}

/*
*
*  Taking off the AM/PM 
*  splitting the string up into an array
*/

function getTime(input,index){
	var timeString = input.substring(0,index);
	var timeArray = timeString.split(':');
	
	return timeArray;
}

/*
*
*  Joining the array back into a string
*  
*/

function joinTime(newTimeArray){
	return newTimeArray.join(':');
}

