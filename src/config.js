const config = {   
   API_KEY : "L4TQD9ACJ8QWMEJA"
}

const getStockAPI = (STOCK_SYMBOL) => {
     return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${STOCK_SYMBOL}&outputsize=compact&apikey=${config.API_KEY}`;
}

export default getStockAPI;