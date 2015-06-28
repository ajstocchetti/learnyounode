var nums = process.argv.slice(2);

var sumz = function(ary) {
	var total = 0;
	for( var x=0; x<ary.length; x++) {
		total += Number(ary[x]);
	}
	return total;
}


console.log(sumz(nums));