"use strict"
var fs = require('fs');
var config = require('./helper/config');


function fileReader(file_name){	
	if(fs.existsSync(file)) {
		var content = fs.readFileSync(file, 'utf8');   
		content = csvToJSON(content);
    	return content;
	}else{
		throw "File is missing.";
	}
}

// function setConfig(file_name,type,export_type){
// 	config.setFileName(file_name);
// 	config.setFileType(type);
// 	config.setExportType(export_type);
// }

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
}

// exports.setConfig = setConfig;
//setConfig("test.csv","csv","json");
exports.fileReader = fileReader;
//csvReader(config.getFileName());