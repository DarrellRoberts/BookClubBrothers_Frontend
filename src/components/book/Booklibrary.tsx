import { useEffect, useState } from "react"
import Loader from "../loader/Loader";
import BookCover from "./BookCover";
import { Link } from "react-router-dom"
import "../../style/booklibrary.css"
import "../../style/booklibraryRes.css"


const Booklibrary: React.FC = () => {
const [bookData, setBookData] = useState([]);
const [loading, setLoading] = useState(true)
const [loadingMessage, setLoadingMessage] = useState<string>("")

    const getBookData = async () => {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/books`);
        const book = await data.json()
        setBookData(book);
        setLoading(false)
        }


      const Loading = () =>  {
          const timer = setTimeout(() => {
          setLoadingMessage("Sorry for the wait...Render wants me to pay money for a faster API-fetch time. Fat chance that is happening.... won't be long now")
        }, 10000)
        return () => clearTimeout(timer);
      }

    useEffect(() => {
            getBookData();
            Loading();
}, [])
// console.log(bookData)    
return (
<>
{loading ? (
  <>
    <div className="h-screen flex justify-center items-center flex-col">
    <Loader />
    <h2 className="m-5 text-center text-xl">{loadingMessage}</h2>
    </div>
    </>

) : (
<div className="bookCon flex flex-wrap">
  {bookData.map((book) => (
    <div key={book.id}>
      {book.reviewImageURL ? (
    <Link to={`/books/${book._id}`}>
        <img src={book.reviewImageURL} alt="book_review_image" width="" height="" className="border-black border-4 border-black border-solid m-5" />
        </Link>
      ) : (
        <Link to={`/books/${book._id}`}>
        <div className="bookCoverCon flex justify-center text-center items-center border-4 m-5 border-black border-solid">
          <BookCover title={book?.title} totalScore={book?.totalScore} ratingArr={book?.scoreRatings?.rating} raterArr={book?.scoreRatings?.raterId} />
        </div>
        </Link>
      )}
    </div>
  ))}
</div>
)}
</>
    )
}

export default Booklibrary