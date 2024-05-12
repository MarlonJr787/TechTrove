import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />

            </Routes>
        </BrowserRouter>
    )
}
