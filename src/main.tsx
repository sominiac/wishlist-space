import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import {routes} from "./routes.tsx";
import '@styles/global.module.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route path={path} element={element}/>
                ))}
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
