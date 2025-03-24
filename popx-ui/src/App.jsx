import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Login from "./components/Login";  // Import Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
