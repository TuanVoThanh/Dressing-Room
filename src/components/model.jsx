import React, { Component } from "react";
import classes from "../css/style.module.css";
import { connect } from "react-redux";

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contain: "images/background/background_998.jpg",
      body: "images/allbody/bodynew.png",
      bikinitop: "images/allbody/bikini_branew.png",
      bikinibottom: "images/allbody/bikini_pantsnew.png",
      model: "images/model/1000new.png",
      feetleft: "images/allbody/feet_high_leftnew.png",
      feetright: "images/allbody/feet_high_rightnew.png",
      feetStyle: '',
      handbagStyle: '',
      hairStyle: '',
      necklaces: '',
    };
  }
  render() {
    return (
      <div
        class={classes.contain}
        style={{ background: `url(${this.state.contain})` }}
      >
        <div
          class={classes.body}
          style={{ background: `url(${this.state.body})` }}
        ></div>
        <div
          class={classes.model}
          style={{ background: `url(${this.state.model})` }}
        ></div>
        <div
          class={classes.bikinitop}
          style={{ background: `url(${this.state.bikinitop})` }}
        ></div>
        <div
          class={classes.bikinibottom}
          style={{ background: `url(${this.state.bikinibottom})` }}
        ></div>
        <div
          class={classes.feetleft}
          style={{ background: `url(${this.state.feetleft})` }}
        ></div>
        <div
          class={classes.feetright}
          style={{ background: `url(${this.state.feetright})` }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{
            backgroundImage: `url(${this.props.model.topclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.bikinibottom}
          style={{
            backgroundImage: `url(${this.props.model.botclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.feetStyle}
          style={{
            backgroundImage: `url(${this.props.model.shoes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.handbagStyle}
          style={{
            backgroundImage: `url(${this.props.model.handbags})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.hairStyle}
          style={{
            backgroundImage: `url(${this.props.model.hairstyle})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.contain}
          style={{
            backgroundImage: `url(${this.props.model.background})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.necklaces}
          style={{
            backgroundImage: `url(${this.props.model.necklaces})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  model: state.model,
});

export default connect(mapStateToProps)(Model);
