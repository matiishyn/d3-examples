import d3 from 'd3';
import _ from 'underscore';

let data = [1231, 2423, 2353, 2314, 5234];

d3.select('body').selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text((d,i)=> `data=${d}; index=${i}` );
