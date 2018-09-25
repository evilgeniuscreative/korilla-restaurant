import React, { Component } from 'react';
import './Receipt.css';

class Receipt extends React.Component {
  render () {
    return (
      <div className="receipt">
        <h2>{this.props.receipt.person}</h2>
        <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
        <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
        <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
        <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
        <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
        <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
      </div>
    )
  }
}

export default Receipt;