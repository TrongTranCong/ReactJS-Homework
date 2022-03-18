import React, { Component } from "react";
import CarFeaturesArr from "./CarFeaturesArr";
export default class BaiTapChonXeAdvanced extends Component {
  
  render() {
    return (
      <div>
        <h1 className="text-center bg-info border border-dark">
          Select Car App
        </h1>
        <div className="row">
          <div className="col-8">
            <img
              className="img-fluid"
              src="./img/CarBasic/products/black-car.jpg"
              alt=""
            />
            <CarFeaturesArr/>
            {/* <div className="detailsCar">
              <h3>See More LX Features</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Engine Type</th>
                    <th>Displacement</th>
                    <th>Horse Power(SAE net)</th>
                    <th>Torque(SAE net)</th>
                    <th>Redline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>22,250$</td>
                    <td>In-Line 4-Cylinder</td>
                    <td>1996 cc</td>
                    <td>158 @ 6500 rpm</td>
                    <td>138 lb-ft @ 4200 rpm</td>
                    <td>6700 rpm</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>

          <div className="col-4">
            <div className="col col-cols-2">
              <div className="col p-0 border border-primary">
                <h3 className="pl-2 bg-warning border-bottom">
                  Exterior Color
                </h3>
                <div className="col col-cols-4">
                  <div className="col">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-red.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Rally Red</h4>
                        <p> Metallic</p>
                      </div>
                    </div>
                  </div>
                  <div className="col my-3">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-silver.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Lunar Silver</h4>
                        <p> Metallic</p>
                      </div>
                    </div>
                  </div>
                  <div className="col my-3">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-steel.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Modern Steel</h4>
                        <p> Metallic</p>
                      </div>
                    </div>
                  </div>
                  <div className="col my-3">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-black.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Crystal Black</h4>
                        <p> Pearl</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-0 border border-primary">
                <h3 className="pl-2 bg-warning border-bottom">Wheels</h3>
                <div className="col col-cols-4">
                  <div className="col">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-wheel-1.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Alloy Wheels</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col my-3">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-wheel-2.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Black Alloy Wheels w/ Red Lip</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col my-3">
                    <div className="row row-cols-4 border border-primary">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src="./images/icons/icon-wheel-3.jpg"
                          style={{ width: 55 }}
                          alt=""
                        />
                      </div>
                      <div className="col-8 ">
                        <h4>Black Alloy Wheels</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
