const cryptoContainer = document.getElementById("cryptos");

const addShit = (arr) => {
  arr.map(({ name, symbol, priceUsd, explorer }, index) => {
    const dot = priceUsd.indexOf(".");
    let crypto = document.createElement("a");
    crypto.innerText = `${name} (${symbol}): ${priceUsd.slice(0, dot + 3)} USD`;
    crypto.className = "coin";
    crypto.href = explorer;
    crypto.target = '_blank'
    if (index < 10) cryptoContainer.appendChild(crypto);
  });
};

const something = async () => {
  const request = {
    method: "GET",
    "Content-Type": "application/json; charset=utf-8",
    Connection: "keep-alive",
  };
  const promise = await fetch("https://api.coincap.io/v2/assets", request);
  const results = await promise.json();
  console.log(results);
  addShit(results.data);
};

window.onload = something();
