Project Overview  
This project is an interactive dashboard built with **D3.js** that shows stock prices over time. It pulls data from a CSV file and lets users pick which stock to view and set a date range to filter the data. The dashboard uses a clean line chart with tooltips to help users easily explore stock performance and trends.

---

Features  
- Displays stock prices on a line chart with D3.js  
- Tooltips show details like stock name, date, and value when hovering over points  
- Dropdown menu to select different stocks from the dataset  
- Date range picker to filter the displayed data  
- Automatically updates the chart and axes based on user selections  

---

Technologies Used  
- JavaScript
- D3.js for data visualization  
- HTML and CSS for layout and styling  
- CSV file for storing stock data  

---

How to Use  
1. Open the `index.html` file in your browser.  
2. Choose a stock from the dropdown menu.  
3. Pick a start and end date to set the time frame.  
4. Click "Filter" to update the chart.  
5. Hover over the data points to see more info.  

---

What I Learned  
- How to work with D3.js scales and axes to map data to the chart area and update them dynamically  
- How to parse and clean CSV data, including converting date strings to JavaScript Date objects  
- How to add interactive elements like tooltips and respond to user input events  
- How to manipulate SVG elements in the DOM to update visualizations when the data changes  
- Importance of creating a simple, user-friendly interface for data exploration  
- Managing asynchronous data loading to ensure the chart renders after the data is ready  
