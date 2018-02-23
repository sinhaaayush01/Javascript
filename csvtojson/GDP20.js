// For adding the modules of node js
const fs = require('fs');
const readline = require('readline');
const Stream = require('stream');
// For reading the csv file
const instream = fs.createReadStream('country_details.csv');
// Creating stream for saving into object after reading
const outsream = new Stream();
const rl = readline.createInterface(instream, outsream);
let a = 0;
let i; // Counter
const population = [];
const gdp = [];
const ppp = [];
// const cont = [];


let headers = []; // Array for header
rl.on('line', (line) => {
  if (a === 0) {
    headers = line.split(',');
    a = 1;
  } else {
    const currentline = line.split(',');
    // console.log(currentline[5]);
    // console.log(currentline.indexOf('European Union')==-1);
    if (currentline.indexOf('European Union') === -1 && currentline.indexOf('World') === -1) {
      const temp = {};
      const temp1 = {};
      const temp2 = {};
      /* temp['Country'] = currentline[0];
                      temp1['Country'] = currentline[0];
                      temp2['Country'] = currentline[0]; */
      for (i = 0; i < headers.length; i += 1) {
        if (headers[i] === 'Country') {
          temp[headers[i]] = currentline[i];
          temp1[headers[i]] = currentline[i];
          temp2[headers[i]] = currentline[i];
        }
        if (headers[i] === 'Population2013') {
          // temp[headers[i]] = currentline[i];
          temp[headers[i]] = currentline[i];
        }

        if (headers[i] === 'GDP2013') {
          temp1[headers[i]] = currentline[i];
        }
        if (headers[i] === 'PPP2013') {
          temp2[headers[i]] = currentline[i];
        }
      }

      population.push(temp);
      gdp.push(temp1);
      ppp.push(temp2);
    }


    // console.log(temp['Country']);
  }
  population.sort((c, b) => b.Population2013 - c.Population2013);
  gdp.sort((c, b) => b.GDP2013 - c.GDP2013);
  ppp.sort((c, b) => b.PPP2013 - c.PPP2013);
});
rl.on('close', () => {
  // console.log(res);
  fs.writeFile('population.json', JSON.stringify(population), 'utf8', (err) => {
    if (err) { console.log('error'); }
  });
  fs.writeFile('gdp.json', JSON.stringify(gdp), 'utf8', (err) => {
    if (err) { console.log('error'); }
  });
  fs.writeFile('ppp.json', JSON.stringify(ppp), 'utf8', (err) => {
    if (err) { console.log('error'); }
  });
  /* fs.writeFile('continent.json', JSON.stringify(ppp), 'utf8', function(err) {
          console.log(err);
      }); */
});
