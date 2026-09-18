const btcDisplay = document.querySelector('.btc');

function updateBTCPrice() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(btcjson => {
            btcDisplay.innerText = `R$ ${btcjson.BRL.buy}`.replace('.', ',');
        })
        .catch(error => {
            console.error('Error fetching BTC price:', error);
            btcDisplay.textContent = 'Error fetching price';
        });
}

// setInterval(updateBTCPrice, 60000); // Update every 60 seconds

updateBTCPrice();