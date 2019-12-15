import React, { Component } from "react";
import Field from "@components/Field";
import { genField, handMove, checkWin } from "./helpers/field.js";
import data from "./data";
import "./style.scss";

@data
class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      field: [],
      moves: 0
    };
  }

  componentDidMount () {
    // this.setState(state => ({
    //   field: genField()
    // }));
    this.props.genField();
  }

  move = v => {
    this.setState(state => handMove(state, v));
  }

  render () {

    const { field } = this.props;
    
    const win = checkWin(field);

    return (
      <div className="main">
        <div className="header">15 puzzle</div>
        <Field field={field} move={this.move} win={win}/>
        <div className="stat">Ходов: {this.state.moves}</div>
      </div>
    );
  }
}

export default Main;
