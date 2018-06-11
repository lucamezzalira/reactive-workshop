import React from "react";
import ReactDOM from "react-dom";
import Rx from "rxjs";
import Stock from "./Stock.jsx";

export default class App{
    constructor(){
        const cont = document.getElementById("app");
        const observable = this.generateProducer();
        const AAPL = "AAPL - Apple Inc."
        ReactDOM.render(<Stock producer$={observable} title={AAPL} />, cont);
    }

    generateProducer(){
        const stockValuesProducer = Rx.Observable.interval(50)
                                                 .map(value => {
                                                    return (Math.random() * 50 + 100).toFixed(2);
                                                 })

        return stockValuesProducer.sampleTime(500);
                            
    }
}

let app = new App();