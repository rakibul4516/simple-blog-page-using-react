import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h2 className='w-11/12 mx-auto bg-slate-400 shadow-sm rounded-md mb-1 px-5 py-3 text-lg'>{bookmark}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.array
};

export default Bookmark;