import { useEffect, useState } from "react";
import Loader from "../../loader/Loader";
import BookCover from "./BookCover";
import { Link } from "react-router-dom";
import Back from "../../misc/Back";
import "../../../style/booklibrary.css";
import "../../../style/booklibraryRes.css";

const Booklibrary: React.FC = () => {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBookData = async () => {
    const data = await fetch(
      `https://bookclubbrothers-backend.onrender.com/books`
    );
    const book = await data.json();
    setBookData(book);
    setLoading(false);
  };

  useEffect(() => {
    getBookData();
  }, []);
  return (
    <>
    <Back />
      {loading ? (
        <Loader />
      ) : (
        <div className="bookCon flex flex-wrap">
          {bookData.map((book) => (
            <div key={book.id}>
              {book.reviewImageURL ? (
                <Link to={`/books/library/${book._id}`}>
                  <h2 className="smallBookTitle">{book.title}</h2>
                  <img
                    src={book.reviewImageURL}
                    alt="book_review_image"
                    width=""
                    height=""
                    className="border-black border-4 border-black border-solid m-5"
                  />
                </Link>
              ) : (
                <Link to={`/books/library/${book._id}`}>
                  <h2 className="smallBookTitle">{book.title}</h2>
                  <div className="bookCoverCon flex justify-center text-center items-center border-4 m-5 border-black border-solid">
                    <BookCover
                      title={book?.title}
                      totalScore={book?.totalScore}
                      ratingArr={book?.scoreRatings?.rating}
                      raterArr={book?.scoreRatings?.raterId}
                    />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Booklibrary;
