import React from "react";
import smallImage from "./piano_key_img/sk.png";
import smallImagePress from "./piano_key_img/skp.png";
import "./index.css";

class SmallKey extends React.Component {
  render() {
    return (
      <div className={this.props.name}>
        <h3 className="whichKey">{this.props.whichKey}</h3>
        <img
          className={this.props.keyType}
          src={this.props.downKey ? smallImagePress : smallImage}
          alt={"small key"}
          onMouseDown={(e) => (e.currentTarget.src = smallImagePress)}
          onMouseUp={(e) => (e.currentTarget.src = smallImage)}
          onClick={this.props.sound}
        ></img>
      </div>
    );
  }
}

export default SmallKey;
