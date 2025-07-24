
import './App.css'
import React, {useState} from 'react';

function App() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // previne que a tela seja recarregada ao enviar o formulário
    
  }
    
  return (
    <>
      <section className="App">
        <h1>Painel de Gerenciamento</h1>
        <p>Atualmente, você tem <strong>14 posts </strong>cadastrados</p>
      </section>

      <form className="container-form">
        <h2>Novo Post</h2>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" placeholder="Título do post" value={title} onChange={(event) => {
          setTitle(event.target.value)
        }}/>

        <label htmlFor="description">Descrição</label>
        <textarea id="description" placeholder="Descrição" value={description} onChange={(event) => {
          setDescription(event.target.value)
        }} ></textarea>
      </form>
    </>
  )
}

export default App
