// import { useEffect, useState } from "react"

// const Profilepage: React.FC = () => {
//         const [userData, setUserData] = useState([]);
//         const [bookData, setBookData] = useState([]);
        
//         const getData = async () => {
//             const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users`);            const user = await data.json()
//             setUserData(user);
//         }
        
//         const findUser = userData.find((user) => user._id === id )
//         // fetch book data
//             const scoreArray = findUser?.userInfo?.books?.score
        
//             //minScore
//             const minScore1 = Array.isArray(scoreArray) && scoreArray.length > 0 ? Math.min(...scoreArray) : undefined;
//             const minScoreIndex = scoreArray?.indexOf(minScore1) ? scoreArray.indexOf(minScore1) : 0
//             const minScoreBook = findUser?.userInfo?.books?.booksScored[minScoreIndex]
        
//             //maxScore
//             const maxScore1 = Array.isArray(scoreArray) && scoreArray.length > 0 ? Math.max(...scoreArray) : undefined;
//             const maxScoreIndex = scoreArray?.indexOf(maxScore1) ? scoreArray.indexOf(maxScore1) : 0
//             const maxScoreBook = findUser?.userInfo?.books?.booksScored[maxScoreIndex]
        
//             const getBookData = async () => {
//                 const data = await fetch(`https://bookclubbrothers-backend.onrender.com/books`);
//                 const book = await data.json()
//                 setBookData(book);
//                 }
//             const findMinBook = bookData.find((book) => book._id === minScoreBook)
//             const findMaxBook = bookData.find((book) => book._id === maxScoreBook)
        
//             console.log(findMaxBook)
//                 //Additional Stats
//             const percentageBooks = parseFloat(((findUser?.userInfo?.books?.score?.length)/(bookData?.length)*100).toFixed(2))
//             const averageScore = parseFloat(((findUser?.userInfo?.books?.score?.reduce((a,c) => a + c, 0))/(findUser?.userInfo?.books?.score?.length)).toFixed(2))
//             // all scores
//             const filterBooks = bookData.filter((book) => book.scoreRatings.raterId.includes(decodedToken._id))
//             //unread books
//             const filterUnreadBooks = bookData.filter((book) => !book.scoreRatings.raterId.includes(decodedToken._id))
//             useEffect(() => {
//             getData();
//             getBookData();
//         }, [])
//         console.log(filterUnreadBooks);        
//     return (
//         <>

//         </>
//     )
// }

// export default Profilepage