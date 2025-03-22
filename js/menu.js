// SETUP
const playButton = document.getElementById("playbutton")
const selecaoPersonagem = document.getElementById("selecao-personagem");


// FUNCTIONS
function setPlayer(qtd) {
    // limpar selecao de personagem
    selecaoPersonagem.innerHTML = "";
    // para cada jogador, criar uma tabela com visualizacao e uma lista de personagens
    for (let i = 0; i < qtd; i++) {
        // criar tabela
        let player = document.createElement('div');
        player.className = 'jogador spacebetween';
        player.id = `jogador-${i + 1}`;
        // colocar visualizacao e a lista de personagens na tabela
        player.innerHTML = `
        <div class="visualizacao justifycenter wrap">
            <h3 class="dark">Jogador ${i + 1}</h3>
            <img src="assets/img/menu/personagens/nenhum.png" class="imagem-personagem">
            <p class="nome-personagem dark">..........</p>
        </div>
        <div class="lista-personagem">
            <img src="assets/img/menu/personagens/batman.png" id="batman" class="personagem">
            <img src="assets/img/menu/personagens/crseven.png" id="crseven" class="personagem">
            <img src="assets/img/menu/personagens/messi.png" id="messi" class="personagem">
            <img src="assets/img/menu/personagens/bluepen.png" id="bluepen" class="personagem">
            <img src="assets/img/menu/personagens/luva.png" id="luva" class="personagem">
            <img src="assets/img/menu/personagens/amostradinho.png" id="amostradinho" class="personagem">
            <img src="assets/img/menu/personagens/freddy.png" id="freddy" class="personagem">
            <img src="assets/img/menu/personagens/goku.png" id="goku" class="personagem">
        </div>
        `;
        // colocar a tabela na parte de selecao de personagens antes de seguir pro proximo
        selecaoPersonagem.appendChild(player);
        // colocar um evento de click com uma função em cada personagem na lista de personagens da tabela criada
        let personagenslista = player.querySelectorAll(".personagem");
        for (let personagem of personagenslista) {
            personagem.addEventListener("click", event => {
                selectCharacter(( i + 1 ), event.target.id)
            })
        }
    }
}
function selectCharacter(idjogador, nomepersonagem) {
    let jogador = document.getElementById(`jogador-${idjogador}`);
    jogador.getElementsByClassName("imagem-personagem")[0].src = `assets/img/menu/personagens/${nomepersonagem}.png`;
    jogador.getElementsByClassName("nome-personagem")[0].innerHTML = `${nomepersonagem}`;
    jogador.classList = `jogador spacebetween ${nomepersonagem}`;
}
setPlayer(1)

