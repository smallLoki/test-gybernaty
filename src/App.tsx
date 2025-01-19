import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HeaderBlock from "./header/header.tsx";
import { MainBlock } from "./styled.ts";
import Navigation from "./navigation/navigation.tsx";
import Projects from "./pages/projects/projects.tsx";
import Create from "./pages/create/create.tsx";
import Invites from "./pages/invites/invites.tsx";

function App() {

    return (
        <BrowserRouter>
            <HeaderBlock />
            <MainBlock>
                <Navigation/>
                    <Routes>
                        <Route path="/" element={<Projects />} />
                        <Route path="/create" element={<Create/>} />
                        <Route path="/invites" element={<Invites />} />
                    </Routes>
            </MainBlock>
        </BrowserRouter>
    )
}

export default App
