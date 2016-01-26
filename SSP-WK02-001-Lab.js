var fs = require("fs");

fs.readdir("./Files/", function(err, files) {
	
	var readFileContents = function(aFileName) {
      fs.readFile(aFileName,{encoding:"utf8"}, function(error, data) {
		  
        fileContent.push({name: aFileName, contents: data});
		for(var i in files){
			if(files[i] != "SSP-WK02-001-Lab.js")
		}
