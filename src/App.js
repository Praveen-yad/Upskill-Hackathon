import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Chat, SignUp, SignIn } from "./Pages";
import DefaultView from "./Components/DefaultView";
import Message from "./Components/Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/chat" element={<Chat/>}>
          <Route element={<Message/>} path=":chatId" />
          <Route element={<DefaultView/>} path="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
