import '../../assets/cardContainer.css';
import HeaderLayout from "../../HeaderLayout";
import { useScore } from "../../hooks";

function ScoreComponent () {
    const { cats } = useScore();
    return (
        <div className="containerFlex">
            <HeaderLayout/>
            <div className="score-container">
                <h1>Score</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Point</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cats.map((cat) => {
                                    return (
                                        <tr key={ cat.id }>
                                            <td>{cat.name}</td>
                                            <td>{cat.point}</td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScoreComponent;