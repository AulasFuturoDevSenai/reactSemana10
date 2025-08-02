
import Post from "./Post";

function PostsLists() {
    return (
        <div>
            <Post tipo='NOTÍCIA' 
                titulo='5 Tendências Tech para 2026'
                descricao="De computação quântica ao metaverso corporativo, conheça o que vem por aí."
                data='09/07/2025'
                />

            <Post
                tipo="ARTIGO"
                titulo="Inteligência Artificial no Dia a Dia"
                descricao="Como a IA está revolucionando serviços e impactando decisões em empresas e governos."
                data="14/07/2025"
            />
        </div>
    );
   
}

export default PostsLists;