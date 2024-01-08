import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Loader from "../../loader/Loader"
import BookCover from "../BookCover"
import "../../../style/singlebook.css"
import { dateFormatter } from "../../../functions/dateFormatter.js"
import "../../../style/singlebookRes.css"

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
    yearPublished: number,
    pages: number,
    read: boolean,
    dateOfMeeting: string,
    commentInfo: {
      commentId: [string],
      comments: [string]
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
<Link to="/books"><span className="float-right m-5 font-semibold text-4xl ">Back</span></Link>
{loading ? (
  <>
    <div className="h-screen flex justify-center items-center flex-col">
    <Loader />
    <h2 className="m-5 text-center text-xl">{loadingMessage}</h2>
    </div>
    </>
) : (
<div className="mainSingleCon flex items-center">
<div className="bookTitleCon flex flex-col">
<h1 className="bookTitle">{bookData.title}</h1>
    <div>
      {bookData?.reviewImageURL ? (
        <img src={bookData?.reviewImageURL} alt="book_review_image" width="" height="" className=" bookCover border-black border-4 border-black border-solid m-5" />
      ) : (
        <div className="bookTitleCoverCon flex justify-center text-center items-center border-4 m-5 border-black border-solid">
          <BookCover title={bookData?.title} totalScore={bookData?.totalScore} ratingArr={bookData?.scoreRatings?.rating} raterArr={bookData?.scoreRatings?.raterId} />
        </div>
      )}
    </div>
</div>

    <div className="bookRightCon flex flex-col m-20">

    <h2 className="text-5xl underline">Details</h2>
    
    <ul>
    <li className="mt-5 underline">Author</li>
    <li className="">{bookData?.author}</li>

    <li className="mt-5 underline">Published in</li>
    <li className="">{bookData?.yearPublished < 0 ? Math.abs(bookData?.yearPublished) + " BCE" : bookData?.yearPublished}</li>

    <li className="mt-5 underline">Number of pages</li>
    <li className="">{bookData?.pages}</li>

    <li className="mt-5 underline">Genres</li>
    {bookData?.genre.map((type) => <li>{type[bookData?.genre?.length - 1] ? ` ${type}`: ` ${type},` }</li>)}

    <li className="mt-5 underline">Read</li>
    <li className="">{bookData?.read ? "Yes" : "No"}</li>

    <li className="mt-5 underline">Date of meeting</li>
    <li className="">{dateFormatter(bookData?.dateOfMeeting)}</li>

    <li className="mt-5 underline">Score</li>
    <li className="">{bookData?.totalScore}</li>

    <li className="mt-5 underline"> Comments:</li>
    {bookData?.commentInfo?.comments?.length > 0 ? <li className="mt-5 ml-5 list-disc">"{bookData?.commentInfo?.comments.map((comment) => comment)}" </li> : "No comments"}
    </ul>
  </div>

  </div>
)}
</>
    )
}

export default SingleBook