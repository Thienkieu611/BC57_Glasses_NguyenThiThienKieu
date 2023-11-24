import React, { Component } from "react";

export default class ContentGlasses extends Component {
  state = {
    imgGlasses: "",
  };

  changeGlasses = (numberGlasses) => {
    this.setState({
      imgGlasses: `./img/v${numberGlasses}.png`,
    });
  };
  render() {
    return (
      <div className="content-glasses">
        <div className="model container">
          <div className="model-img model-left ">
            <img src="/img/model.jpg" alt="..." />
            <div className="overlay-model-left">
              <h5>FENDI F8750</h5>
              <p>
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.
              </p>
            </div>
          </div>
          <div className="model-img model-right">
            <img src="/img/model.jpg" alt="..." />
            <div className="glasses">
              <img src={this.state.imgGlasses} alt="" />
            </div>
          </div>
        </div>
        <div className="list-glasses">
          <div className="row">
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("1");
                }}
              >
                <img src="/img/v1.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("2");
                }}
              >
                <img src="/img/v2.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("3");
                }}
              >
                <img src="/img/v3.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("4");
                }}
              >
                <img src="/img/v4.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("5");
                }}
              >
                <img src="/img/v5.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("6");
                }}
              >
                <img src="/img/v6.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("7");
                }}
              >
                <img src="/img/v7.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("8");
                }}
              >
                <img src="/img/v8.png" alt="g1" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  this.changeGlasses("9");
                }}
              >
                <img src="/img/v9.png" alt="g1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
