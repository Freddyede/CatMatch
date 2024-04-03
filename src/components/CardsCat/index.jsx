import '../../assets/cardContainer.css';
import { CardComponent } from "../";
import HeaderLayout from "../../HeaderLayout";

function CardsCat ({cats, handleCount}) {
    return (
        <div className="containerFlex">
            <HeaderLayout />
            <div className="cards-container">
                {
                    cats.map(cat => (
                            <CardComponent
                                handleCount={ id => handleCount(id) }
                                key={ cat.id }
                                name={ cat.name }
                                link={ cat.link }
                                point={ cat.point }
                                id={ cat.id }
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default CardsCat;