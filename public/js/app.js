const URL = 'https://api.pancakeswap.info/api/v2/tokens/'
const UUS = 'https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'
const searchCoin = (coin, data) => {
    for (const [key, value] of Object.entries(data)) {
        //console.log(`${key}: ${value}`);
        for (const [key1, value2] of Object.entries(value)) {
            //console.log(`${key1}: ${value2}`);
            if (value2.name === coin)
                console.log(value2.name + " " + value2.price)
        }
    }
}
fetch(URL)
    .then(response => response.json())
    .then(data => {
        searchCoin('PancakeSwap Token', data)
    })
    .catch(error => console.log(error))