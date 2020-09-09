import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="text-center" style={{backgroundColor: 'pink'}}>
        <h1 className="navbar-brand" style={{fontSize: '40px'}}>
          Dressing Room
        </h1>
      </div>
    );
  }
}
