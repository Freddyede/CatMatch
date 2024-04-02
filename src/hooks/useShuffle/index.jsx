import data from "../../data/data.json";

export const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const useShuffle = (callback, i, j) => {
    let i2;
    if(i === undefined) {
        i = randomInteger(1, data.cats.length - 1) !== data.cats.length - 1 ? randomInteger(1, data.cats.length - 1) : 1;
        if(j === undefined) {
            i2 = i !== data.cats.length -1 ? i + 1 : 0;
            if(data.cats[i] !== data.cats[i2])
                return callback([data.cats[i], data.cats[i2]]);
            else
                return callback([data.cats[i], data.cats[i + 1]])
        }
    }
    return callback([data.cats[i], data.cats[j]]);
};


export default useShuffle;