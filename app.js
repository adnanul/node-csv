"use strict"
var fs = require('fs');




var myfile = "myfile.txt";

if(fs.existsSync(myfile)) {
    var content = fs.readFileSync(myfile, 'utf8');
    fs.writeFileSync(myfile, content.toUpperCase());
    console.log("Done");
} else {
    console.log("File does not exist - " + myfile);
}