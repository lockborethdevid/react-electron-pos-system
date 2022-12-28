import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
