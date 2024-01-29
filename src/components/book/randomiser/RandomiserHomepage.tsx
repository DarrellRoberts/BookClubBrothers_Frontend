import {useState, useEffect, useContext} from "react"
import Loader from "../../loader/Loader"
import Back from "../../misc/Back"
import CreateUnreadBook from "./bookform/CreateUnreadBook"
import DeleteBook from "./bookform/DeleteBook"
import Randomiser from "./Randomiser"
import { AuthContext } from "../../../context/authContext";
import { useJwt } from "react-jwt";
import "../../../style/randomiser.css"
import "../../../style/randomiserRes.css"

const RandomiserHomepage: React.FC = () => {
const [showCreateBook, setShowCreateBook] = useState(false)
const [index, setIndex] = useState(0)
const [bookData, setBookData] = useState([])
const [userData, setUserData] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)

const { token } = useContext(AuthContext);
const { decodedToken }: { decodedToken?: { username: string} } = useJwt(token);

const getBookData = async () => {
    try {
    setError(null)
    const data = await fetch(
      `https://bookclubbrothers-backend.onrender.com/books/unread/all`
    );
    const book = await data.json();
    setBookData(book);
    setLoading(false);
  } catch (err) {
    setError(err)
    console.log(error)
  }
  };

const getUserData = async () => {
    try {
    setError(null)
    const data = await fetch(
      `https://bookclubbrothers-backend.onrender.com/users`
    );
    const book = await data.json();
    setUserData(book);
    setLoading(false);
  } catch (err) {
    setError(err)
    console.log(error)
  }
  };

  const findUser = (id) => {
    const user = userData.find(user => user._id === id)
    return user ? user.username : "user not found"
    }

useEffect(() => {
    getBookData();
    getUserData();
}, [])
console.log(bookData);
    return (
        <>
        <Back />
        <div className="randomCon">
        <h1 className="randomTitle mt-5">Randomiser</h1>
            <div className="randomBox">
                <div className="randomBoxLeft">
                {loading ? (
                  <Loader />
                ) : 
                bookData?.map((book) => 
                (
                <div 
                className={decodedToken ? "bookDeleteBox" : "bookBox"}
                onClick={() => setIndex(bookData.indexOf(book))}
                >
                <h2>{book?.title}</h2>
                {decodedToken ? (
                <div 
                className="bookX"
                ><DeleteBook id={book?._id} /></div>) : null} 
                <p> - suggested by {findUser(book?.suggestedBy)}</p>
                </div>
                ))
                }
                <CreateUnreadBook showCreateBook={showCreateBook} 
                setShowCreateBook={setShowCreateBook}/>
                </div>
                <div className="randomBoxRight">
                {loading ? (
                  <Loader />
                ) : (
                  <div className="randomDetailsCon">
                    <h2>{bookData[index]?.title}</h2>
                    <ul>
                      <li>Author: {bookData[index]?.author}</li>
                      <li>Published: {bookData[index]?.yearPublished}</li>
                      <li>Pages: {bookData[index]?.pages}</li>
                      <li>Genre {bookData[index]?.genre.map((theme) => (
                        <li>{theme}</li>
                      ))}</li>
                    </ul>
                    </div>
                  )
                }
                <Randomiser bookLength={bookData?.length} bookId={bookData[index]?._id} setIndex={setIndex}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default RandomiserHomepage