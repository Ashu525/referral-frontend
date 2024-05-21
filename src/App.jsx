/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./store/slices/tokenSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  // If token is available, set it in the Redux store
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tokenFromQuery = queryParams.get("token");
  if (tokenFromQuery && !token) {
    dispatch(setToken(tokenFromQuery));
  }

  return (
    <>
      <Routes>
        {!token ? (
          <>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Register />} />
            <Route path="/referral/:code" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
          </>
        )}
      </Routes>
      <div style={{ position: "absolute" }}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
