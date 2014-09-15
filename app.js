"use strict"
var fs = require('fs');


function csvReader(file){
	if(fs.existsSync(file)) {
		var content = fs.readFileSync(file, 'utf8');    	
    	console.log("Done"+ content);
	}else{
		throw "File is missing.";
	}
}

csvReader("test.txt");