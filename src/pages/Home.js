import React, { Component } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { withWrap } from "../utils/hocs";

class Home extends Component {
  render() {
    return (
      <div className="wrap-home">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default withWrap(Home);
