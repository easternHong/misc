import './App.css'
import Home from "./component/Home.tsx";
import About from "./component/About.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header.tsx";
import NotFound from "./component/NotFound.tsx";
import Me from "./component/Me.tsx";
import React from "react";
import SubTitle from "./component/SubTitle.tsx";


class App extends React.Component {

    render() {
        return (
            <div className='h-auto block overflow-auto w-full bg-gray-100'>
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="subtitle" element={<SubTitle/>}/>
                        <Route path="about">
                            <Route path="" element={<About/>}/>
                            <Route path="me" element={<Me/>}/>
                        </Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

        )
    }
}

export default App