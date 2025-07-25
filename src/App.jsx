import './App.css'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publicDate, setPublicDate] = useState('');
  const [category, setCategory] = useState('');

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

    toast.success("Post salvo com sucesso!");
  }

  return (
    <>
      <section className="App">
        <h1>Painel de Gerenciamento</h1>
        <p>Atualmente, você tem <strong>14 posts</strong> cadastrados</p>
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

      <ToastContainer />
    </>
  );
}

export default App;

