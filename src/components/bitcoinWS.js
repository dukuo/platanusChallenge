import React from 'react';
import WebSocket from 'react-websocket';

class BitcoinWS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bid: [],
            bidSize: [],
            ask: [],
            askSize: [],
            diffPric: [],
            diffSize: []
        };
        // const w = new ws('wss://api.bitfinex.com/ws/v2', {
        //     info: {
        //         origin: 'http://localhost:8000'
        //     }
        // })

        // w.on('message', (msg) => this.setState({ bitCoinWS: msg }));
        

        // var msg = JSON.stringify({
        //     event: 'subscribe',
        //     channel: 'ticker',
        //     symbol: 'tBTCUSD'
        // })

        // w.on('open', () => w.send(msg))
    }

    handleData(data) {
        const newBid = this.state.bid;
        const newBidSize = this.state.bidSize;
        const newAsk = this.state.ask;
        const newAskSize = this.state.askSize;
        const newDiffPrice = data[1] - data[2];
        const newDiffSize = data[3] - data[4];
        
        newBid.push(data[1]);
        newBidSize.push(data[2]);
        newAsk.push(data[3]);
        newAskSize.push(data[4]);
        
        this.setState({
           bid:  newBid,
           bidSize: newBidSize,
           ask: newAsk,
           askSize: newAskSize,
           diffPrice: newDiffPrice,
           diffSize: newDiffSize
        });
    }

    render() {
        return(
            <div>
                <WebSocket url='wss://api.bitfinex.com/ws/v2' onMessage={this.handleData.bind(this)}/>
                <h3>BIDS</h3>
                <div>
                    { this.state.bid.map(function(row, i) {
                        return (
                            <span>${row}</span>
                        );
                    })}
                </div>
                <h3>ASK</h3>
                <div>
                    { this.state.ask.map(function(row, i) {
                        return (
                            <span>${row}</span>
                        );
                    })}
                </div>
                <h3>BID SIZE</h3>
                <div>
                    { this.state.bidSize.map(function(row, i) {
                        return (
                            <span>{row}</span>
                        );
                    })}
                </div>

                <h3>ASK SIZE</h3>
                <div>
                    { this.state.askSize.map(function(row, i) {
                        return (
                            <span>{row}</span>
                        );
                    })}
                </div>


                <h3>BID/ASK DIFF</h3>
                <div>
                    { this.state.diffPrice.map(function(row, i) {
                        return (
                            <span>${row}</span>
                        );
                    })}
                </div>


                <h3>BDI/ASK SIZE DIFF</h3>
                <div>
                    { this.state.diffSize.map(function(row, i) {
                        return (
                            <span>{row}</span>
                        );
                    })}
                </div>
            </div>

            
        );
    }
}

export default BitcoinWS;