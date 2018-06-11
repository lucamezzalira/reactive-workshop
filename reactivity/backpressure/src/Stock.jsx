import React from "react";

export default class Stock extends React.Component{
    constructor(){
        super();
        this.state = {stockValue: 0};
    }

    componentDidMount(){
        this.props.producer$.subscribe(this.setStockValue.bind(this));
    }

    setStockValue(value){
        this.setState({stockValue: value});
    }

    render(){
        return (
            <div className="stock">
                <h2>{this.props.title}</h2>
                <p>${this.state.stockValue}</p>
            </div>
        )
    }
}