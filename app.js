document.addEventListener("DOMContentLoaded", () => {
  // --- DADOS DO PORTFÓLIO ---
  // Estrutura de dados para os projetos.
  // Ajuste os caminhos das imagens e links conforme seus projetos.
  const projects = [
    {
      title: "Simulador RTP (Return to player)",
      description: "🚀 SlotRTP Optimizer: Motor de Otimização de RTP. Este projeto é um simulador e otimizador heurístico para o Return to Player (RTP) de um jogo de slot de 3 linhas e 4 colunas. Ele demonstra como um multiplicador de símbolo ajustável (o Skull) pode ser iterativamente calibrado para se aproximar de um RTP alvo definido. ✨ Destaques do Projeto (UX/CX)",
      thumbnail: "assets/project1.png", // Imagem de destaque do projeto
      demoLink: "https://sandrobreaker.github.io/RTP-simulator/", // Link para a demo (opcional)
      repoLink: "https://github.com/SandroBreaker/RTP-simulator" // Link para o repositório GitHub
    },
    {
  title: "Montador de Móveis",
  description: "Site para Orçamento para montagemdemóveis.",
  thumbnail: "assets/project2.png", // Imagem de destaque do projeto
  demoLink: "https://carlos-montador-de-moveis.github.io/montador-de-moveis/", // Link para a demo (opcional)
  repoLink: "https://github.com/carlos-montador-de-moveis/montador-de-moveis" // Link para o repositório GitHub
    }

    // Adicione mais projetos aqui
  ];

  // --- COMPONENTES DOM ---
  const portfolioGrid = document.getElementById('portfolioGrid');

  // --- FUNÇÃO PARA RENDERIZAR PROJETOS ---
  /**
   * Constrói e insere os cards de projeto no DOM.
   */
  function renderProjects() {
    if (!portfolioGrid) return; // Garante que o elemento existe

    portfolioGrid.innerHTML = ''; // Limpa qualquer conteúdo existente

    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';

      projectCard.innerHTML = `
        <img src="${project.thumbnail}" alt="Thumbnail do Projeto ${project.title}" class="project-thumbnail">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="project-link" aria-label="Ver Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ''}
            ${project.repoLink ? `<a href="${project.repoLink}" target="_blank" class="project-link" aria-label="Ver Repositório GitHub"><i class="fa-brands fa-github"></i> Repositório</a>` : ''}
          </div>
        </div>
      `;
      portfolioGrid.appendChild(projectCard);
    });
  }

  // --- INICIALIZAÇÃO ---
  renderProjects();
});
