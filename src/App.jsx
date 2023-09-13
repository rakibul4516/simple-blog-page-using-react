import image from './assets/profile.png'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import { useState } from 'react'

function App() {
    const [bookmarkData,setBookmarkData] = useState([])
    const [readingTime, setReadingTime] = useState(0)
    // bookmarkdata handeler 
    const bookmarkHandeler = (blog) =>{
      const newSetBookmarkData = [...bookmarkData,blog]
      setBookmarkData(newSetBookmarkData)
    }

    //Reading time eventhandeler
    const readingTimeHandeler = (reading_time,id) =>{
      setReadingTime(readingTime + reading_time)

      //remove element from bookmark
      const removeBookmarkData = bookmarkData.filter(bookmark=>bookmark.id !==id)
      setBookmarkData(removeBookmarkData)
    }
  return (
    <>
      <div className="flex justify-between items-center py-5 border-b-2 w-10/12 mx-auto">
        <h1 className='text-4xl font-semibold'>Knowledge Haat</h1>
        <img className='h-14 w-14' src={image} alt="" />
      </div>
      <div className="flex lg:w-10/12 w-11/12 mx-auto max-sm:flex-col">
        <Blogs bookmarkHandeler = {bookmarkHandeler} readingTimeHandeler={readingTimeHandeler}></Blogs>
        <Bookmarks bookmarkData ={bookmarkData} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
