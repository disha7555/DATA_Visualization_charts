function renderChart() {
    var data = google.visualization.arrayToDataTable([
          ['product', 'Sales'],
          ['Shoes',  40],
          ['Hats',  50],
          ['Coats',  35],
          ['Scarves',  20]
        ]);
        
    var options = {
        title : "Product Sales"
    };
    
    var chart = new google.visualization.PieChart(document.getElementById("chart"));
    chart.draw(data, options);
}
google.setOnLoadCallback(renderChart);