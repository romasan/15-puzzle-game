import React, { useEffect } from 'react';
import Item from "./components/Item";
import { size, item_size } from "@config";
import classNames from "classnames";
import "./style.scss";

const eKeyUp = f => (() => (
    document.addEventListener('keyup', f),
    () => (document.removeEventListener('keyup', f))
));

const Field = ({ field, move, win }) => {
    const side = size * item_size;
    const style = {
        width: `${side}px`,
        height: `${side}px`,
        marginLeft: `${-side / 2}px`
    };

    const keys = ({ keyCode }) => {
        const direction = ['left', 'up', 'right', 'down'][keyCode - 37];
        console.log({direction});
    }

    useEffect(eKeyUp(keys));

    const list = field
        .map((value, index) => ({ value, index }))
        .sort((a, b) => (a.value > b.value) - .5);

    return (
        <div className="field-wrap">
            <div className={classNames('field', { win })} style={ style }>
                {list.map(({value, index}) => (
                    <Item
                        key={value}
                        value={value}
                        index={index}
                        move={move}
                    />
                ))}
            </div>
        </div>
    );
}

export default Field;