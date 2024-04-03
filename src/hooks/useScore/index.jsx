import {useCatState} from "../useCatState/index.jsx";

const useScore = () => {
    const {cats} = useCatState();
    cats.sort((b, a) => b.point - a.point).reverse();
    return {cats};
};

export default useScore;