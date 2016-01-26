var fs = require("fs");
var c = 0;

fs.readdir("./", function(err, files) {
	
	for(var i in files){
		console.log("File:" + files[i]);
	
		if(files[i] != "SSP-WK02-001-Lab.js"){    
			fs.readFile(files[i], {encoding: "utf8", flag: "r"}, function(error, data){
				/*if(error) { 
					throw error;        
				}*/ 
				//For some reason the if statement is causing it to stop because something must be calling 
				//an error but when commented out it is fine and consoles out the file contents, for the 
				//moment I am commenting it out
				
				console.log("Contents of " + files[i] + data); 
				c++;

			});
		}
	}
});	

	