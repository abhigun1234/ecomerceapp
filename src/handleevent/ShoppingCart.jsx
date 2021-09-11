import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {

// Executes when component is mounted
constructor(props){
  console.log("Constructor invoked parent")
  super(props)
  this.state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
      { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
      { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
      { id: 6, productName: "Dell Monitor", price: 880, quantity: 0 },
    ],
  };
}

// handleIncrement(product,value){

//   console.log("handleIncrement")
// }

  render() {
    console.log("render invoked parent")
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} product={prod} onIncrement={this.handleIncrement}>
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-primary">Add To Cart</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //Executing after all methods of the child
  componentDidMount(){
    // http request
    console.log("componentDidMount of parent")
  }
  // handle incriment 

  handleIncrement=(product)=>{
    console.log("product",product)


  }
}
