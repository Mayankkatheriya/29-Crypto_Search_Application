function loadDetail() {
    const url_string = window.location.href;
    const url_obj = new URL(url_string);
    const params = new URLSearchParams(url_obj.search);
  
    if(!params.has('id')) {
      window.location.href = "./index.html";
    }
  
    fetch(`https://api.coingecko.com/api/v3/coins/${params.get('id')}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    .then(data=>data.json())
    .then(render);
  
  }

  function render(data) {
    let logo = data.image.large;
    let name = `${data.name} (${data.symbol})`
    let inrPrice = data.market_data.current_price.inr
    let usdPrice = data.market_data.current_price.usd
    let eurPrice = data.market_data.current_price.eur
    let gbpPrice = data.market_data.current_price.gbp
    let description = data.description.en

    
    document.getElementById("coin-img").src=logo;
    document.getElementById("coin-name").innerHTML=`${name}`;
    document.getElementById("inr-price").innerText=`${inrPrice}`;
    document.getElementById("usd-price").innerText=`${usdPrice}`;
    document.getElementById("eur-price").innerText=`${eurPrice}`;
    document.getElementById("gbp-price").innerText=`${gbpPrice}`;
    document.getElementById("coin-description").innerHTML=`${description}`;
    // renderChart(data);
  }


// function renderChart(prices) {
//   const data = {
//     labels: ["30days", "14days", "7days", "24hrs", "1hrs"],
//     datasets: [
//       {
//         label: "Prices(%)",
//         borderColor: "rgb(0, 0, 0)",
//         backgroundColor: ["rgba(182, 240, 255, 0.637)", "#36a2eb", "#cc65fe", "#ffce56", "#95f0cd"],
//         borderWidth: 1,
//         data: [`${prices.market_data.price_change_percentage_30d_in_currency["inr"]}`, `${prices.market_data.price_change_percentage_14d_in_currency["inr"]}`, `${prices.market_data.price_change_percentage_7d_in_currency["inr"]}`, `${prices.market_data.price_change_percentage_24h_in_currency["inr"]}`, `${prices.market_data.price_change_percentage_1h_in_currency["inr"]}`],
//         fill: true,
//         pointStyle: 'circle',
//         pointRadius: 4,
//         pointHoverRadius: 8,
//       },
//     ],
//   };
  
//   //TODO Chart Configurations
//   let config = {
//     type: "lbar",
//     data: data,
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         x: {
//           grid: {
//             display: false,
//           },
//           title: {
//             display: true,
//             text: "Time(s)",
//             color: "#ffce56",
//             font: {
//               family: "Comic Sans MS",
//               size: 20,
//               weight: "bold",
//               lineHeight: 1.2,
//             },
//             padding: { top: 20, left: 0, right: 0, bottom: 0 },
//           },
//         },
//         y: {
//           beginAtZero: false,
//           suggestedMin: 0,
//           suggestedMax: 30,
//           grid: {
//             display: false,
//           },
//           title: {
//             display: true,
//             text: "Value",
//             color: "#ffce56",
//             font: {
//               family: "Comic Sans MS",
//               size: 20,
//               weight: "bold",
//               lineHeight: 1.2,
//             },
//             padding: { top: 20, left: 0, right: 0, bottom: 0 },
//           },
//         },
//       },
//       layout: {
//         padding: 10,
//       },
//       plugins: {
//         tooltip: {
//           events: ["mousemove"],
//           callbacks: {
//             label: function (context) {
//               return `Value: ${context.parsed.y}`;
//             },
//             labelColor: function (context) {
//               return {
//                 borderColor: "rgb(145, 200, 55)",
//                 backgroundColor: "rgb(145, 200, 55)",
//                 borderWidth: 2,
//                 borderDash: [2, 2],
//                 borderRadius: 10,
//               };
//             },
//             labelTextColor: function (context) {
//               return "#fff";
//             },
//           },
//         },
//         title: {
//           display: true,
//           text: "Rndom Data Chart",
//           color: "#ffce56",
//         },
//       },
//     },
//   };
//   Chart.defaults.font.size = 16;
//   Chart.defaults.borderColor = "#aeebff";
//   Chart.defaults.color = "#aeebff";
  
//   //TODO Create the chart
//   const ctx = document.getElementById("myChart").getContext("2d");
//   new Chart(ctx, config);
// }


  window.onload = function() {
    loadDetail();
  }