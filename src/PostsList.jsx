
import Post from "./Post";
import React, {useEffect, useState} from "react";


function PostsList({ posts = [], handleDelete }) {
    
    const [categoryCounts, setCategoryCounts] = useState({});

    useEffect(() => {
    const counts = posts.reduce((acc, post) => {
      const cat = post.category.toLowerCase();
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});
    setCategoryCounts(counts);
  }, [posts]);


  return (
  <div className="posts-list">
    {/* Contagem de posts por categoria */}
    <div style={{ 
      marginBottom: "20px",
      backgroundColor: "#f4f4f4",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Atualmente, você tem <strong>{posts.length} posts</strong> cadastrados
      </p>
      <ul style={{ 
        listStyle: "none", 
        paddingLeft: 0, 
        fontSize: "16px", 
        fontWeight: "bold", 
        color: "#333"
      }}>
        {Object.entries(categoryCounts).map(([categoria, quantidade]) => (
          <li key={categoria}>
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}: <span style={{ fontWeight: "normal" }}>{quantidade}</span>
          </li>
        ))}
      </ul>
    </div>

      {/* Lista de posts */}
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