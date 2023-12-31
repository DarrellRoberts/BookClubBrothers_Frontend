import './App.css'
import Header from './components/header/HeaderCon'
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import { useContext } from "react"
import { AuthContext } from "./context/authContext";
import { Routes, Route } from "react-router-dom"
import { useJwt } from "react-jwt";
import "../src/components/profile/Profilepage"
import Booklibrary from './components/book/Booklibrary';

function App() {
  const { token } = useContext(AuthContext);  
  const { decodedToken }: { decodedToken?: { username: string} } = useJwt(token);
  const username = decodedToken?.username;

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={username ? <Dashboard /> : <Homepage />} />
      {/* <Route path="/users/:username" element={<Profilepage />} /> */}
      <Route path="/books" element={<Booklibrary />} />
    </Routes>
    </>
  )
}

export default App
