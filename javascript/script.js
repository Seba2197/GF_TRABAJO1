// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: "Nodo 1" },
    { id: 2, label: "Nodo 2" },
    { id: 3, label: "Nodo 3" },
    { id: 4, label: "Nodo 4" },
    { id: 5, label: "Nodo 5" },
  ]);
  
  // create an array with edges
  var edges = new vis.DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ]);
  
  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {};
  var network = new vis.Network(container, data, options);