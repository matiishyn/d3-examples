import d3 from 'd3';

console.log('==================SCALE1=================');
let scale = d3.scale.linear();

scale.domain([0,1,2,3]);
scale.range([0,100]);

console.log(scale(0));
console.log(scale(0.5));
console.log(scale(1));
console.log(scale(2));
console.log(scale.domain());
console.log(scale.range());




console.log('==================SCALE2=================');
let scale2 = d3.scale.ordinal();

scale2.domain(['a','b','c']);
scale2.rangePoints([0,100]);

console.log(scale2('a'));
console.log(scale2('b'));
console.log(scale2('c'));
console.log(scale2.domain());
console.log(scale2.range());

export default '';
