import React, { Component } from "react";
import Category from "../components/category";
import Products from "../components/products";
import Model from "../components/model";

export default class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-6">
            <div className="mb-3" style={{ backgroundColor: "pink" }}>
              <Category />
            </div>
            <div className="card-deck row-cols-md-3">
              <Products />
            </div>
          </div>
          <div className="col-sm-6">
            <Model />
          </div>
        </div>
      </div>
    );
  }
}
