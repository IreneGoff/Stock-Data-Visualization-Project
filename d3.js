//U35549532


document.addEventListener('DOMContentLoaded', function () {
    const width = 600;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    d3.csv("mock_stock_data.csv").then(data => {
        data.forEach(d => {
            d.date = new Date(d.date);
            d.value = +d.value;
        });

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([margin.left, width - margin.right]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        svg.append("g")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);

        const line = d3.line()
            .defined(d => !isNaN(d.value))
            .x(d => x(d.date))
            .y(d => y(d.value));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);

        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("background", "#f9f9f9")
            .style("padding", "5px")
            .style("border", "1px solid #ccc")
            .style("border-radius", "3px");