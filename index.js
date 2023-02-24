const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];


const svg = d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500)
    .attr('stroke', 'black');

svg.selectAll('circle')
    .data(sandwiches)
    .enter()
    .append('circle')
        .attr('r', function(d) {
            if(d.size == "small")
                return 12;
            else
                return 24;
        })
        .style('fill', function(d) {
            if(d.price < 7.00)
                return "green";
            else
                return "yellow";
         } )
        .attr('cy', 50)
        .attr('cx', (d, index) => index * 60 + 50);