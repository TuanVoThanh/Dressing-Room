import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./productItem";

class Products extends Component {
  render() {
    return this.props.products
      .filter((product) => product.type === this.props.selectedType)
      .map((product, index) => (
        <div className="col mb-4" key={index}>
          <ProductItem product={product} />
        </div>
      ));
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  selectedType: state.selectedType,
});

export default connect(mapStateToProps)(Products);
