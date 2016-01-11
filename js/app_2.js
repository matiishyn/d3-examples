import d3 from 'd3';
import _ from 'underscore';

var dataset = _.map(_.range(30), i => {
    return {
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        r: Math.round(Math.random() * 30)
    };
});

var margins = {top: 0, right: 0, bottom: 0, left: 0};

var multiplier = 10,
    h = 300 - margins.top - margins.bottom,
    w = 400 - margins.left - margins.right;

var svg = d3.select('#chartArea')
    .append('svg')
    .attr('width', w + margins.left + margins.right)
    .attr('height', h + margins.top + margins.bottom)
    .append('g')
    .attr('transform', `translate(${margins.left}, ${margins.top})`);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, d => d.y)]) // input
    .range([0, h]); // output

var colorScale = d3.scale.linear()
    .domain([0, d3.max(dataset)]) // input
    .range(['orange', 'purple']); // output

var xScale = d3.scale.linear()
    .domain([0, 100])
    .range([0, w])

svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'bar')
    .attr('cx', d=>xScale(d.x))
    .attr('cy', d=>yScale(d.y))
    .attr('r', d => d.r)
    .on('mouseover', function () {
        d3.select(this).classed('active', true);
    })
    .on('mouseout', function () {
        d3.select(this).classed('active', false);
    })


document.getElementById('updateBtn').onclick = update;

function update() {
    _.each(dataset, (datum) => {
        datum.x = Math.round(Math.random() * 100);
        datum.y = Math.round(Math.random() * 100);
        datum.r = Math.round(Math.random() * 30);
    });

    svg.selectAll('circle')
        .transition()
        .duration(500)
        .attr('cx', d=>xScale(d.x))
        .attr('cy', d=>yScale(d.y))
        .attr('r', d => d.r)
}
