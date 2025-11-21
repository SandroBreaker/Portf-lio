document.addEventListener("DOMContentLoaded", () => {
  // --- DADOS DO PORTFÓLIO ---
  // Adicionada propriedade 'category' para filtragem
  const projects = [
    {
      title: "Simulador RTP",
      category: "Algoritmos",
      description: "🚀 SlotRTP Optimizer: Motor heurístico de otimização de RTP para jogos de slot. Calibração iterativa de multiplicadores para atingir alvos matemáticos precisos.",
      thumbnail: "assets/project1.png", 
      demoLink: "https://sandrobreaker.github.io/RTP-simulator/", 
      repoLink: "https://github.com/SandroBreaker/RTP-simulator"
    },
    {
      title: "Montador de Móveis",
      category: "Frontend",
      description: "Plataforma de orçamento para serviços de montagem. Foco em conversão, layout responsivo e usabilidade direta para o cliente final.",
      thumbnail: "assets/project2.png", 
      demoLink: "https://carlos-montador-de-moveis.github.io/montador-de-moveis/", 
      repoLink: "https://github.com/carlos-montador-de-moveis/montador-de-moveis"
    }
    // Novos projetos podem ser adicionados aqui
  ];

  // --- COMPONENTES DOM ---
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterContainer = document.getElementById('filterContainer');
  const currentYearSpan = document.getElementById('currentYear');

  // --- FUNÇÕES AUXILIARES ---

  // 1. Atualizar Ano no Footer (Manutenção Zero)
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Tratamento de Erro de Imagem (UX Robusta)
  // Se a imagem falhar, substitui por um placeholder SVG embutido
  window.handleImageError = function(img) {
    // Evita loop infinito se o placeholder também falhar
    img.onerror = null; 
    // Substitui por um card cinza escuro com ícone de código (Data URI)
    img.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22 viewBox%3D%220 0 800 600%22%3E%3Crect fill%3D%22%232a2a2a%22 width%3D%22800%22 height%3D%22600%22%2F%3E%3Ctext fill%3D%22%23555%22 font-family%3D%22sans-serif%22 font-size%3D%2230%22 dy%3D%2210.5%22 font-weight%3D%22bold%22 x%3D%2250%25%22 y%3D%2250%25%22 text-anchor%3D%22middle%22%3E%3C%2F%3E Code Project%3C%2Ftext%3E%3C%2Fsvg%3E';
    img.alt = "Imagem indisponível";
  };

  // 3. Configurar Observador de Scroll (Scroll Reveal)
  const observerOptions = {
    threshold: 0.15, // Dispara quando 15% do elemento estiver visível
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Para de observar após animar uma vez (performance)
      }
    });
  }, observerOptions);

  function observeElements() {
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  // --- RENDERIZAÇÃO ---

  /**
   * Renderiza os projetos baseado na categoria selecionada.
   * @param {string} filter - A categoria para filtrar ('all' mostra tudo).
   */
  function renderProjects(filter = 'all') {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = ''; // Limpa grid atual

    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(p => p.category === filter);

    if (filteredProjects.length === 0) {
      portfolioGrid.innerHTML = '<p style="grid-column: 1/-1; color: var(--muted);">Nenhum projeto encontrado nesta categoria.</p>';
      return;
    }

    filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      // Adiciona classe 'hidden-element' para o observer animar a entrada
      projectCard.className = 'project-card hidden-element';

      projectCard.innerHTML = `
        <img src="${project.thumbnail}" 
             alt="Thumbnail do Projeto ${project.title}" 
             class="project-thumbnail"
             onerror="handleImageError(this)">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="project-link btn-primary" aria-label="Ver Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ''}
            ${project.repoLink ? `<a href="${project.repoLink}" target="_blank" class="project-link btn-outline" aria-label="Ver Repositório GitHub"><i class="fa-brands fa-github"></i> Repositório</a>` : ''}
          </div>
        </div>
      `;
      portfolioGrid.appendChild(projectCard);
    });

    // Reconecta o observer nos novos elementos criados
    observeElements();
  }

  /**
   * Gera os botões de filtro baseado nas categorias existentes nos dados.
   */
  function initFilters() {
    if (!filterContainer) return;

    // Extrai categorias únicas
    const categories = ['Todos', ...new Set(projects.map(p => p.category || 'Geral'))];

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.textContent = cat;
      btn.className = cat === 'Todos' ? 'filter-btn active' : 'filter-btn';
      
      btn.addEventListener('click', () => {
        // Remove classe active de todos e adiciona no atual
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filtra (mapeia 'Todos' para 'all')
        const filterValue = cat === 'Todos' ? 'all' : cat;
        renderProjects(filterValue);
      });

      filterContainer.appendChild(btn);
    });
  }

  // --- INICIALIZAÇÃO ---
  initFilters();
  renderProjects('all'); // Render inicial
  
  // Observar itens estáticos (tech stack) que já estão no HTML
  observeElements(); 
});
