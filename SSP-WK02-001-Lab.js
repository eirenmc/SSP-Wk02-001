var fs = require("fs");
var c = 0;

fs.readdir("./", function(err, files) {
	
	for(var i in files){
		console.log("File:" + files[i]);
	
		if(files[i] != "SSP-WK02-001-Lab.js"){    
			fs.readFile(files[i], {encoding: "utf8", flag: "r"}, function(error, data){
				if(error) { 
					throw error;        
				}
				
				console.log("Contents of " + files[i] + "\n\n" + data); 
				c++;
			});
		}
	}
});	

	