/* const fs = require('fs');
let rawdata = fs.readFileSync('gdp.json');
let pop = JSON.parse(rawdata); */

const pop = require('./gdp.json');
// console.log(pop);
// console.log(pop[0].Country);
// console.log(pop.length);
const cont = [];
let temp = {};
let as = 0;
let s = 0;
let e = 0;
let n = 0;
let a = 0;
let af = 0;
let i;
for (i = 0; i < pop.length; i += 1) {
  if (pop[i].Country === 'Russia' || pop[i].Country === 'India' || pop[i].Country === 'Japan' || pop[i].Country === 'China' || pop[i].Country === 'Indonesia' || pop[i].Country === 'Saudi Arabia' || pop[i].Country === 'Turkey' || pop[i].Country === 'Republic of Korea') {
    as += parseFloat(pop[i].GDP2013);
  } else if (pop[i].Country === 'France' || pop[i].Country === 'Italy' || pop[i].Country === 'Germany' || pop[i].Country === 'United Kingdom') {
    temp.Continent = 'Europe';
    e += parseFloat(pop[i].GDP2013);
  } else if (pop[i].Country === 'Australia') {
    // temp3["Country"]="Austrailia";
    a = parseFloat(pop[i].GDP2013);
  } else if (pop[i].Country === 'Mexico' || pop[i].Country === 'USA' || pop[i].Country === 'Canada') {
    // temp3["Country"]="North America";
    n += parseFloat(pop[i].GDP2013);
  } else if (pop[i].Country === 'Brazil' || pop[i].Country === 'Argentina') {
    s += parseFloat(pop[i].GDP2013);
  } else if (pop[i].Country === 'South Africa') {
    af = parseFloat(pop[i].GDP2013);
  }
}
// console.log(as);
temp.Continent = 'Asia';
temp.GDP2013 = as;
cont.push(temp);
// console.log(cont);
temp = {};
temp.Continent = 'North America';
temp.GDP2013 = n;
cont.push(temp);
// console.log(cont)
temp = {};
temp.Continent = 'Europe';
temp.GDP2013 = e;
cont.push(temp);
// console.log(cont);
temp = {};
temp.Continent = 'South America';
temp.GDP2013 = s;
cont.push(temp);
// console.log(cont);
temp = {};
temp.Continent = 'Australia';
temp.GDP2013 = a;
// console.log(cont);
cont.push(temp);
// console.log(cont);
temp = {};
temp.Continent = 'Africa';
temp.GDP2013 = af;
cont.push(temp);
// console.log(temp);
// console.log(cont);
const data = JSON.stringify(cont);
const fs = require('fs');

fs.writeFile('continentgdp.json', data, (err) => {
  if (err) { console.log('error'); }
});
