import { useEffect, useState } from "react"
import Loader from "../loader/Loader";

const Booklibrary: React.FC = () => {
const [bookData, setBookData] = useState([]);
const [loading, setLoading] = useState(true)

    const getBookData = async () => {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/books`);
        const book = await data.json()
        setBookData(book);
        setLoading(false)
        }

    useEffect(() => {
            getBookData();
}, [])
        
console.log(bookData);
return (
<>
{loading ? (
    <div className="w-screen h-screen flex justify-center items-center">
    <Loader />
    </div>
) : (
<div className="flex flex-wrap">
  {bookData.map((book) => (
    <div key={book.id}>
      {book.reviewImageURL ? (
        <img src={book.reviewImageURL} alt="book_review_image" width="300px" height="200px" className="border-black border-4 border-black border-solid m-5" />
      ) : (
        <div className="w-[300px] h-[200px] flex justify-center text-center items-center border-4 m-5 border-black border-solid">
          {book.title}
        </div>
      )}
    </div>
  ))}
</div>
)}
</>
    )
}

export default Booklibrary