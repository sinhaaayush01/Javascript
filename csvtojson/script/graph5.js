// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 70, left: 80},
    width = 600 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
// add the SVG element
var svg5 = d3.select(".sec5").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");


// load the data
d3.json("script/continentgdp.json", function(error, data) {

    data.forEach(function(d) {
        d.Continent = d.Continent;
        d.GDP2013 = +d.GDP2013;
    });
	
  // scale the range of the data
  x.domain(data.map(function(d) { return d.Continent; }));
  y.domain([0, d3.max(data, function(d) { return d.GDP2013; })]);

  // add axis
  svg5.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-80)");

  svg5.append("g")
      .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height/2)
        .attr("dy", "-5em")
        .style("text-anchor", "middle")
        .text("GDP of Continents in 2013");


  // Add bar chart
  svg5.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Continent); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GDP2013); })
      .attr("height", function(d) { return height - y(d.GDP2013); });

});