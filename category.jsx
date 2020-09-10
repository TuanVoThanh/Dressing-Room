import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    return this.props.category.map((item, index) => (
      <div class="btn-group" role="group" key={index}>
        <button
          onClick={() => this._selectedTab(item.type)}
          type="button"
          className={
            this.props.selectedType === item.type
              ? "btn btn-success text-white"
              : "btn"
          }
          style={{
            boxShadow: "none",
            transition: "0.5s",
            color: 'black',
            borderRadius: 0,
            fontWeight: '600'
          }}
        >
          {item.showName}
        </button>
      </div>
    ));
  }

  _selectedTab = (payload) => {
    this.props.dispatch({
      type: "SET_CATEGORY",
      payload,
    });
  };
}

const mapStateToProps = (state) => ({
  category: state.category,
  selectedType: state.selectedType,
});

export default connect(mapStateToProps)(Category);
