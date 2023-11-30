import React, {useState, useEffect} from 'react';
import Bookmark from '../Components/Bookmark'

const API = import.meta.env.VITE_BASE_URL

const Index = () => {
 const [bookmarks, setBookmarks] = 
 useState([])
 
 useEffect(() => {
    fetch(`${API}/bookmarks`)
    .then(res => res.json())
    .then(res => {
        // console.log(res) 
        setBookmarks(res)
    })
 }, [])

    return (
        <div className="bookmark-container">
            {bookmarks.map((bookmark) => <Bookmark bookmark ={bookmark}/>)}
        </div>
    );
};

export default Index;