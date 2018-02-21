//For adding the modules of node js
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
//For reading the csv file
var instream = fs.createReadStream('country_details.csv');
//Creating stream for saving into object after reading
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var a = 0; //Counter
var obj = []; //Array for All Objects
var headers = []; //Array for header
rl.on('line', function(line) //Adding event handler to line
{

    if (a == 0)
        headers = line.split(","); //Splitting into an array of substrings
    else {
        var temp = {};
        var currentline = line.split(",");

        for (var j = 0; j < headers.length; j++) { //To provide to all the header the values
            if (currentline[j] == 'World' || currentline[j] == 'European Union') {
                for (j = 0; j < currentline.length; j++) 
                    continue;
            }
        else {
        	for(j = 0; j < headers.length; j++)
        	if(headers[j]=='Population2013' || headers[j]=='GDP2013' || headers[j]=='PPP2013')
        	{
            temp[headers[j]] = currentline[j];
        }
        }
    }
    //console.log(currentline);
    obj.push(temp);
}
a++;
});

rl.on('close', function() { //Adding event handler to Close
    //console.log(res);
    fs.writeFile('country_details.json', JSON.stringify(obj), 'utf8', function(err) { //Writing data to JSON file
        console.log(err);
    });
});