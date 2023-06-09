import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import "./BaiTapThuKinh.css";

export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlasses(glassesItem);
          }}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer", marginLeft: "5px" }}
          key={index}
          src={glassesItem.url}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    const keyframes = `@keyframes anymChangeGlasses${Date.now()}{
        from{
            width: 0;
            transform:rotate(45deg);
        }to{
            width: 150px;
            transform:rotate(0deg);
        }
    }`;

    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "120px",
      opacity: "0.7",
      transform: "rotate(0deg)",
      animation: `anymChangeGlasses${Date.now()} 1s`,
    };

    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "318px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,127,0,.5)",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          background: "url(./img/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <style>{keyframes}</style>

        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", minHeight: "2000px" }}
        >
          <h3
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            className="text-center text-light"
          >
            Try glass add online
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./img/model.jpg"
                    alt="model"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute glassesStyle"
                    src={this.state.glassesCurrent.url}
                    alt=""
                  />
                  <div style={infoGlasses} className="position-relative">
                    <span
                      style={{ color: "#ABB2FF", fontSize: "17px" }}
                      className="font-weight-bold text-"
                    >
                      {this.state.glassesCurrent.name}
                    </span>
                    <br />
                    <span
                      style={{ fontSize: "14px", fontWeight: "400" }}
                      className="font-weight-bold text-white"
                    >
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./img/model.jpg"
                  alt="model"
                />
              </div>
            </div>
          </div>
          {/*
            Div chứa các kính được chọn
           */}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
