"use strict"
var fs = require('fs');
var config = require('./helper/config');


function csvReader(file){	
	if(fs.existsSync(file)) {
		var content = fs.readFileSync(file, 'utf8');   
		content = csvToJSON(content);
    	//content = content.trim().split(",");
    	//content = formattingArray(content);
    	console.log(content);
	}else{
		throw "File is missing.";
	}
}

function formattingArray(content){
	var result = {};
	for (var i = 0; i < content.length; i++) {
		result[content[0]] = "Feroj";				
	};
	return result;
}

function setConfig(file_name,type,export_type){
	config.setFileName(file_name);
	config.setFileType(type);
	config.setExportType(export_type);
}

//for converting csv to json...
function csvToJSON(csvData){
	 var content = csvData.split(/\r\n|\n/);
     var result = [];
 
     var headers=content[0].split(",");
 
     for(var i=1;i<content.length;i++){
 
		 var obj = {};
		 var currentline=content[i].split(",");
	 
		 for(var j=0;j<headers.length;j++){
			  obj[headers[j]] = currentline[j];
		 }
 
	result.push(obj);
 
  }  
  return result;
  //return JSON.stringify(result);
}

setConfig("test.csv","csv","json");

csvReader(config.getFileName());