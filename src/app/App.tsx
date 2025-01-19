import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import HeaderBlock from "./ui/header/header.tsx";
import Navigation from "./ui/navigation/navigation.tsx";
import { AppRouter } from "./routes/AppRoutes.tsx";

import './styled/App.css'
import { MainBlock } from "./styled/styled.ts";

function App() {

    return (
        <BrowserRouter>
            <HeaderBlock />
            <MainBlock>
                <Navigation/>
                <AppRouter/>
            </MainBlock>
        </BrowserRouter>
    )
}

export default App
