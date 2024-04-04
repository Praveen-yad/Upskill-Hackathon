import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Chat } from "./Pages";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Chat" element={<Chat/>}/>
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
