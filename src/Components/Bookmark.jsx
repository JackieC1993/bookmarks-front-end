import React from 'react';
import {Link} from 'react-router-dom'


const Bookmark = ({bookmark}) => {
    return (
        <div key={bookmark.id} className="bookmark-div">
            <Link to={`/bookmarks/${bookmark.id}`}>{bookmark.name}</Link>
        </div>
    );
};

export default Bookmark;