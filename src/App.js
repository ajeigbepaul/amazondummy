import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import Order from "./components/Order";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/order"
            element={
              <>
                <Header /> <Order />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header /> <Payment />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <CheckOut />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
