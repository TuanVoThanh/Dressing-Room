import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "./mainContent";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContent />
        <Footer />
      </React.Fragment>
    );
  }
}
