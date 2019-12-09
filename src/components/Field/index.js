import React from 'react';
import Item from "./components/Item";
import { size, item_size } from "@config";
import classNames from "classnames";
import "./style.scss";

const Field = ({ field, move, win }) => {
    const side = size * item_size;
    const style = {
        width: `${side}px`,
        height: `${side}px`,
        marginLeft: `${-side / 2}px`
    };

    return (
        <div className="field-wrap">
            <div className={classNames('field', {win})} style={ style }>
                {field.map((item, index) => (
                    <Item
                        key={item}
                        value={item}
                        index={index}
                        move={move}
                    />
                ))}
            </div>
        </div>
    );
}

export default Field;