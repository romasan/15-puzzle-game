import React, { Component } from 'react';
import classNames from 'classnames';
import { size, item_size } from '@config';
import "./style.scss";

const Item = ({ value, index, move }) => {
    const x = index % size;
    const y = parseInt(index / size);
    const style = {
        transform: `translate(${item_size * x}px, ${item_size * y}px)`
    };

    return (
        <span
            className={ classNames('item', 'item-' + value) }
            style={ style }
            onClick={e => move(value)}
        >
            {value}
        </span>
    );
}

export default Item;