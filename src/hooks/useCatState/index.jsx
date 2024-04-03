import data from "../../data/data.json";
import { useEffect, useState } from "react";
import { shuffleServices } from "../../services/index";

export function useCatState () {
    const [cats, setCats] = useState(data.cats);
    const [catsShow, setCatsShow] = useState([]);
    useEffect(() => {
        shuffleServices(setCatsShow);
    }, []);
    return {cats, catsShow, setCatsShow, setCats};
}