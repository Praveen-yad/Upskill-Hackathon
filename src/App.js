import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Chat } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Chat" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
