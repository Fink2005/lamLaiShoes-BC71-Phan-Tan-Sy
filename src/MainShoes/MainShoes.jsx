import React, { Component } from 'react';
import { DataShoes } from './DataShoes';
import ListShoes from './ListShoes';
import Cart from './Cart';

export default class MainShoes extends Component {
  state = {
    DataCart: []
  };

  ClickToAdd = (shoes) => {
    let cloneCart = [...this.state.DataCart]; 
    let foundItem = cloneCart.find(item => item.id === shoes.id);
    console.log("🚀 ~ MainShoes ~ foundItem:", foundItem)
    if (foundItem) {
      foundItem.Quantity++;
    } else {
      cloneCart.push({ ...shoes, Quantity: 1 });
    }

    this.setState({
      DataCart: cloneCart
    });

    console.log(this.state.DataCart);
  };

  ClickToDelete = (shoeId) => {
    let cloneCart = [...this.state.DataCart];
    let filterCart = cloneCart.filter(item => item.id !== shoeId);
    this.setState({
      DataCart: filterCart
    });
  };

  ClickToUpdate = (item1, item2) => {
    let cloneCart = [...this.state.DataCart]
    let updateCart = cloneCart.find((item) => item.id === item1)
    console.log("🚀 ~ MainShoes ~ updateCart:", updateCart)
    if (updateCart) {
    updateCart.Quantity += item2
      this.setState ({
        DataCart: cloneCart
    })
    }
  
  }

  render() {
    let { DataCart } = this.state;
    return (
      <div className='row'>
        <ListShoes DataShoes={DataShoes} ClickToAdd={this.ClickToAdd} />
        <Cart DataCart={DataCart} ClickToDelete={this.ClickToDelete} ClickToUpdate={this.ClickToUpdate} />
      </div>
    );
  }
}
