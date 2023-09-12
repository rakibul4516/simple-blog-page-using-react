import PropTypes from 'prop-types';
const Blog = ({blog,bookmarkHandeler,readingTimeHandeler}) => {
    const {id,cover_img,title,user_img,user_name,published_date,reading_time,tags} =blog;
    return (
        <div className='my-4'>
            <img src={cover_img} alt="" />
            <div className="flex justify-between items-center my-3">
                <div className="flex items-center">
                    <img className='w-14 h-14' src={user_img} alt="" />
                    <div className="pl-4">
                        <p>{user_name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p>{reading_time} min</p>
                    <button onClick={() =>bookmarkHandeler(blog)} type='button' className='bg-teal-400 hover:bg-slate-400 px-3 py-2 rounded-lg'>Bookmark</button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            {
                tags.map(tag =>{<p className='inline pl-2'>#{tag}</p>})
            }
            <h4 onClick={()=>readingTimeHandeler(reading_time,id)}>Mark as read </h4>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    bookmarkHandeler:PropTypes.func,
    readingTimeHandeler:PropTypes.func
};

export default Blog;