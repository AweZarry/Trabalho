document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const API_KEY = '862df38e893342f38cb32be2b7fe646f';
    const container = document.getElementById("detalhes-jogo");

    try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const jogo = await response.json();

        const generos = jogo.genres.map(g => g.name).join(', ');
        const descricao = jogo.description_raw || "Descrição indisponível.";

        container.innerHTML = `
            <h1>${jogo.name}</h1>
            <img src="${jogo.background_image}" alt="${jogo.name}" class="jogo-img">
            <p class="info-extra"><i class="fa-solid fa-star"></i> <strong>Nota:</strong> ${jogo.rating}</p>
            <p class="info-extra"><i class="fa-solid fa-calendar-days"></i> <strong>Lançamento:</strong> ${jogo.released}</p>
            <p class="info-extra"><i class="fa-solid fa-layer-group"></i> <strong>Gêneros:</strong> ${generos}</p>
            <div class="descricao">
                <h2>Descrição</h2>
                <p>${descricao}</p>
            </div>
            <a class="voltar" href="../index.html"><i class="fa-solid fa-arrow-left"></i> Voltar</a>
        `;
    } catch (error) {
        container.innerHTML = `<p>Erro ao carregar detalhes: ${error}</p>`;
    }
});
