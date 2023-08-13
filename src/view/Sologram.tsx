import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Frame from "./components/Frame";
import Footer from "./components/footer";

const Sologram = () => {
    return (
        <HashRouter>
            <div className="w-full h-full flex flex-col">
                <Frame/>

                <Routes>
                    <Route path="/" Component={Home}/>
                </Routes>

                <Footer/>
            </div>
        </HashRouter>
    )
}

export default Sologram;