import React, { Component } from 'react';
import classNames from 'classnames';
import { size, item_size } from './conf.json';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, index } = this.props;
        const x = index % size;
        const y = parseInt(index / size);
        const style = {
            top: item_size * y + 'px',
            left: item_size * x + 'px'
        };
        return <span
            className={ classNames('item', 'item-' + value) }
            style={ style }
        >
            {value}
        </span>;
    }
}