import '../../assets/card.css';
import {useState} from "react";

function CardComponent ({ name, link, id, point, handleCount }) {
    const [count, setCount] = useState(point);
    const handleChange = () => {
        setCount(count + 1);
        handleCount(id, count);
    };
    return (
        <div className='card' onClick={handleChange}>
            <div className="card-body">
                <div>
                    <img src={link} alt={name}/>
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            <div className="card-footer">
                <span>{count}</span>
            </div>
        </div>
    );
}

export default CardComponent;