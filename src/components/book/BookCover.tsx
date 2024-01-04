import { useState, useEffect } from "react"


interface props {
  title: string,
  totalScore: number
  ratingArr: [number]
  raterArr: [string]
}

const BookCover: React.FC<props> = ({title, totalScore, ratingArr, raterArr}) => {
const [users, setUserData] = useState([])

const getData = async () => {
  const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users`);
  const user = await data.json()
  setUserData(user);
}

const userObj = {}
users.forEach(user => {
userObj[user._id] = user.username 
})

console.log(userObj)

const raterObj = {}
const findBookScore = () => {
for (let i = 0; i < raterArr.length; i++) {
  raterObj[raterArr[i]] = ratingArr[i]
}
return raterObj
}
findBookScore()

console.log(raterObj)

useEffect(() => {
  getData();
}, [])
return (
<>
<div className="flex h-[100%] w-[100%]">
  <div className="leftcover  flex items-center justify-center w-[50%] bg-black text-white">
  <h2>{title}</h2>
  </div>
  <div className="rightcover">
  <li>name: score</li>
  <li>name: score</li>
  <li>name: score</li>
  <li>name: score</li>
  <li>Group Rating: {totalScore}</li>
  </div>
</div>
</>
    )
}

export default BookCover