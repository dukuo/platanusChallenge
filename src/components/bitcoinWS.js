import ws from 'ws';
import React from 'react';

class bitcoinWS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        bitCoinWS: []
        };
        const w = new ws('wss://api.bitfinex.com/ws/v2')
        w.on('message', (msg) => console.log(msg));

        var msg = JSON.stringify({
            event: 'subscribe',
            channel: 'ticker',
            symbol: 'tBTCUSD'
        })

        w.on('open', () => w.send(msg))
    }

    render() {
        return(
            <p>{this.state.bitCoinWS}</p>
        );
    }
}

export default bitcoinWS;