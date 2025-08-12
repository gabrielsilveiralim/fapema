import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}