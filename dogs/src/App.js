import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/login/Login";
import User from "./components/User/User";
import ProtectedRouter from "./components/helper/ProtectedRouter";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
