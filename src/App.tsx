import './App.css'
import Header from './components/header/HeaderCon'
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import { useContext } from "react"
import { AuthContext } from "./context/authContext";
import { Routes, Route } from "react-router-dom"
import { useJwt } from "react-jwt";
import "../src/components/profile/Profilepage"

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
    </Routes>
    </>
  )
}

export default App
