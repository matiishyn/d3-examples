import d3 from 'd3';

let data = [1, 2, 3, 4, 5];

let scale = d3.scale.linear()
    .domain([1, 5])
    .range([0, 200]);

let svg = d3.select('body').append('svg')
    .attr('width', 300)
    .attr('height', 300);


function render(data, color) {
    let rects = svg.selectAll('rect')
        .data(data);

    rects.enter()
        .append('rect');

    rects
        .attr('x', scale)
        .attr('y', 50)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', color);

    rects.exit().remove();
}

render([1, 2, 3], "red");
render([1, 2, 3, 4, 5], "blue");
render([1, 2], "green");

export default '';
