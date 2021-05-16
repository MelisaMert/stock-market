import React from 'react';
import Plot from 'react-plotly.js';
import getStockAPI from './config';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           stockChartXValues: [],
           stockChartYValues: []
        }
    }

    fetchStock(){
        
        const pointerToThis = this;

        let StockSymbol = 'AMZN';
        let API_Call = getStockAPI(StockSymbol);

        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
        .then(function(response){
             return response.json()
        })
        .then(function(data){
            console.log(data)

            for(var key in data['Time Series (Daily)']){
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(data['Time Series (Daily)']
                [key][`1. open`]);
            }

            pointerToThis.setState({
                stockChartXValues: stockChartXValuesFunction,
                stockChartYValues: stockChartYValuesFunction
            })

        })
    }

    componentDidMount(){
        this.fetchStock();
    }
    render(){
        return (
            <div>
             <h1>Stock Market</h1>
             <Plot
                data={[
                    {
                    x: this.state.stockChartXValues,
                    y: this.state.stockChartYValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'}
                    },
                ]}
                layout={{width: 800, height: 400, title: 'A Fancy Plot' }}
             />
            </div>
        )
    }
}

export default Stock;