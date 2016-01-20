import d3 from 'd3';

var outerWidth = 500;
var outerHeight = 250;
var margin = {left: 90, top: 30, right: 30, bottom: 30};
var barPadding = 0.2;

var xColumn = "name";
var yColumn = "population";

var innerWidth = outerWidth - margin.left - margin.right;
var innerHeight = outerHeight - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight);
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var xAxisG = g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + innerHeight + ")");
var yAxisG = g.append("g").attr("class", "y axis");

var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);
var yScale = d3.scale.linear().range([innerHeight, 0]);

var xAxis = d3.svg.axis().scale(xScale).orient("bottom").outerTickSize(0);
var yAxis = d3.svg.axis().scale(yScale).orient("left")
    .ticks(5)
    .tickFormat(d3.format("s"))
    .outerTickSize(0);

function render(data) {

    xScale.domain(data.map(function (d) {
        return d[xColumn];
    }));
    yScale.domain([0, d3.max(data, function (d) {
        return d[yColumn];
    })]);

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);

    var bars = g.selectAll("rect").data(data);
    bars.enter().append("rect")
        .attr("width", xScale.rangeBand());
    bars
        .attr("x", function (d) {
            return xScale(d[xColumn]);
        })
        .attr("y", function (d) {
            return yScale(d[yColumn]);
        })
        .attr("height", function (d) {
            return innerHeight - yScale(d[yColumn]);
        });
    bars.exit().remove();
}

function type(d) {
    d.population = +d.population;
    return d;
}

d3.csv('./js/population.csv', type, render);

export default '';