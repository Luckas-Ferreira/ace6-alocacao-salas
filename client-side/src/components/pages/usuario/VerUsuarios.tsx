import Tabela from "../../utils/Tabela";

function VerUsuarios() {
    return (
        <section>
            <h1 className="font-bold ms-7 m-2 sm:m-7 text-text_title">Ver usuários</h1>
            <Tabela pesquisa="Pesquise por um usuário"></Tabela>
        </section>
    );
}

export default VerUsuarios;