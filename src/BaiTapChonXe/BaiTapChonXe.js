import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  constructor(props) {
    super(props);
    this.state = { colorCar: "./img/CarBasic/products/black-car.jpg" };
  }
  renderImage = (color) =>
    this.setState({ colorCar: `./img/CarBasic/products/${color}-car.jpg` });

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>BaiTapChonXe</h3>
        <div className="mt-5 row">
          <div className="col-7">
            <div className="card">
              <img src={this.state.colorCar} className="img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-5">
            <h3>Chọn màu xe:</h3>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.renderImage("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-light mx-1"
              onClick={() => {
                this.renderImage("silver");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-secondary mx-1"
              onClick={() => {
                this.renderImage("steel");
              }}
            >
              Grey
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.renderImage("black");
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}
