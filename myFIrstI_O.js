var fs = require('fs');
console.log(--fs.readFileSync(process.argv[2]).toString().split('\n').length);


/*
var numLines = function(path) {
	var body = fs.readFileSync(path);
	var bodyStr = body.toString();
	var ary = bodyStr.split('\n');
	return ary.length-1;
}

console.log(numLines(process.argv[2]));
*/