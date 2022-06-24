function print_hello_world() {
  console.log("Hello world!")
}

 const socket = io()
 //var stations
 var data_2016
 var data_2017
 var data_2018
 var data_2019
 var data_2016_avg
 var data_2017_avg
 var data_2018_avg
 var data_2019_avg
 
 socket.on("connect", () => {
 console.log("Connected to the webserver.")
 })
 socket.on("disconnect", () => {
 console.log("Disconnected from the webserver.")
 })

socket.on("data_2016", (obj) => {
  console.log(obj)
  data_2016 = obj 
 })

socket.on("data_2017", (obj) => {
  console.log(obj)
  data_2017 = obj 
})

socket.on("data_2018", (obj) => {
  console.log(obj)
  data_2018 = obj 
})

socket.on("data_2019", (obj) => {
  console.log(obj)
  data_2019 = obj 
})
 
 function request_data() {
 socket.emit("get_data_2016", { example_parameter: "hi" })
 socket.emit("get_data_2017", { example_parameter: "hi" })
 socket.emit("get_data_2018", { example_parameter: "hi" })
 socket.emit("get_data_2019", { example_parameter: "hi" })
 }

 function request_data_2() {
  socket.emit("get_data_task_2", { example_parameter: "hi" })
}

function clean_data_task_2() {
  socket.emit("clean_data_task_2", { example_parameter: "hi" })
}

  function compute_averages_task_2() {
  socket.emit("compute_averages_task_2", { example_parameter: "hi" })
}

function vis_exercise_2() {
  socket.emit("vis_exercise_2", { example_parameter: "hi" })
}

function vis_exercise_3() {
  socket.emit("vis_exercise_3", { example_parameter: "hi" })
}
 
 
 function access_data() {
  access_data_2016()
  access_data_2017()
  access_data_2018()
  access_data_2019()
}

function access_data_2016() {
    let data = data_2016.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2016_avg = total_avg
    //console.log("total avg for year 2016: " + data_2016_avg)
  }

function access_data_2017() {
  let data = data_2017.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2017_avg = total_avg
    //console.log("total avg for year 2017: " + data_2017_avg)
}

function access_data_2018() {
  let data = data_2018.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2018_avg = total_avg
    //console.log("total avg for year 2018: " + data_2018_avg)
}

function access_data_2019() {
  let data = data_2019.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2019_avg = total_avg
    //console.log("total avg for year 2019: " + data_2019_avg)
}

let svg = d3.select("#svgRoot")
let g_bars = svg.append("g").attr("class", "g_bar")
let g_xAxis = svg.append("g").attr("class", "g_xAxis")
let g_yAxis = svg.append("g").attr("class", "g_yAxis")
let g_axisTitle = svg.append("g").attr("class", "g_labels")

function drawVis(){
    access_data()
    const margin = {
      top: 50,
      left: 75,
      bottom: 50,
      right: 50,
    }
    let data = [
    {
      year: "2016",
      avg_value: data_2016_avg
    },
    {
      year: "2017",
      avg_value: data_2017_avg
    },
    {
      year: "2018",
      avg_value: data_2018_avg
     },
     {
      year: "2019",
      avg_value: data_2019_avg
    },
    ]
    let width = parseInt(svg.style("width")) 
    let height = parseInt(svg.style("height")) - margin.bottom;

    let scale_x = d3
     .scaleBand()
     .domain(data.map((d) => d.year))
     .range([margin.left, width - margin.right])
     .padding(0.1)

    let scale_y = d3
     .scaleLinear()
     .domain([0, 20])
     .range([height - margin.top, margin.bottom])

     let bars = g_bars.selectAll(".bar").data(data)

     bars
     .enter()
     .append("rect")
     .attr("class", "bar")
     .attr("x", (d) => scale_x(d.year))
     .attr("y", (d) => height - margin.bottom - (scale_y(0) - scale_y(d.avg_value)))
     .attr("width", scale_x.bandwidth())
     .attr("height", (d) => scale_y(0) - scale_y(d.avg_value))
     .attr("fill", "#69b3a2")

     g_xAxis
     .attr("transform", "translate(0, " + (height - margin.bottom) + ")")
     .call(d3.axisBottom(scale_x))

     g_yAxis
     .attr("transform", "translate(" + margin.left + ", 0)")
     .call(d3.axisLeft(scale_y))

     addAxisTitle(["Average particulate measurements (in µg/m³)", "Year"], width, height)

    svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 10 + (margin.top / 2))
      .attr("text-anchor", "middle")
      .attr("font-family" , "sans-serif")
      .style("font-size", "20px")   
      .text("Average particulate matter per year"); 
}

function addAxisTitle(axisTitles, width, height) {
  let axisTitle = g_axisTitle.selectAll(".axisTitle").data(axisTitles)

  axisTitle
    .enter()
    .append("text")
    .attr("class", "axisTitle")
    .merge(axisTitle)
    .text((d) => d)
    .attr("transform", (d, i) => {
      if (i > 0) {
        return `translate(${width / 2}, ${height - 20})`
      } else {
        return `translate(25, ${height / 2 + 150}) rotate(-90)`
      }
    })
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "16px")
  axisTitle.exit().remove()
}

function paintHistogram() {
  socket.emit("paint_histogram", {example_parameter : "hi"})
}


socket.on("visualisation", (obj) => {
  var values = Object.keys(obj).map(function(key) {return obj[key].avg;});
  let min = d3.min(values)
  let max = d3.max(values)

  //create html input buttons
  let label = document.createElement("label");
  label.id = "binLabel";
  label.innerHTML = "# of bins: ";
  document.getElementById("histogram").appendChild(label);

  let input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.max = "30";
  input.step = "1";
  input.value = "30";
  input.id = "nBin";
  document.getElementById("histogram").appendChild(input);

  let nBin = 50;
  const margin = {top: 75, right: 75, bottom: 100, left: 60},
  width = parseInt(d3.select("#histogram").style("width")) - margin.left - margin.right,
  height = parseInt(d3.select("#histogram").style("height")) - margin.top - margin.bottom;

  const svg = d3.select("#histogram")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 //x axis: scale and draw
  const x = d3.scaleLinear()
      .domain([0,30])
      .range([0, width]);
      svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));


       // Y axis: initialization
  const y = d3.scaleLinear()
  .range([height, 0]);
const yAxis = svg.append("g")
  
function update (nBin){
  
  const histogram = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(nBin));
  const bins = histogram(values);


  svg.append("text")             
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                         (height + margin.top - 40) + ")")
    .style("text-anchor", "middle")
    .attr("font-family" , "sans-serif")
    .style("font-size", "16px") 
    .text("Average particulate measurements (in µg/m³)");


  const y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0, d3.max(bins, function(d) { return d.length; })]); 
  yAxis
  .transition()
  .duration(1000)
      .call(d3.axisLeft(y));


 svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .attr("font-family" , "sans-serif")
      .style("font-size", "16px") 
      .text("Number of Stations");

  
  svg.selectAll("rect")
      .data(bins)
      .join("rect")
      .transition()
     .duration(1000)

        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; }) //the -1 will probably throw an "Error: <rect> attribute width: A negative value is not valid. ("-1")", howeber the visualisation is nicer/seems cleaner
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#69b3a2") 

  }
         // Initialize with 30 bins
  update(30)


  // Listen to the button -> update if user change it
  d3.select("#nBin").on("input", function() {
    update(+this.value);

  });


  svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")
      .attr("font-family" , "sans-serif")  
      .style("font-size", "20px")   
      .text("Distribution of station averages in 2019"); 


});


socket.on("scatterplot_drawing", (obj) => {
  console.log("test 3")
  /*
  var values = Object.keys(obj).map(function(key) {return obj[key].avg;});
  let min = d3.min(values)
  let max = d3.max(values)
  var dataset1 = [[90, 20], [20, 100], [66, 44], [53, 80], [24, 182], [80, 72], [10, 76], [33, 150], [100, 15]];
  */
 let dataset = obj

 let xmin = 0
 let ymin = 0
 let xmax = 0
 let ymax = 0

 

 for (let i = 0; i < dataset.length; i++)
 {
   let object = dataset[i]
   if (i == 0)
   {
    xmin = object.x
    xmax = object.x
    ymin = object.y
    ymax = object.y
   }
   else{
     if (object.x < xmin)
     {
       xmin = object.x
     }
     if (object.x > xmax)
     {
       xmax = object.x
     }
     if (object.y < ymin)
     {
       ymin = object.y
     }
     if (object.y > ymax)
     {
       ymax = object.y
     }
   }
 }

 /* // Bubble size adjust
 let input = document.createElement("input");
  input.type = "number";
  input.value = "default";
  input.id = "buttonSize";
  document.getElementById("scatterplot").appendChild(input);
  */

// set the dimensions and margins of the graph
const margin = {top: 75, right: 75, bottom: 100, left: 75},
  width = parseInt(d3.select("#scatterplot").style("width")) - margin.left - margin.right,
  height = parseInt(d3.select("#scatterplot").style("height")) - margin.top - margin.bottom;
  //width = 460 - margin.left - margin.right,
  //height = 400 - margin.top - margin.bottom;


  //tooltip div that is hidden by default

  var tooltip = d3.select("#scatterplot")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")
      

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  
const showTooltip = function(event,d) {
  tooltip
    .transition()
    .duration(200)
  tooltip
    .style("opacity", 1)
    .html("Cluster: " + d.centroid_index + " "+ "[" +d.x + " , " + d.y + "]")
    .style("left", (event.x)/2 + "px")
    .style("top", (event.y)/2-50 + "px")
}
const moveTooltip = function(event, d) {
  tooltip
    .style("left", (event.x)/2 + "px")
    .style("top", (event.y)/2-50 + "px")
}
const hideTooltip = function(event, d) {
  tooltip
    .transition()
    .duration(200)
    .style("opacity", 0)
}

  //------//
//add color range
 var myColor = d3.scaleOrdinal()
 .domain(["0", "1", "2"])
 .range(["#ffb8b8", "#85ff85", "#72ffe6"]);

// append the svg object to the body of the page
const svg = d3.select("#scatterplot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    
  .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

//Read the data


//Add initial X axis for animation
var x = d3.scaleLinear()
.domain([0, 0])
.range([ 0, width ]);
svg.append("g")
.attr("class", "myXaxis")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))
.attr("opacity", "0")

//add initial y axis for animation
var y = d3.scaleLinear()
.domain([0, 0])
.range([ height , 0 ]);
svg.append("g")
.attr("class", "myYaxis")

.call(d3.axisLeft(y))
.attr("opacity", "0")


  

  

  
  // Title
        svg.append('text')
        .attr('x', width/2)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Station Clusters (After PCA and k-means)');
        
  // X label
        svg.append('text')
        .attr('x', width/2)
        .attr('y', height + 50)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Principal Component 1');
        
   // Y label
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(-50,' + height/2 + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Principal Component 2');


  // What to do when one group is hovered
  const highlight = function(event, d){

    selected_cluster = d.centroid_index
    /*
    d =>  myColor(d)
    // reduce opacity of all groups
    d3.selectAll(".bubbles").style("opacity", .05)
    // expect the one that is hovered
    d3.selectAll("." +d).style("opacity", 1)
    */
   // reduce opacity of all groups
   d3.selectAll(".bubbles")
   .transition()
   .duration(200)
   .style("opacity", .05)

   // expect the one that is hovered
   d3.selectAll(selected_cluster)
      .transition()
      .duration(200)
      
      .style("fill", myColor(selected_cluster))
      .style("opacity", 1)
      
    
  }

  // And when it is not hovered anymore
  const noHighlight = function(event, d){
    d3.selectAll(".bubbles").style("opacity", 1)
  }


  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(dataset)
    .enter()
    .append("circle")
    //.attr("cx", function (d) { return x(d.x); } )
    .attr("cx", d => x(d.x))
    //.attr("cy", d => y(d.y))
    .attr("r", 30)
   
    
    // -3- Trigger the functions for hover
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )
    
    //new X axis
    
    x.domain([xmin, xmax])
    svg.select(".myXaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .call(d3.axisBottom(x));

    //new Y axis
    y.domain([ymin, ymax])
    svg.select(".myYaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .call(d3.axisLeft(y));

   // return dots animation
    svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("class", d => "bubbles " + (d.centroid_index))
    //.attr("cx", function (d) { return x(d.x); } )
    .attr("cx", d => x(d.x))
    .attr("cy", d => y(d.y))
    .attr("r", 7)
    .style("fill", d => myColor(d.centroid_index))

   ;

   // A function that update the color circle
   function changeSize() {
    svg.selectAll("circle")
      .attr("r", this.value)
  }
  
  // Add an event listener to the button created in the html part
    d3.select("#buttonSize").on("input", changeSize )


    // Add one dot in the legend for each name.
    const size = 20
    const allgroups = ["Cluster 1", "Cluster 2", "Cluster 3"]
    svg.selectAll("myrect")
      .data(allgroups)
      .join("circle")
        .attr("cx", 750)
        .attr("cy", (d,i) => 10 + i*(size+5)) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("r", 7)
        .style("fill", d =>  myColor(d))
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

    // Add labels beside legend dots
    svg.selectAll("mylabels")
      .data(allgroups)
      .enter()
      .append("text")
        .attr("x", 750 + size*.8)
        .attr("y", (d,i) =>  i * (size + 5) + (size/2)) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", d => myColor(d))
        .text(d => d)
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

        //update function
/*
        function update(){
          // For each check box:
          d3.selectAll(".checkbox").each(function(d){
            cb = d3.select(d => "bubbles" + (d.centroid_index));
            grp = cb.property("value")
    
            // If the box is check, I show the group
            if(cb.property("checked")){
              svg.selectAll("."+grp).transition().duration(1000).style("opacity", 1).attr("r", 7)
    
            // Otherwise I hide it
            }else{
              svg.selectAll("."+grp).transition().duration(1000).style("opacity", 0).attr("r", 0)
            }
          })
        }
    
        // When a button change, I run the update function
        d3.selectAll(".checkbox").on("change",update);
    
        // And I initialize it at the beginning
        update()
        */
})

socket.on("network_drawing", (obj) => {

  data = obj

  let networkLabel = document.createElement("label");
  networkLabel.id = "networkLabel";
  networkLabel.innerHTML = "Select month: ";

  let networkInput = document.createElement("select");
  networkInput.appendChild(new Option("Jan 2016 (Significant Timestep based on Activity)", "2016-01"));
  networkInput.appendChild(new Option("Feb 2016", "2016-02"));
  networkInput.appendChild(new Option("Mar 2016", "2016-03"));
  networkInput.appendChild(new Option("Apr 2016", "2016-04"));
  networkInput.appendChild(new Option("May 2016", "2016-05"));
  networkInput.appendChild(new Option("Jun 2016", "2016-06"));
  networkInput.appendChild(new Option("Jul 2016", "2016-07"));
  networkInput.appendChild(new Option("Aug 2016", "2016-08"));
  networkInput.appendChild(new Option("Sep 2016", "2016-09"));
  networkInput.appendChild(new Option("Oct 2016", "2016-10"));
  networkInput.appendChild(new Option("Nov 2016 (Significant Timestep based on Activity)", "2016-11"));
  networkInput.appendChild(new Option("Dec 2016 (Significant Timestep based on Activity)", "2016-12"));
  networkInput.appendChild(new Option("Jan 2017", "2017-01"));
  networkInput.appendChild(new Option("Feb 2017", "2017-02"));
  networkInput.appendChild(new Option("Mar 2017", "2017-03"));
  networkInput.appendChild(new Option("Apr 2017", "2017-04"));
  networkInput.appendChild(new Option("May 2017", "2017-05"));
  networkInput.appendChild(new Option("Jun 2017", "2017-06"));
  networkInput.appendChild(new Option("Jul 2017", "2017-07"));
  networkInput.appendChild(new Option("Aug 2017", "2017-08"));
  networkInput.appendChild(new Option("Sep 2017", "2017-09"));
  networkInput.appendChild(new Option("Oct 2017", "2017-10"));
  networkInput.appendChild(new Option("Nov 2017", "2017-11"));
  networkInput.appendChild(new Option("Dec 2017", "2017-12"));
  networkInput.appendChild(new Option("Jan 2018", "2018-01"));
  networkInput.appendChild(new Option("Feb 2018", "2018-02"));
  networkInput.appendChild(new Option("Mar 2018", "2018-03"));
  networkInput.appendChild(new Option("Apr 2018", "2018-04"));
  networkInput.appendChild(new Option("May 2018", "2018-05"));
  networkInput.appendChild(new Option("Jun 2018", "2018-06"));
  networkInput.appendChild(new Option("Jul 2018", "2018-07"));
  networkInput.appendChild(new Option("Aug 2018", "2018-08"));
  networkInput.appendChild(new Option("Sep 2018", "2018-09"));
  networkInput.appendChild(new Option("Oct 2018", "2018-10"));
  networkInput.appendChild(new Option("Nov 2018", "2018-11"));
  networkInput.appendChild(new Option("Dec 2018", "2018-12"));
  networkInput.appendChild(new Option("Jan 2019", "2019-01"));
  networkInput.appendChild(new Option("Feb 2019", "2019-02"));
  networkInput.appendChild(new Option("Mar 2019", "2019-03"));
  networkInput.appendChild(new Option("Apr 2019", "2019-04"));
  networkInput.appendChild(new Option("May 2019 (Significant Timestep based on Activity)", "2019-05"));
  networkInput.appendChild(new Option("Jun 2019", "2019-06"));
  networkInput.appendChild(new Option("Jul 2019", "2019-07"));
  networkInput.appendChild(new Option("Aug 2019", "2019-08"));
  networkInput.appendChild(new Option("Sep 2019 (Significant Timestep based on Activity)", "2019-09"));
  networkInput.appendChild(new Option("Oct 2019", "2019-10"));
  networkInput.appendChild(new Option("Nov 2019", "2019-11"));
  networkInput.appendChild(new Option("Dec 2019 (Significant Timestep based on Activity)", "2019-12"));
  networkInput.id = "networkInput";

  //significant months ex 2: 0, 10, 11, 40, 44, 47


  let distanceInput = document.createElement("input");
  distanceInput.type = "number";
  distanceInput.min = "1";
  distanceInput.max = "200000";
  distanceInput.step = "1";
  distanceInput.value = "80000";
  distanceInput.id = "distanceInput";


  //document.getElementById("network").appendChild(networkLabel);
  //document.getElementById("network").appendChild(networkInput);

  document.body.appendChild(networkLabel);
  document.body.appendChild(networkInput);
  document.body.appendChild(distanceInput);




  const margin = {top: 75, right: 75, bottom: 100, left: 75},
  width = parseInt(d3.select("#network").style("width")) - margin.left - margin.right,
  height = parseInt(d3.select("#network").style("height")) - margin.top - margin.bottom;

  var month = "2016-01"
  var maxDistance = 75000


  var map = L.map('network').setView([50, 10.33333], 5.5);

  /*
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    */

  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',
  {
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  }).addTo(map);

  function update (month, maxDistance)
  {
  console.log("running update with", month, maxDistance)

  for(i in map._layers) {
    if(map._layers[i]._path != undefined) {
        try {
            map.removeLayer(map._layers[i]);
        }
        catch(e) {
            console.log("problem with " + e + map._layers[i]);
        }
    }
}

  var kanten = data.edges
  var knoten = data.vertices
  var months = [0, 10, 11, 40, 44, 47]
  
  for (let i = 0; i < kanten.length; i++)
  {
    var aktuelleKante = kanten[i]
    var distanz = aktuelleKante["distance"]
    if (distanz < maxDistance )
      {
            var co1 = aktuelleKante["coo_1"]
            var co2 = aktuelleKante["coo_2"]
            var latStart = co1.lat
            var lonStart = co1.lon
            var latEnd = co2.lat
            var lonEnd = co2.lon
            var polygon = L.polygon([[latStart, lonStart],[latEnd, lonEnd]], {
              color: "#A9A9A9",
              fillColor: "#A9A9A9",
              fillOpacity: 0.4,
              weight: 1,
              stroke: true
          })
          if(aktuelleKante["mean_of_daily_differences"] != null)
          {
            var error = aktuelleKante["mean_of_daily_differences"]
            var value = error[month]
            if(error[month] != null)
            {
              if(value < 7.5 && value>=0)
                {
                  polygon.setStyle({fillColor: "#ffdad9"})
                  polygon.setStyle({color: "#ffdad9"})
                  polygon.setStyle({fillOpacity: 1})

                }
                if(value < 15 && value>=7.5)
                {
                  polygon.setStyle({fillColor: "#fe908e"})
                  polygon.setStyle({color: "#fe908e"})
                  polygon.setStyle({fillOpacity: 1})

                }
                if(value < 20 && value>=15)
                {
                  polygon.setStyle({fillColor: "#fd4543"})
                  polygon.setStyle({color: "#fd4543"})
                  polygon.setStyle({fillOpacity: 1})

                }
                if(value >= 20)
                {
                  polygon.setStyle({fillColor: "#ba0e0d"})
                  polygon.setStyle({color: "#ba0e0d"})
                  polygon.setStyle({fillOpacity: 1})

                }
            }
          }
          polygon.addTo(map);
    }
  }
  for (let i = 0; i < knoten.length; i++)
  {
    var aktuellerKnoten = knoten[i]
    var lat = aktuellerKnoten.lat
    var lon = aktuellerKnoten.lon
    var circle = L.circle([lat, lon], {
      color: '#000000',
      fillColor: '#000000',
      fillOpacity: 0.7,
      radius: 3500,
      stroke: true
  })

  if(aktuellerKnoten["mean"] != null)
          {
            var mean = aktuellerKnoten["mean"]
            var value = mean[month]
            if(mean[month] != null)
            {
              if(value < 10 && value>=0)
                {
                  circle.setStyle({fillColor: "#ffdad9"})
                  circle.setStyle({color: "#ffdad9"})
                }
                if(value < 20 && value>=10)
                {
                  circle.setStyle({fillColor: "#fe908e"})
                  circle.setStyle({color: "#fe908e"})
                }
                if(value < 30 && value>=20)
                {
                  circle.setStyle({fillColor: "#fd4543"})
                  circle.setStyle({color: "#fd4543"})
                }
                if(value >= 30)
                {
                  circle.setStyle({fillColor: "#ba0e0d"})
                  circle.setStyle({color: "#ba0e0d"})
                }
            }
          }
  circle.addTo(map);
  }  
}

update(month, maxDistance)

dropdown = d3.select("#networkInput")
dropdown.on("change",function() {
var select = document.getElementById('networkInput');
var monthValue = select.options[select.selectedIndex].value;
var input = document.getElementById('distanceInput');
var dist = input.value;
update(monthValue, dist);
});



distInput = d3.select("#distanceInput")
distInput.on("change",function() {
  var select = document.getElementById('distanceInput');
  var distanceValue = select.value;
  update(month, distanceValue);
  });


})