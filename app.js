"use strict"
var fs = require('fs');
var config = require('./helper/config');


function csvReader(file){	
	if(fs.existsSync(file)) {
		var content = fs.readFileSync(file, 'utf8');    	
    	content = content.trim().split(",");
    	content = formattingArray(content);
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


setConfig("test.csv","csv","json");

csvReader(config.getFileName());