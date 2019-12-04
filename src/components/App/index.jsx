import React, { Component } from 'react';
import update from 'immutability-helper';
import classNames from 'classnames';
import Item from './item.jsx';
import { genField } from './0x10.js';

import './style.scss';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      field: genField()
    };
  }

  /*
  componentDidMount () {
    this.generateField();
  }

  generateField = () => {

    this.setState({items});
  }
  */

  // this.setState(state => ({'items': update(state.items, {
  //   [y]: {
  //     [x]: {
  //       'open': {$set: true}
  //     }
  //   }
  // })}));

  render () {

    const { field } = this.state;

    return (
      <div className="app">
        <div className="header">15 puzzle</div>
        <div className="field">
          { field.map((item, index) => <Item
            key={item}
            value={item}
            index={index}
          />) }
        </div>
      </div>
    );
  }
}

export default App;
