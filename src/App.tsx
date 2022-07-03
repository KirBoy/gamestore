import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/index";
import {Layout} from "./components";
import './global.css'
import Shop from "./pages/Shop";
import Wheel from "./pages/Wheel";
import Game from "./pages/Game";

// const Shop = React.lazy(() => import("./pages/Shop"));
// const Game = React.lazy(() => import("./pages/Game"));
// const Wheel = React.lazy(() => import("./pages/Wheel"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/shop"
                    element={<Shop/>}
                />
                <Route
                    path="/wheel"
                    element={<Wheel/>}
                />
                <Route
                    path="/shop/:id"
                    element={<Game/>}
                />
            </Route>
        </Routes>
    );
}

export default App;
