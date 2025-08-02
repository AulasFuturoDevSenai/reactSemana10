
import Post from "./Post";


function PostsList({ posts, handleDelete }) {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          publicDate={post.publicDate}
          category={post.category}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default PostsList;