import React, { Component } from "react";

export default class Product extends Component {
  constructor(){
  super()
  this.state=this.props
  }
  render() {
    // console.log(this.props.product);

    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"># {this.props.product.id}</div>

            <h5 className="pt-5 border-top">{this.props.product.productName}</h5>

            <div>$ {this.props.product.price}</div>
          </div>
          <div className="card-footer text-right">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
