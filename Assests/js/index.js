let trendingCoins = document.querySelector(".top-coins");


//TODO Gives the btc price to calculate the each coin's price in ruppes
async function btcPriceFunc() {
    const data = await fetchData("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
    const btcPrice =  data.bitcoin.inr;
    return btcPrice
}

//Todo fetch data from API
async function fetchData(url) {
    let data = await fetch(url)
    data = data.json();
    return data;
}

//TODO display them on UI on window onload
async function windowload() {
    const btcPrice = await btcPriceFunc()
    const allTrendingUrl = "https://api.coingecko.com/api/v3/search/trending";
    let allTrending = await fetchData(allTrendingUrl)
    allTrending.coins.forEach(async (coin) => {
        let coinPrice  = Math.round(coin.item.price_btc*btcPrice*10000)/10000
        let div = document.createElement("div")
        div.classList.add("coin")
        div.innerHTML = `
        <img src="${coin.item.thumb}" alt="" class = "coin-logo">
        <div class="details">
            <h1>${coin.item.name} (${coin.item.symbol})</h1>
            <p>₹ ${coinPrice}</p>
        </div>`
        trendingCoins.appendChild(div);
    });
}

windowload()