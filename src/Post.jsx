import './Post.css'

function Post({id, title, description, publicDate, category, handleDelete}) {
    return (

        <div className="post">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
        <p><em>{publicDate}</em></p>
        <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
  );
}

export default Post;