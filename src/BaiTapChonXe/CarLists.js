import React, { Component } from "react";

export default class CarLists extends Component {
  

  carListsArr = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./img/CarBasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "steel car",
      price: 2000,
      img: "./img/CarBasic/products/steel-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 2000,
      img: "./img/CarBasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "red car",
      price: 1000,
      img: "./img/CarBasic/products/red-car.jpg",
    },
  ];
  renderTableCar = () =>
    this.carListsArr.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>
            <img
              style={{ width: 100, height: 50 }}
              src={item.img}
              alt={item.img}
            />
          </td>
        </tr>
      );
    });
  render() {
    return (
      <div>
        <h3 className="text-center">CarLists</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>{this.renderTableCar()}</tbody>
        </table>
      </div>
    );
  }
}
