import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarkData,readingTime}) => {
    
    return (
        <div className='w-1/3 mx-auto my-5'>
            <h2 className='w-11/12 mx-auto text-2xl px-4 py-2 font-semibold'>Reading Time: {readingTime}</h2>            
            <h2 className='w-11/12 mx-auto text-2xl px-4 py-2 font-semibold'>Bookmark Data: {bookmarkData.length}</h2>
            <div className=''>
                {
                    bookmarkData.map((bookmark,idx) =><Bookmark key={idx} bookmark={bookmark.title}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarkData:PropTypes.array,
    readingTime:PropTypes.number
};

export default Bookmarks;