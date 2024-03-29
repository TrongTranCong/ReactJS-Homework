import React, { Component } from "react";

export default class CarFeaturesArr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  carFeaturesArr = [
    {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
    {
      id: 2,
      title: "Modern Steel",
      type: "Metallic",
      img: "./images/icons/icon-steel.jpg",
      srcImg: "images-steel/images-steel-1/",
      color: "Steel",
      price: "20,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-steel/images-steel-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-steel/images-steel-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-steel/images-steel-3/",
        },
      ],
    },
    {
      id: 3,
      title: "Lunar Silver",
      type: "Metallic",
      img: "./images/icons/icon-silver.jpg",
      srcImg: "images-silver/images-silver-1/",
      color: "Silver",
      price: "21,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-silver/images-silver-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-silver/images-silver-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-silver/images-silver-3/",
        },
      ],
    },
    {
      id: 4,
      title: "Rallye Red",
      type: "Metallic",
      img: "./images/icons/icon-red.jpg",
      srcImg: "images-red/images-red-1/",
      color: "Red",
      price: "22,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-red/images-red-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-red/images-red-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-red/images-red-3/",
        },
      ],
    },
  ];

  renderDetailsCar = () => {
    return this.carFeaturesArr.map((car, index) => {
      return (
        <tr key={index}>
          <td>{car.color}</td>
          <td>{car.price}</td>
          <td>{car.engineType}</td>
          <td>{car.displacement}</td>
          <td>{car.horsepower}</td>
          <td>{car.torque}</td>
          <td>{car.redline} </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="detailsCar">
        <h3>See More LX Features</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Color</th>
              <th>Price</th>
              <th>Engine Type</th>
              <th>Displacement</th>
              <th>Horse Power(SAE net)</th>
              <th>Torque(SAE net)</th>
              <th>Redline</th>
            </tr>
          </thead>
          <tbody>{this.renderDetailsCar()}</tbody>
        </table>
      </div>
    );
  }
}
