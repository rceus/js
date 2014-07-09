/*Asyn Version*/

var fs = require("fs");
console.log("Starting");
fs.readFile("./files/sample.rtf", function(error,data){
	console.log("Contents: "+data);
});
console.log("Carry on executing.")


/*Sync Version*/
/*
	var fs = require("fs");
	console.log("Starting");
	var content = fs.readFileSync("./files/sample.rtf");
	console.log("Contents: "+content);
	console.log("Carry on executing");

*/
