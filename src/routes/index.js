import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "../pages/detailed/MovieDetail";
import Home from "../pages/home/Home";

export default function MovieRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/detailed/:id" element={<MovieDetail/>}/>
            </Routes>
        </Router>
    );
}
