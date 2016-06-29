var LineByLineReader = require('line-by-line'),
lr = new LineByLineReader('./Leistungsdaten.csv');

lr.on('line', function (line) {
if(line.match(/^Datum.*/)){
	
}else{
	var array = line.split(";");
	console.log(line);
	console.log(array[0]);
}
});