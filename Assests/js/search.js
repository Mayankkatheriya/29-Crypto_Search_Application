let coinContainer = document.querySelector("#coinData");
let searchbtn = document.querySelector(".searchCoin");
let searchinput = document.querySelector(".search-content input");

async function fetchData(url) {
  let data = await fetch(url);
  return await data.json();
}

searchbtn.addEventListener("click", async () => {
  let searchStr = searchinput.value;
  let url = `https://api.coingecko.com/api/v3/search?query=`+ searchStr;
  let data = await fetchData(url);
  appendcards(data.coins);
});

function appendcards(data) {
  if (data.length == 0) {
    coinContainer.innerHTML = `<h1>No Coin Found</h1>`;
  } else {
    coinContainer.innerHTML = ``;
    let index = 1;
    data.forEach((ele) => {
      if (index < 10) {
        index = index + "&nbsp;&nbsp;";
      }
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
            <p>${index}</p>
            <img src="${ele.thumb}" alt="">
            <h3>${ele.name}</h3>
            <h3>(${ele.symbol})</h3>
            <a href="./details.html?id=${ele.id}">More Info</a>`;
      coinContainer.appendChild(div);
      index = parseInt(index) + 1;
    });
  }
}
