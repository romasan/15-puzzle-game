import { size } from './conf.json';

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


//     let N = 0;
//   let e = 0;
//   for (let i = 0; i < field.length; i++) {
//    /* Определяется номер ряда пустой клетки (считая с 1). */
//    if (field[i] == 0) {
//     e = parseInt(i / size) + 1;
//    }
//    if (i == 0)
//     continue;
//    /* Производится подсчет количества клеток меньших текущей */
//    for (let j = i + 1; j < field.length; j++) {
//     if (field[j] < field[i]) {
//      N++;
//     }
//    }
//   }
//   N = N + e;
//   /* Если N является нечётной, то решения головоломки не существует. */
// //   return (N & 1) == 0; // Первый бит четного числа равен 0
//     console.log({e, N})
}

export const genField = () => {
    // const field = [
    //     1, 2, 3, 4,
    //     5, 6, 7, 8,
    //     9, 10, 11, 12,
    //     13, 15, 14, 0
    // ];
    // const field = [
    //     1, 2, 3, 4,
    //     5, 6, 7, 8,
    //     9, 10, 11, 12,
    //     13, 14, 0, 15   
    // ];
    const field = [
        10, 14, 15, 3,
        2, 8, 1, 13,
        7, 12, 5, 11,
        9, 4, 6, 0
    ];
    isSolvable(field);
    // const field = new Array(size * size)
    //     .fill()
    //     .map((e, i) => i)
    //     .reverse();
        // .sort(() => Math.random() - .5);
    return field;
    return isSolvable(field) || genMatrix();
}