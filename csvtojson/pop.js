//For adding the modules of node js
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
//For reading the csv file
var instream = fs.createReadStream('country_details.csv');
//Creating stream for saving into object after reading
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var a = 0;//Counter
var obj = [];//Array for All Objects
var population = [];
var gdp = [];
var ppp = [];




var headers=[];//Array for header
rl.on('line', function(line)//Adding event handler to line
{
   
   if(a==0){
       headers=line.split(",");
       a=1;
   }
   else
   {

   	var currentline = line.split(',');
    //console.log(currentline[5]);

   	if(!(currentline[0] == 'European Union' || currentline[0] == 'World')){

       	var tempValue = {};
        tempValue[headers[0]] = currentline[0];
       	tempValue[headers[5]] = currentline[5];
       	population.push(tempValue);

       	var tempValue = {};
       	tempValue[headers[0]] = currentline[0];
       	tempValue[headers[11]] = currentline[11];
       	gdp.push(tempValue);

       	var tempValue = {};
       	tempValue[headers[0]] = currentline[0];
       	tempValue[headers[24]] = currentline[24];
       	ppp.push(tempValue);
        	
      	}  	
          
     	// console.log(temp['Country']);      	

    }
    population.sort(function(a, b){
    			return b.Population2013 - a.Population2013;
			});
    gdp.sort(function(a, b){
    			return b.GDP2013 - a.GDP2013;
			});
    ppp.sort(function(a, b){
    			return b.PPP2013 - a.PPP2013;
			});
   
});
rl.on('close', function() { 
     //console.log(res);
     fs.writeFile('population.json',JSON.stringify(population),'utf8',function(err){
     	console.log(err);
     });
     fs.writeFile('gdp.json',JSON.stringify(gdp),'utf8',function(err){
     	console.log(err);
     });
     fs.writeFile('ppp.json',JSON.stringify(ppp),'utf8',function(err){
     	console.log(err);
     });
});
