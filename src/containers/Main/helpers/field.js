import { size } from "@config";
import { get, chunk, concat } from "lodash";

/*
export const isSolvable = field => {
    const e = parseInt( (field.findIndex(item => item === 0) + 1) / size );
    let k = 0;
    for (let startrange = 0; startrange < field.length; startrange++) {
        for (let i = startrange + 1; i < field.length; i++) {
            if (field[startrange] > field[i]) {
                k++;
                // k += field[i]
            }
        }
    }
    console.log({e, k, sum: k + e, even: ((k + 2) / 2) === 0})
}
*/

export const checkWin = field => {
    return field.every((e, i, a) => (i === a.length - 1 ? e === 0 : e === i + 1));
}

// const makeRandomStep = field2d => ()
const findPoint = (field, value, index = field.findIndex(item => item === value)) => ({
    x: index % size,
    y: parseInt(index / size),
});

const findZeroPoint = field => findPoint(field, 0);

const around = (field, p) => {
    const f2d = chunk(field, size);
    return [
        get(f2d, [p.y - 1, p.x]),
        get(f2d, [p.y + 1, p.x]),
        get(f2d, [p.y, p.x - 1]),
        get(f2d, [p.y, p.x + 1])
    ].filter(item => typeof item === 'number');
}

const swap = (field, from, to) => {
    const f2d = chunk(field, size);
    [
        f2d[from.y][from.x], f2d[to.y][to.x]
    ] = [
        f2d[to.y][to.x], f2d[from.y][from.x]
    ];
    return concat(...f2d);
}

export const handMove = (state, value) => {
    const { field, moves } = state;
    const point = findPoint(field, value);
    const list = around(field, point);
    const zeroIsBeside = list.some(item => item === 0);
    if (zeroIsBeside) {
        const to = findZeroPoint(field);
        return {
            field: swap(field, point, to),
            moves: moves + 1
        };
    } else {
        return state;
    }
}

const makeMoves = field => {
    let history = [];
    do {
        field = makeMove(field, history);
    } while (history.length < 30 || field[field.length - 1] !== 0)
    // console.log({history})
    return field;
}

const makeMove = (field, history) => {
    const zerop = findZeroPoint(field);
    const list = around(field, zerop);
    let randIndex = -1;
    while (randIndex < 0 || list[randIndex] === history[history.length - 1]) {
        randIndex = parseInt(Math.random() * list.length);
    }
    history.push(list[randIndex]);
    const randp = findPoint(field, list[randIndex]);
    return swap(field, zerop, randp);
}

export const genField = () => {

    let field = new Array(size * size - 1)
        .fill()
        .map((e, i) => i + 1)
        .concat(0);
    return makeMoves(field);
}