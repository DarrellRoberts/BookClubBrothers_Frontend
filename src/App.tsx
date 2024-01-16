import "./App.css";
import Header from "./components/header/HeaderCon";
import Dashboard from "./components/brothers/dashboard/Dashboard";
import DashboardOther from "./components/brothers/dashboard/DashboardOther";
import Homepage from "./components/homepage/Homepage";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { Routes, Route } from "react-router-dom";
import { useJwt } from "react-jwt";
import Booklibrary from "./components/book/booklibrary/Booklibrary";
import Brothercat from "./components/brothers/Brothercat";
import SingleBook from "./components/book/singleBook/SingleBook";
import ScrollToTop from "./functions/ScrollToTop";
import Club from "./components/club/Club";
import BookHomepage from "./components/book/BookHomepage";

function App() {
  const { token } = useContext(AuthContext);
  const { decodedToken }: { decodedToken?: { username: string } } =
    useJwt(token);
  const username = decodedToken?.username;

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={username ? <Dashboard /> : <Homepage />} />
        {/* <Route path="/users/:username" element={<Profilepage />} /> */}
        <Route path="/books" element={<BookHomepage />} />
        <Route path="/books/library" element={<Booklibrary />} />
        <Route path="/brothers/:username" element={<DashboardOther />} />
        <Route path="/brothers" element={<Brothercat />} />
        <Route path="/books/library/:id" element={<SingleBook />} />
        <Route path="/club" element={<Club />} />
      </Routes>
    </>
  );
}

export default App;
