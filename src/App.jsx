import './App.css'
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostsLists from './PostsLists'; 


function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publicDate, setPublicDate] = useState('');
  const [category, setCategory] = useState('');
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect (() => {
    const postsInLocalStorage = JSON.parse(localStorage.getItem("@Posts")) || [];
    setPosts(postsInLocalStorage);
    setTotalPosts(postsInLocalStorage.length);
 
  }, []);

    function handleDeletePost(id) {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    setTotalPosts(updatedPosts.length);
    localStorage.setItem("@Posts", JSON.stringify(updatedPosts));
    toast.success("Post deleted successfully!");
  }


  function handleSubmit(event) {
    event.preventDefault(); // previne que a tela seja recarregada ao enviar o formulário

    // validações
    if (title.trim() === "") {
      toast.error("O título é obrigatório");
      return;
    }

    if (description.trim() === "") {
      toast.error("A descrição é obrigatória.");
      return;
    }

    if (!imageUrl.trim().startsWith("http")) {
      toast.error("A URL da imagem deve começar com http.");
      return;
    }

    if (category.trim() === "") {
      toast.error("Selecione uma categoria.");
      return;
    }

    // validar a data
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // zerar hora
    const selectedDate = new Date(publicDate);

    if (selectedDate < hoje) {
      toast.error("A data de publicação deve ser hoje ou no futuro.");
      return;
    }


     //criar o objeto para salvar no localStorage
  const newPost = {
    id:Date.now(),
    title,
    description,
    imageUrl,
    publicDate,
    category
  };

  //pegar o post que ja estão no local storage
    let allPostInLocalStorage = localStorage.getItem("@Posts")

  //obtem o array dos posts

    allPostInLocalStorage = !allPostInLocalStorage ? [] : JSON.parse(allPostInLocalStorage)

  //Insere no array do post
    allPostInLocalStorage.push(newPost)
    console.log(allPostInLocalStorage)

  //Salvar o array atualizado no local storage
    localStorage.setItem("@Posts", JSON.stringify(allPostInLocalStorage));

  //Atualiza o estado de total de posts
    setTotalPosts(allPostInLocalStorage.length);
  

  //Mensagem de sucesso
    toast.success("Post salvo com sucesso!");

    //limpar os campos
    setTitle("")
    setDescription("")
    setImageUrl("")
    setPublicDate("")
    setCategory("")
  }

  return (
    <>
      <section className="App">
        <h1>Painel de Gerenciamento</h1>
        <p>Atualmente, você tem <strong>{totalPosts} posts</strong> cadastrados</p>
      </section>

      <form className="container-form" onSubmit={handleSubmit}>
        <h2>Novo Post</h2>

        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          placeholder="Título do post"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        <label htmlFor="imageUrl">URL da imagem de capa</label>
        <input
          type="text"
          id="imageUrl"
          placeholder="Cole aqui o endereço da imagem (URL)"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />

        <label htmlFor="publicDate">Data de publicação</label>
        <input
          type="date"
          id="publicDate"
          value={publicDate}
          onChange={(event) => setPublicDate(event.target.value)}
        />

        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione o tipo</option>
          <option value="artigo">Artigo</option>
          <option value="noticia">Notícia</option>
          <option value="tutorial">Tutorial</option>
          <option value="entrevista">Entrevista</option>
        </select>

        <button type="submit">Salvar</button>
      </form>

      <PostsLists posts={posts} handleDeletePost={handleDeletePost} />
      <ToastContainer />
    </>
  );
}

export default App;


