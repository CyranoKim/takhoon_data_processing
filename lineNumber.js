var fs = require('fs');
var readline = require('readline');

//var readable = fs.createReadStream('./th.txt');
var readable = fs.createReadStream('./data_total.txt');

var rl = readline.createInterface({
	input : readable
});

var cnt = 0;
var people = [];
var peopleCount = 0;
var groupCount=0;

rl.on('line', function(line){
	
	line = line.replace(/\s/g,""); // erase white space 
	
	if( (/^\s*$/.test(line) ) == false){ // if not empty line
		if(line.split('-').length != 1){ // if first line of people data
			people[peopleCount] = [];
			peopleCount++;
			groupCount = 0; // 사람이 바뀌어서 reset
		}else{
			people[(peopleCount-1)][groupCount] = line.split(',');	
//			console.log(people[(peopleCount-1)][groupCount].toString());
			groupCount++;			
		}
	}	
});

readable.on('end', function(){
	// people array print
	for(var peopleNum = 0; peopleNum < people.length; peopleNum++){
		console.log("people # " + peopleNum);
	    for(var groupNum = 0; groupNum < people[peopleNum].length; groupNum++){  	
	    	console.log(people[peopleNum][groupNum].toString());
	    }
	}
	
});

//var arrLine = line.toString().split("\n");
 /*
 for(i in arrLine) {
     arrLine[i] = arrLine[i].replace(/\s/g,""); // space 제거
 }
 console.log(arrLine[0]);
 */

/*
for(i in arrLine) {
    console.log(arrLine[i]);
   // console.log('\n');    
}
*/
/*
var arrGroup = arrLine[2].split(':');    
if(arrGroup[0] == 'group1'){
	console.log( arrGroup[1] );
}

var arrNum = arrLine[2].split(',');
for(i =0; i<5; i++) {
    console.log( arrNum[i] );   
}
*/