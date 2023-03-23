import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Components/Main";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const user=localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        {user && <Route path='/' exact element={<Main></Main>}></Route>}
        <Route path='/signup' exact element={<Signup></Signup>}></Route>
        <Route path='/login' exact element={<Login></Login>}></Route>
        <Route path='/' exact element={<Navigate replace to="/login"></Navigate> }></Route>
      </Routes>
    </div>
  );
}

export default App;
