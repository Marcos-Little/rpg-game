document.addEventListener("DOMContentLoaded", () => {
    const replit = "https://8c970c47-63e4-44e6-92ed-45600e21046b-00-188d5o0uuwwtg.worf.replit.dev"
    const URL = replit + "/personagens";
    const painel = document.getElementById("painel"); //recebimento do painel
    const btnadd = document.getElementById("adicionar"); //botao adicionar
    let personagem = [];
    let id = 1;
    //carregar
    const carregarpersonagem = async () =>{
        await fetch(URL)
        .then(response => response.json())
        .then(json => {
            personagem = json;
            painelpersonagens();
        })
        .catch(error => {
            console.error(error);
            painel.innerHTML = `<h1>erro ao carregar personagem</h1>`
        })
    }
    //criar
    const criarPersonagem = async (personagem) => {
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(personagem)
        })
            .then(response => response.json())
            .then(() => carregarpersonagem())
            .catch(() => alert("Erro ao enviar produto!"));
    };
    //painel personagens
    const painelpersonagens = () => {
        painel.innerHTML = '';

        personagem.forEach(personagem => {
            const cartao = document.createElement("div");
            cartao.className = "character-grid";
            cartao.innerHTML = `<a href = "edicao.html?id=${personagem.id}" style="text-decoration: none;"> <div class="character-card">
                        <div class="card-image"></div>
                        <div class="card-info">
                            <h3 style="text-decoration: none; color: white;">${personagem.nome}</h3>
                            <p style="text-decoration: none;">${personagem.raca}</p>
                        </div>
                    </div></a>`;
            painel.appendChild(cartao)
            id = personagem.id
        });
    };

    //botao adicionar personagem
    btnadd.addEventListener("click", async event => {
        event.preventDefault();
        id++;
        let nome = "jogador" + id;
        let raca = "raça"
        const personagem = {id, nome, raca };
        criarPersonagem(personagem);
        carregarpersonagem();
    });
    //carregar personagens
    carregarpersonagem();
    //botao voltar
    btnvoltar.addEventListener("click", () =>{
        deletarJogador(id);
        window.location.href = "index.html"
    })
})
