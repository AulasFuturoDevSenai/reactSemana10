import './Post.css'

function Post() {
    return (

        <div className='post-container'>
            <img src="https://img.freepik.com/fotos-premium/inteligencia-artificial-em-maos-humanas-e-redes-digitais_220873-14565.jpg" alt="Imagem do post" className='post-image'/>

            <div className='post-content'>
                <span className='post-categoria'>ARTIGO</span>
                <h2 className='post-titulo'>Inteligência Artificial no Dia a Dia</h2>
                <p className='post-descricao'>Como a IA está revolucionando serviços e impactando decisões em empresas e governos. </p>
                <p className='post-data'>Publicado em: 14/07/25</p>

                <button className='post-excluir'>Excluir</button>
            </div>
        </div>

    );
}

export default Post;