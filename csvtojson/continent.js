const fs = require('fs');
let rawdata = fs.readFileSync('population.json');
let pop = JSON.parse(rawdata);
//console.log(pop);  
//console.log(pop[0].Country);
//console.log(pop.length);
cont = [];
temp = {};
var as = 0,
    s = 0,
    e = 0,
    n = 0,
    a = 0,
    af = 0;
for (i = 0; i < pop.length; i++) {
    if (pop[i].Country == "Russia" || pop[i].Country == "India" || pop[i].Country == "Japan" || pop[i].Country == "China" || pop[i].Country == "Indonesia" || pop[i].Country == "Saudi Arabia" || pop[i].Country == "Turkey" || pop[i].Country == "Republic of Korea") {
        as = as + parseFloat(pop[i].Population2013);
    } else if (pop[i].Country == "France" || pop[i].Country == "Italy" || pop[i].Country == "Germany" || pop[i].Country == "United Kingdom") {
        temp["Continent"] = "Europe";
        e = e + parseFloat(pop[i].Population2013);
    } else if (pop[i].Country == "Australia") {
        //temp3["Country"]="Austrailia";
        a = parseFloat(pop[i].Population2013);
    } else if (pop[i].Country == "Mexico" || pop[i].Country == "USA" || pop[i].Country == "Canada") {
        //temp3["Country"]="North America";
        n = n + parseFloat(pop[i].Population2013);
    } else if (pop[i].Country == "Brazil" || pop[i].Country == "Argentina") {
        s = s + parseFloat(pop[i].Population2013);
    } else if (pop[i].Country == "South Africa") {
        af = parseFloat(pop[i].Population2013);
    }
}
//console.log(as);
temp["Continent"] = "Asia";
temp["Population2013"] = as;
cont.push(temp);
//console.log(cont);
temp={};
temp["Continent"] = "North America";
temp["Population2013"] = n;
cont.push(temp);
//console.log(cont)
temp={};
temp["Continent"] = "Europe";
temp["Population2013"] = e;
cont.push(temp);
//console.log(cont);
temp={};
temp["Continent"] = "South America";
temp["Population2013"] = s;
cont.push(temp);
//console.log(cont);
temp={};
temp["Continent"] = "Africa";
temp["Population2013"] = af;
cont.push(temp);
//console.log(temp);
temp={};
temp["Continent"] = "Australia";
temp["Population2013"] = a;
//console.log(cont);
cont.push(temp);
//console.log(cont);
let data = JSON.stringify(cont);
fs.writeFileSync('continent.json', data);