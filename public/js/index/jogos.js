
const API_KEY = '862df38e893342f38cb32be2b7fe646f';
const container = document.getElementById('container-jogos');

async function carregarJogos() {
    try {
        container.innerHTML = '<div class="carregando">Carregando...</div>';
        
        
        const pagina = Math.floor(Math.random() * 50) + 1;
        const resposta = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${pagina}&page_size=12`);
        const dados = await resposta.json();
        
        
        const jogos = dados.results.map(jogo => ({
            id: jogo.id,
            nome: jogo.name,
            imagem: jogo.background_image || 'https://via.placeholder.com/300x150?text=Sem+Imagem',
            preco: (Math.random() * 200 + 30).toFixed(2),
            generos: jogo.genres.map(g => g.name).join(', '),
            plataformas: jogo.platforms ? jogo.platforms.map(p => p.platform.name).join(', ') : 'Desconhecida'
        }));
        
        
        mostrarJogos(jogos);
        
    } catch (erro) {
        console.error('Erro:', erro);
        container.innerHTML = '<div class="erro">Erro ao carregar jogos</div>';
    }
}


function mostrarJogos(jogos) {
    if (jogos.length === 0) {
        container.innerHTML = '<div class="sem-jogos">Nenhum jogo encontrado</div>';
        return;
    }

    let html = '';
    jogos.forEach(jogo => {
        html += `
        <a href="Trabalho/view/jogpag.html?id=${jogo.id}" class="carta-jogo-link">
            <div class="carta-jogo">
                <img src="${jogo.imagem}" alt="${jogo.nome}" class="imagem-jogo">
                <div class="info-jogo">
                    <div class="titulo-jogo">${jogo.nome}</div>
                    <div class="preco-jogo">R$ ${jogo.preco}</div>
                    <div class="genero-jogo"><strong>Gêneros:</strong> ${jogo.generos}</div>
                    <div class="plataforma-jogo"><strong>Plataformas:</strong> ${jogo.plataformas}</div>
                </div>
            </div>
        </a>
        `;
    });

    container.innerHTML = html;
}

carregarJogos();