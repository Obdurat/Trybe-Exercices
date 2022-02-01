const cryptoContainer = document.getElementById('cryptos');

const something = async () => {
    const request = {
        'method': 'GET',        
        'Content-Type': 'application/json; charset=utf-8',
        'Connection': 'keep-alive',                               
      };
    const promise = await fetch('https://api.coincap.io/v2/assets', request);
    const results = await promise.json(); 
    results.data.map(({ name, symbol, priceUsd }, index) => {
        let crypto = document.createElement('p');
        crypto.innerText = `${name} (${symbol}): ${priceUsd}`;
        crypto.className = 'coin';
        if (index <= 10) cryptoContainer.appendChild(crypto);               
    });       
}

window.onload = something();