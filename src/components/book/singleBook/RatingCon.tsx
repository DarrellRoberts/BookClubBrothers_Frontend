import {useState, useEffect} from "react"
import RatingButton from "./ratingform/RatingButton";
import "../../../style/ratingcon.css"

interface book {
    bookData: {
    author: string;
    genre: [string];
    reviewImageURL: string;
    totalScore: number;
    title: string;
    scoreRatings: {
      raterId: [string];
      rating: [number];
    };
    yearPublished: number;
    pages: number;
    read: boolean;
    dateOfMeeting: string;
    commentInfo: {
      commentId: [string];
      comments: [string];
    };
},
id: string
  }

type RaterObj = Record<string, number> | [string, number][];

const RatingCon:React.FC<book> = ({bookData, id}) => {

    const [users, setUserData] = useState([])
    const [showRating, setShowRating] = useState<boolean>(false)
    const [error, setError] = useState("")

    const getData = async () => {
      try {
      const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users`);
      const user = await data.json()
      setUserData(user);
      } catch (err) {
        setError(err)
        console.log(error)
      }
    }
    
    const findUser = (id) => {
    const user = users.find(user => user._id === id)
    return user ? user.username : "user not found"
    }

    const raterArr2 = bookData?.scoreRatings?.raterId?.map((id) => findUser(id))

    let raterObj: RaterObj = {}
    const findBookScore = () => {
    for (let i = 0; i < raterArr2?.length; i++) {
      raterObj[raterArr2[i]] = bookData?.scoreRatings?.rating[i]
      findUser(raterObj[bookData?.scoreRatings?.rating[i]])
    }
    raterObj = Object.entries(raterObj)
    return raterObj
    }
    findBookScore()

useEffect(() => {
getData();
}, [])

console.log(bookData)
console.log(raterObj)
    return (
<>
<div className="ratingCon">
    <h2 className="ratingTitle underline">Ratings</h2>
    {Array.isArray(raterObj)
        ? raterObj.map(([name, value]) => (
            <>
            <li className="list-none m-2" key={name}>
              {name}:
            </li>
            <div className="ratingGraph" style={{width: `${value}rem`}}>{value}</div>
            </>
          ))
        : Object.entries(raterObj).map(([name, value]) => (
            <li className="list-none mb-1 ml-2" key={name}>
              {name}: {value}
            </li>
          ))}

  <li className="list-none mt-auto font-bold">Group Rating: {Math.floor(bookData?.totalScore * 100) / 100}</li>
  <RatingButton showRating={showRating} setShowRating={setShowRating} id={id}/>
</div>
</>
    )
}

export default RatingCon