import d3 from 'd3';
import _ from 'underscore';

var dataset = _.map(_.range(75), i => Math.random() * 50);

var multiplier = 10,
    h = 300,
    w = 400;

var svg = d3.select('#chartArea')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)]) // input
    .range([0, h]); // output

var colorScale = d3.scale.linear()
    .domain([0, d3.max(dataset)]) // input
    .range(['orange', 'purple']); // output

var xScale = d3.scale.ordinal()
    .domain(dataset)
    .rangeBands([0, w], .1, 0)

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', xScale)
    .attr('y', d => h - yScale(d))
    .attr('width', xScale.rangeBand)
    .attr('height', yScale)
    .attr('fill', colorScale);