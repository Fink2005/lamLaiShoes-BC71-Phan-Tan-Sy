import React, { Component } from "react";

export default class Cart extends Component {
  renderTable = () => {
    let { DataCart ,ClickToDelete, ClickToUpdate } = this.props;

    return DataCart.map((item, index) => {
        console.log(DataCart)
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img src={item.image} alt={item.name} style={{ width: "50px" }} />
          </td>
          <td className="d-flex">
            <button onClick={() => ClickToUpdate(item.id, 1) } className="btn btn-warning">+</button>
           <div className="card px-2 pt-1 mx-2">
           {item.Quantity}
           </div>
           <button onClick={() => ClickToUpdate(item.id, -1)} className="btn btn-primary">-</button>
          </td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => ClickToDelete(item.id)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };    
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
