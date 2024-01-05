import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Loader from "../../loader/Loader"
import BookCover from "../BookCover"
import "../../../style/singlebook.css"

interface book {
    author: string,
    genre: [string],
    reviewImageURL: string,
    totalScore: number,
    title: string,
    scoreRatings: {
        raterId: [string],
        rating: [number]
    }
}

const SingleBook: React.FC = () => {
const [bookData, setBook] = useState<book>()
const [loading, setLoading] = useState(true)
const [loadingMessage, setLoadingMessage] = useState("")

const { id } = useParams()

const getBookData = async () => {
    const data = await fetch(`https://bookclubbrothers-backend.onrender.com/books/${id}`);
    const book = await data.json()
    setBook(book);
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

console.log(bookData)

return (
<>
{loading ? (
  <>
    <div className="w-screen h-screen flex justify-center items-center flex-col">
    <Loader />
    <h2 className="m-5 text-center text-xl">{loadingMessage}</h2>
    </div>
    </>
) : (
<div className="bookTitleCon flex flex-wrap flex-col">
<Link to="/books"><span className="float-right">Back</span></Link>
<h1 className="bookTitle">{bookData.title}</h1>
    <div>
      {bookData?.reviewImageURL ? (
        <img src={bookData?.reviewImageURL} alt="book_review_image" width="" height="" className=" border-black border-4 border-black border-solid m-5" />
      ) : (
        <div className="bookTitleCoverCon flex justify-center text-center items-center border-4 m-5 border-black border-solid">
          <BookCover title={bookData?.title} totalScore={bookData?.totalScore} ratingArr={bookData?.scoreRatings?.rating} raterArr={bookData?.scoreRatings?.raterId} />
        </div>
      )}
    </div>
</div>
)}
</>
    )
}

export default SingleBook