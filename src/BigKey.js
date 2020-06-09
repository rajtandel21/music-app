import React from "react";
import bigImage from "./piano_key_img/bk.png";
import bigImagePress from "./piano_key_img/bkp.png";
import "./index.css";

class BigKey extends React.Component {
  render() {
    return (
      <div className={this.props.name}>
        <h3 className="whichKey">{this.props.whichKey}</h3>
        <img
          className={this.props.keyType}
          src={this.props.downKey ? bigImagePress : bigImage}
          alt={"big key"}
          onMouseDown={(e) => (e.currentTarget.src = bigImagePress)}
          onMouseUp={(e) => (e.currentTarget.src = bigImage)}
          onClick={this.props.sound}
        ></img>
      </div>
    );
  }
}

export default BigKey;
