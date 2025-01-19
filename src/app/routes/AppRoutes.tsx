import React from 'react'
import { Route, Routes } from "react-router-dom";

import Projects from "../../pages/projects/projects.tsx";
import Create from "../../pages/create/create.tsx";
import Invites from "../../pages/invites/invites.tsx";


export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/create" element={<Create/>} />
            <Route path="/invites" element={<Invites />} />
        </Routes>
    )
}
