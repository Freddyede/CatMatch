import {useEffect, useState} from "react";
import '../../assets/cardContainer.css';
import { CardComponent } from "../";
import { useShuffle } from "../../hooks";

const CardsCat = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        useShuffle(setCats, 0, 1);
    }, []);

    const handleCount = (id, count) => {
        let cat = cats.find(cat => cat.id === id);
        cat.point = count;
        const newCats = cats.filter(cat => cat.id !== id);
        newCats.push(cat);
        setCats(newCats);
        setTimeout(useShuffle(setCats), 2000)
    }
    return (
        <div className="cards-container">
            {
                cats.map(cat => (<CardComponent handleCount={ (id, count) => handleCount(id, count) } key={ cat.id } name={cat.name} link={cat.link} point={cat.point} id={ cat.id } />))
            }
        </div>
    );
}

export default CardsCat;