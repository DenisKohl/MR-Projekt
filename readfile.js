module.exports = {
	loadData: function(){
		
	var LineByLineReader = require('line-by-line');
	lr = new LineByLineReader('./Leistungsdaten.csv');
	objarray = [];
	dataline = function(datum,scheinleistung,wirkleistung,spannung,strom,stufung,otemperatur,umgebungstemp){
		this.datum = datum;
		this.scheinleistung = scheinleistung;
		this.wirkleistung = wirkleistung;
		this.spannung = spannung;
		this.strom = strom;
		this.stufung = stufung;
		this.otemperatur = otemperatur;
		this.umgebungstemp = umgebungstemp;
	}
	lr.on('error', function(err){
		console.log("Fehler: " + err );
	});
	lr.on('line', function (line) {
		if(line.match(/^Datum.*/)){
		
		}else{
			var array = line.split(";");
			objarray.push( new dataline(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7] ));
			//console.log(line );
			//console.log(array[0]+ " : " + objarray.length);
			//console.log(objarray[objarray.length - 1]);
		}
	});
	lr.on('end', function () {
	return objarray;
	//console.log(JSON.stringify(objarray));
	});
	
	}
}