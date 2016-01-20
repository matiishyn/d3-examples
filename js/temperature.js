import d3 from 'd3';

let outerWidth = 500,
    outerHeight = 250,
    circleRadius = 3,
    margin = {left: 30, top: 30, right: 30, bottom: 30};


let xColumn = "timestamp",
    yColumn = "temperature";

let svg = d3.select("body").append("svg")
    .attr('width', outerWidth)
    .attr('height', outerHeight);

let g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.right})`);

let path = g.append('path');

let innerWidth = outerWidth - margin.left - margin.right,
    innerHeight = outerHeight - margin.top - margin.bottom;

let xScale = d3.time.scale().range([0, innerWidth]),
    yScale = d3.scale.linear().range([innerHeight, 0]);


let line = d3.svg.line()
    .x(d=>xScale(d[xColumn]))
    .y(d=>yScale(d[yColumn]));

function render(data) {
    xScale.domain(d3.extent(data, d => d[xColumn]));
    yScale.domain(d3.extent(data, d => d[yColumn]));

    path.attr('d',line(data))
}

function type(d) {
    d.timestamp = new Date(d.timestamp);
    d.temperature = +d.temperature;
    return d;
}

d3.csv('./js/temperature.csv', type, render);

export default '';