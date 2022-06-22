const fs = require("fs")

//Reading in and parsing Data
var json_data = fs.readFileSync("../data/full_graph.json", "utf8")
let data = JSON.parse(json_data)
var kanten = data.edges


for (let i = 0; i < kanten.length; i++)
  {
    var aktuelleKante = kanten[i]

    if(aktuelleKante["sum_of_squared_error"] != null)
          {
            Object.defineProperty(aktuelleKante, "mean_of_daily_differences",
            Object.getOwnPropertyDescriptor(aktuelleKante, "sum_of_squared_error"));
            delete aktuelleKante["sum_of_squared_error"];
          }
  }

  fs.writeFile("full_graph_modified.json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err)
      return
    }
  })