import * as d3 from 'd3'


d3.selectAll('h1').style("background-color","gold");

let d = [1,2,3,4,5];
let s = d3.selectAll("p");

s = s.data(d).enter().append('p').text(function(d,i){
    return (d+' '+"Paragraph");
});

console.log(s);