import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Components/Main";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const user = localStorage.getItem("token");

  const [GoogleUser, setGoogleUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // add loading state

  const getGoogleUser = async () => {
    try {
      const url = `https://mym-backend-google.onrender.com/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setGoogleUser(data.user._json);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // set loading to false when done
    }
  };

  useEffect(() => {
    getGoogleUser();
  }, []);

  if (isLoading) {
    // render a loading spinner or message while waiting
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        {(GoogleUser || user) && (
          <Route path="/" exact element={<Main></Main>}></Route>
        )}
        <Route path="/signup" exact element={<Signup></Signup>}></Route>
        <Route path="/login" exact element={<Login></Login>}></Route>
        <Route
          path="/"
          exact
          element={<Navigate replace to="/login"></Navigate>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
