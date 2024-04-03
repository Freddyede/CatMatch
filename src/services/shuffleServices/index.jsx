import data from "../../data/data.json";
import { RandomInteger } from "../../utils/index";

function shuffleServices(callback, i, j){
    let i2;
    if(i === undefined) {
        i = RandomInteger(1, data.cats.length - 1) !== data.cats.length - 1 ? RandomInteger(1, data.cats.length - 1) : 1;
        if(j === undefined) {
            i2 = i !== data.cats.length -1 ? i + 1 : 0;
            if(data.cats[i] !== data.cats[i2])
                return callback([data.cats[i], data.cats[i2]]);
            else
                return callback([data.cats[i], data.cats[i + 1]])
        }
    }
    return callback([data.cats[i], data.cats[j]]);
}


export default shuffleServices;