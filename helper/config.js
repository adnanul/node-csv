/* GETTER and SETTER for configuration. */

var file_name,file_type, export_type;

exports.setFileName = function(name) {
	file_name = name;
};
exports.setFileType = function(type) {
	file_type = type;
};
exports.setExportType = function(export_type) {
	export_type = export_type;
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
