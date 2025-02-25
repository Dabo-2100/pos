import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import LoginPageAyman from "./pages/Ayman/LoginPageAyman";

export default function App() {
  return (
    <div className="App col-12">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/register" element={<h1>Register Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/AymanLogin" element={<LoginPageAyman/>} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// This is Abdel-fattah

// This is Ayman 
