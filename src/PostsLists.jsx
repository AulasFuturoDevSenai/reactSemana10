
import Post from "./Post";
import { useEffect, useState } from "react";


function PostsLists() {
    const [posts, setPosts] = useState([]);

    //UseEffect para buscar do LocalStorage
    useEffect(() => {
        const dados = localStorage.getItem('posts');

        if (dados) {
            setPosts(JSON.parse(dados));
        }
    }, []);    

    return (
        <div>
            {posts.map((post, index) => (
                <Post key={index} tipo={post.tipo} titulo={post.titulo} descricao={post.descricao} data={post.data} />
            ))}
        </div>
    );    


}

export default PostsLists;