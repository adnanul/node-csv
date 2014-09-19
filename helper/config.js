/* GETTER and SETTER for configuration. */
var fs = require('fs');

function checkSupportType(content, type){
	for (var index = 0; index < content.length; ++index) {
		 var currentType = content[index];

		 if(currentType.Name == type){
		   return true;
		   break;
		 }
	}
	return false;
}

var file_name,file_type, export_type, typeContent;

exports.setFileName = function(name) {
	file_name = name;
};
exports.setFileType = function(type) {	
	typeContent = JSON.parse(fs.readFileSync("./node_modules/node-csv-data/helper/support.json"));
	var avail_file_type = typeContent.file_type;
	if(checkSupportType(avail_file_type, type)){
		file_type = type;
		return "file type available"; 
	}else{
		return "file type is not supported by current version.";
	}
};
exports.setExportType = function(export_type) {
	typeContent = JSON.parse(fs.readFileSync("./node_modules/node-csv-data/helper/support.json"));
	var avail_export_type = typeContent.export_type;
	if(checkSupportType(avail_export_type, export_type)){
		export_type = export_type;
		return "file type available"; 
	}else{
		return "file type is not supported by current version.";
	}	
};

exports.getFileName = function(){
   return file_name;
};

exports.getFileType = function(){
   return file_type;
};

exports.getExportType = function(){
   return export_type;
};
