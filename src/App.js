import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsnConditions from "./pages/TermsnConditions";

function App() {
  return (
    <Router>
        <div className="main-container">
          <Routes>              
             <Route path="/" element={<HomeScreen />}/>  
             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
             <Route path="/terms-conditions" element={<TermsnConditions />} />
          </Routes>
        </div>
     </Router>
  );
}

export default App;
