var svgGraph = d3.select("svg");

d3.csv('rangeData.csv').then(function(dataset) {
    // ['Seattle', 'Houston', 'New York City', 'Los Angeles', 'Chicago', 'Philadelphia', 'Pheonix'];
    filteredData = Object.keys(dataset[0]);

    var tempBarGroup = svgGraph.append("g");

    tempBarGroup.selectAll(".rect")
        .data([120,200,280,360,440])
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", 80)
        .attr("x", 80)
        .attr("y", function(d) { return d-20; })
        .attr("fill",  function(d, i) {
            if (i == '0') {
                return '#ff3c31';
            } else if (i == '1') {
                return '#feab37';
            } else if (i == '2') {
                return '#8a19fb';
            } else if (i == '3') {
                return '#19d2fb';
            } else {
                return '#1961fb';
            }
        })
        
    tempBarGroup.selectAll('text')
        .data(['hot', 'cold'])
        .enter()
        .append('text')
        .attr("x", 80)
        .attr("y", function(d, i) { return 80+i*450; })
        .attr('font-family', 'Roboto')
        .text(function(d) { return d; })

    updateChart(true, true, true, true);
})

function doThings(e) {
    if (e.target.id == 'P1') {
        var selected1 = e.target.checked;
    } else if (e.target.id == 'P2') {
        var selected2 = e.target.checked;
    } else if (e.target.id == 'P3') {
        var selected3 = e.target.checked;
    } else if (e.target.id == 'P4') {
        var selected4 = e.target.checked;
    }

    updateChart(selected1, selected2, selected3, selected4);
}

function updateChart(selected1, selected2, selected3, selected4) {
    if (selected3 == true && !filteredData.includes("Seattle")) {
        filteredData.push("Seattle");
    } else if (selected3 == false && filteredData.includes("Seattle")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "Seattle";
        });
    }

    if (selected4 == true  && !filteredData.includes("Houston")) {
        filteredData.push("Houston");
    } else if (selected4 == false && filteredData.includes("Houston")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "Houston";
        });
    }

    if (selected1 == true && !filteredData.includes("Pheonix")) {
        filteredData.push("Pheonix");
    } else if (selected1 == false && filteredData.includes("Pheonix")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "Pheonix";
        });
    }

    if (selected4 == true  && !filteredData.includes("New York City")) {
        filteredData.push("New York City");
    } else if (selected4 == false && filteredData.includes("New York City")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "New York City";
        });
    }

    if (selected2 == true  && !filteredData.includes("Los Angeles")) {
        filteredData.push("Los Angeles");
    } else if (selected2 == false && filteredData.includes("Los Angeles")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "Los Angeles";
        });
    }

    if (selected3 == true && !filteredData.includes("Chicago")) {
        filteredData.push("Chicago");
    } else if (selected3 == false && filteredData.includes("Chicago")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "Chicago";
        });
    }

    if (selected4 == true  && !filteredData.includes("Philadelphia")) {
        filteredData.push("Philadelphia");
    } else if (selected4 == false && filteredData.includes("Philadelphia")) {
        filteredData = filteredData.filter(function(value){ 
            return value != "Philadelphia";
        });
    }

    var city = svgGraph.selectAll(".city")
        .data(filteredData, function(d){
            return d;
        })

    var cityEnter = city.enter()
        .append("g")
        .attr('class', 'city')
    // ['Seattle', 'Houston', 'Pheonix', 'New York City', 'Los Angeles', 'Chicago', 'Philadelphia'];
    cityEnter.append('text')
        .attr("x", function(d, i) { 
            if (d == 'Pheonix') {
                return 400; 
            } else if (d == 'Los Angeles') {
                return 280;
            }  else if (d == 'Chicago') {
                return 390;
            } else if (d == 'Houston') {
                return 300;
            } else if (d == 'Seattle') {
                return 200;
            } else if (d == 'New York City') {
                return 250;
            } else if (d == 'Philadelphia') {
                return 255;
            }
        })
        .attr("y", function(d, i) { 
            if (d == 'Pheonix') {
                return 63*3+100; 
            } else if (d == 'Los Angeles') {
                return 63*6+110;
            }  else if (d == 'Chicago') {
                return 63*5+110;
            } else if (d == 'Houston') {
                return 63*1+100;
            } else if (d == 'Seattle') {
                return 63*3+110;
            } else if (d == 'New York City') {
                return 63*2+110;
            } else if (d == 'Philadelphia') {
                return 63*4+110;
            }
        })
        .style("font-size", function(d) {
            // drizzling: 28, slight: 38, medium: 48, heavy: 58
            if (d == 'Seattle') { // medium
                return '48';
            } else if (d == 'Houston') { // heavy
                return '58';
            } else if (d == 'New York City') { // heavy
                return '58';
            } else if (d == 'Los Angeles') { // slight
                return '38';
            } else if (d == 'Chicago') { // medium
                return '48';
            } else if (d == 'Philadelphia') { // heavy
                return '58';
            } else { // drizzling
                return '28';
            }
        })
        .style('fill', function(d) {
            // r1: 1961fb, r2: 5b8afd, r3: 63009e, r4: ff635c, r5: ff3c31
            if (d == 'Seattle') {
                return '#1961fb';
            } else if (d == 'Houston') {
                return '#feab37';
            } else if (d == 'New York City') {
                return '#1961fb';
            } else if (d == 'Los Angeles') {
                return '#8a19fb';
            } else if (d == 'Chicago') {
                return '#1961fb';
            } else if (d == 'Philadelphia') {
                return '#1961fb';
            } else {
                return '#ff3c31';
            }
        })
        .attr('font-family', 'Roboto')
        .attr("font-weight", function(d) {
            // drizzling: lighter 100, slight: normal 300, medium: bold 500, heavy: bolder 700
            if (d == 'Seattle') { // medium
                return '500';
            } else if (d == 'Houston') { // heavy
                return '700';
            } else if (d == 'New York City') { // heavy
                return '700';
            } else if (d == 'Los Angeles') { // slight
                return '300';
            } else if (d == 'Chicago') { // medium
                return '500';
            } else if (d == 'Philadelphia') { // heavy
                return '700';
            } else { // drizzling
                return '100';
            }
        })
        .text(function (d) { return d; })

        city.exit().remove();
}