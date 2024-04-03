import './App.css';
import { Route, Routes } from "react-router-dom";
import { CardsCat, ScoreComponent } from "./components";
import { shuffleServices } from "./services/index";
import { useCatState } from './hooks/useCatState';
function App() {
    const {catsShow, cats, setCatsShow} = useCatState();

    const handleCount = (id) => {
        const newTodos = catsShow.find(element =>element.id === id)
        newTodos.point = newTodos.point + 1;
        const newTodosEffect = catsShow.filter(element => element.id !== id);
        setCatsShow(newTodosEffect);
        setTimeout(shuffleServices(setCatsShow), 2000);
    }
    return (
        <Routes>
            <Route path='/' index={ true } Component={ () => <CardsCat cats={catsShow} handleCount={ id => handleCount(id) }/> } />
            <Route path='/score' Component={() => <ScoreComponent /> } />
        </Routes>
    );
}

export default App
