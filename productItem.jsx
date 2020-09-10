import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const { name, imgSrc_jpg } = this.props.product;
    return (
      <div className="card text-center mx-0">
        <img className="card-img-top" src={imgSrc_jpg} alt="imgItem" />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <button
            onClick={() => this._selectedItem(this.props.product)}
            className="btn btn-success btn-sm"
            style={{
              boxShadow: "none",
              fontWeight: "600",
            }}
          >
            Thử Ngay
          </button>
        </div>
      </div>
    );
  }

  _selectedItem = (item) => {
    this.props.dispatch({
      type: "CHANGE_ITEM",
      payload: {
        type: item.type,
        img: item.imgSrc_png,
      },
    });
  };
}

export default connect()(ProductItem);
