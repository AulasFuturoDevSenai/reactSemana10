import './Post.css'

function Post({tipo, titulo, descricao, data}) {
    return (

        <div className='post-container'>
            <img src="https://img.freepik.com/fotos-premium/inteligencia-artificial-em-maos-humanas-e-redes-digitais_220873-14565.jpg" alt="Imagem do post" className='post-image'/>

            <div className='post-content'>
                <span className='post-categoria'>{tipo}</span>
                <h2 className='post-titulo'>{titulo}</h2>
                <p className='post-descricao'>{descricao}</p>
                <p className='post-data'>Publicado em: {data}</p>

                <button className='post-excluir'>Excluir</button>
            </div>
        </div>

    );
}

export default Post;