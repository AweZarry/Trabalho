document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const genero = urlParams.get("genero");
    const API_KEY = '862df38e893342f38cb32be2b7fe646f';

    document.getElementById("titulo-genero").textContent = `Jogos de ${genero.charAt(0).toUpperCase() + genero.slice(1)}`;

    const container = document.getElementById("jogos-por-genero");

    try {
        const response = await fetch(`https://api.rawg.io/api/games?genres=${genero}&ordering=-rating&key=${API_KEY}`);
        const data = await response.json();

        data.results.forEach(jogo => {
            const card = document.createElement("div");
            card.classList.add("carta-jogo");

            card.innerHTML = `
                <img src="${jogo.background_image}" alt="${jogo.name}" class="imagem-jogo">
                <div class="info-jogo">
                    <div class="titulo-jogo">${jogo.name}</div>
                    <div class="nota-jogo">Nota: ${jogo.rating}</div>
                </div>
            `;

            card.addEventListener('click', () => {
                window.location.href = `Trabalho/view/jogpag.html?id=${jogo.id}`;
            });

            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = `<p>Erro ao carregar jogos: ${error}</p>`;
    }
});