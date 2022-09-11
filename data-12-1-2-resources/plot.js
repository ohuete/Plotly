// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey"
// };

// Plotly.newPlot("plotArea", [trace], layout);

//// BAR CHART
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var data = [trace];

// var layout = {
//     title: "Bev Survey",
//     xaxis: {title: "Type of Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", data, layout);

//// PIE CHART
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };

// var data = [trace];

// var layout = {
//     title: "Pie Chart",
// };

// Plotly.newPlot("plotArea", data, layout);

//// SCATTER
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: "markers",
//     type: "scatter"
// };

// var data = [trace];

// var layout = {
//     title: "Scatter",
//     xaxis: {title: "Type of Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", data, layout);

/// Filter By First Letter 's'
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander', 'snake'];
// var firstLetter = words.filter(function(letter){
//     return letter[0] == 's';
// });
// console.log(firstLetter);

///SLICE
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander', 'snake'];
// words.slice(0,3);