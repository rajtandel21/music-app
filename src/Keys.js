import React from "react";
import BigKey from "./BigKey";
import SmallKey from "./SmallKey";
import "./index.css";

import { Howl, Howler } from "howler";
import a4 from "./piano_key/a4.mp3";
import a4s from "./piano_key/a4s.mp3";
import b4 from "./piano_key/b4.mp3";
import c4 from "./piano_key/c4.mp3";
import c4s from "./piano_key/c4s.mp3";
import d4 from "./piano_key/d4.mp3";
import d4s from "./piano_key/d4s.mp3";
import e4 from "./piano_key/e4.mp3";
import f4 from "./piano_key/f4.wav";
import f4s from "./piano_key/f4s.mp3";
import g4 from "./piano_key/g4.mp3";
import g4s from "./piano_key/g4s.mp3";

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: ["c4", c4, "z", false],
      1: ["c4s", c4s, "s", false],
      2: ["d4", d4, "x", false],
      3: ["d4s", d4s, "d", false],
      4: ["e4", e4, "c", false],
      5: ["f4", f4, "v", false],
      6: ["f4s", f4s, "g", false],
      7: ["g4", g4, "b", false],
      8: ["g4s", g4s, "h", false],
      9: ["a4", a4, "n", false],
      10: ["a4s", a4s, "j", false],
      11: ["b4", b4, "m", false],
    };
    this.keyUsed = this.keyUsed.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  playSound = (key) => {
    const sound = new Howl({
      src: [key],
      autoplay: false,
      loop: false,
    });
    sound.play();
  };

  upDateState(key) {
    this.setState((prevState) => ({
      [key]: prevState[key].map((item, index) => {
        if (index === 3) {
          return !item;
        } else {
          return item;
        }
      }),
    }));
  }

  keyUsed = (event) => {
    Object.keys(this.state).forEach((note) => {
      if (event.key === this.state[note][2]) {
        return [this.playSound(this.state[note][1]), this.upDateState(note)];
      }
    });
  };

  afterKeyUse = (event) => {
    Object.keys(this.state).forEach((note) => {
      if (event.key === this.state[note][2]) {
        return this.upDateState(note);
      }
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyUsed, false);
    document.addEventListener("keyup", this.afterKeyUse, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyUsed, false);
    document.removeEventListener("keyup", this.afterKeyUse, false);
  }

  render() {
    Howler.volume(0.5);

    return (
      <div className="allKeys">
        {Object.keys(this.state).map((key, index) => {
          if (this.state[key][0].includes("s")) {
            return (
              <SmallKey
                name={`smallKeys-${index}`}
                key={index}
                keyType={this.state[key][0]}
                sound={() => this.playSound(this.state[key][1])}
                downKey={this.state[key][3]}
                whichKey={this.state[key][2]}
              />
            );
          } else {
            return (
              <BigKey
                name={`bigKeys-${index}`}
                key={index}
                keyType={this.state[key][0]}
                sound={() => this.playSound(this.state[key][1])}
                downKey={this.state[key][3]}
                whichKey={this.state[key][2]}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default Keys;
