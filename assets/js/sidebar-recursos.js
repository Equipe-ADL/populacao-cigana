// sidebar.js - versão 1.4 (corrigida)
// Autores: Aline Polycarpo, Danilo Blum, Luciana Nunes

document.addEventListener("DOMContentLoaded", () => {
  // --- Ajuste de altura da página (DESKTOP) ---
  (function () {
    const sidebarEl = document.getElementById("sidebar");
    const contentEl = document.getElementsByClassName("content")[0];
    const pageTitleEl = document.getElementById("page-title");
    const footerEl = document.getElementsByTagName("footer")[0];

    if (!sidebarEl || !contentEl || !pageTitleEl || !footerEl) return;

    const sectionsToDiscount = pageTitleEl.offsetHeight + footerEl.offsetHeight;

    if (sidebarEl.offsetHeight > contentEl.offsetHeight) {
      const pageContent = document.getElementById("page-content");
      if (pageContent) {
        pageContent.style.minHeight =
          sidebarEl.offsetHeight - sectionsToDiscount + "px";
      }
    }
  })();

  // --- Renderização da sidebar ---
  const sidebarRoot = document.getElementById("sidebar");

  if (!sidebarRoot) return;

  function getCurrentPath() {
    return window.location.pathname.replace(/\/$/, "");
  }

  function getBasePath() {
    const pathParts = window.location.pathname.split("/").filter(Boolean);

    // Encontra o índice da primeira pasta que parece um módulo (ex: "modulo1", "modulo2", etc.)
    const moduleIndex = pathParts.findIndex((part) => /^modulo\d+/i.test(part));

    // Se encontrou um módulo, retorna tudo que vem antes dele como basePath
    if (moduleIndex > 0) {
      return "/" + pathParts.slice(0, moduleIndex).join("/");
    }

    // Se não encontrou módulo, não há base (raiz)
    return "";
  }


  const hasActiveChild = (items) =>
    items.some(
      (item) => {
        const fullPath = getBasePath() + item.path;
        return (
          (item.type === "link" && fullPath === getCurrentPath()) ||
          (item.type === "accordion" && hasActiveChild(item.items))
        );
      }
    );


  const renderItems = (items, parentId, typeLevel = "module") =>
    items
      .map((item, index) => {
        if (item.type === "link") {
          const iconClass = item.icon ? `icon-${item.icon}` : "";
          return `
            <a href="${getBasePath() + item.path}" 
   class="list-group-item link-item ${iconClass} ${getCurrentPath() === getBasePath() + item.path ? "active" : ""}">
  ${item.title}
</a>
          `;
        }

        if (item.type === "accordion") {
          const accordionId = `${parentId}-${index}`;
          const isActive = hasActiveChild(item.items);
          const accordionClass =
            typeLevel === "module" ? "accordion-module" : "accordion-lesson";

          return `
            <div class="accordion-item ${accordionClass}">
              <h2 class="accordion-header" id="${accordionId}-header">
                <button class="accordion-button ${isActive ? "" : "collapsed"
            }" type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#${accordionId}">
                  ${item.title}
                </button>
              </h2>
              <div id="${accordionId}" 
                   class="accordion-collapse collapse ${isActive ? "show" : ""
            }"
                   ${typeLevel === "lesson"
              ? `data-bs-parent="#${parentId}"`
              : ""
            }>
                <div class="accordion-body list-group">
                  ${renderItems(item.items, accordionId, "lesson")}
                </div>
              </div>
            </div>
          `;
        }

        return `<span class="list-group-item disabled">Tipo desconhecido</span>`;
      })
      .join("");

  const renderSidebar = () => {
    sidebarRoot.innerHTML = `
      <div class="sidebar__inner">
        <!-- Seção Mobile -->
        <section class="sidebar__section mobile-only">
          <div class="sidebar__section-header">
            <div class="course-name">
              <h2>${course.title}</h2>
            </div>
            <div class="mobile-toggle-close">
              <a class="mobile-toggle__button" role="button" tabindex="0">
                <span class="icon material-symbols-rounded">read_more</span>
              </a>
            </div>
          </div>
        </section>

        <!-- Botão de esconder sidebar -->
        <!-- <section class="sidebar__section">
          <div class="sidebar__section-hidebar">
            <button id="hidebar-button" type="button" tabindex="0" aria-label="Abrir e fechar menu lateral."></button>
          </div>
        </section> -->

        <!-- Lista de módulos -->
        <section class="sidebar__section">
          <div class="sidebar__section-accordion">
            <div class="accordion" id="sidebarAccordion">
             
                    <div class="sidebar__topic-list">
            <a href="#abas" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 1. Abas</a>

            <a href="#accordion" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 2.
              Accordion</a>

            <a href="#accordion-imagem" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 3. Accordion com imagem</a>

            <a href="#botoes" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 4. Botões</a>

            <a href="#boxes" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 5. Boxes
              destaques</a>

            <a href="#cards" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 6. Cards</a>

            <a href="#compare" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 7.
              Comparação</a>

            <a href="#citacao" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 8.
              Citação</a>

            <a href="#destaques" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 9.
              Destaques</a>

            <a href="#flipcard" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 10.
              Flipcard</a>

            <a href="#imagens" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 11.
              Imagens</a>


            <a href="#listas" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 12.
              Listas</a>

            <a href="#modais" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 13.
              Modais</a>

            <a href="#popover" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 14.
              Popover</a>

            <a href="#swiper" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 15.
              Swiper</a>

            <a href="#sliders" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 16.
              Sliders</a>

            <a href="#tabela" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 17.
              Tabela</a>

            <a href="#timeline-vertical" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 18. Timeline Vertical</a>

            <a href="#timeline-zigzag" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 19. Timeline Zig-Zag</a>

            <a href="#videos" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 20.
              Vídeos</a>

            <a href="#quiz" tabindex="0" role="link" class="sidebar__btn sidebar__list-item"><span class="material-symbols-rounded" aria-label="Tópico não concluído"></span> 21. Quiz</a>
          </div>

            </div>
          </div>
        </section>
      </div>
    `;
  };

  // --- Atualiza visual do link ativo dinamicamente ---
  const updateActiveState = () => {
    const links = sidebarRoot.querySelectorAll(".link-item");
    const current = getCurrentPath();

    links.forEach((link) => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");

        // Abre accordions ancestrais
        const collapse = link.closest(".accordion-collapse");
        if (collapse && !collapse.classList.contains("show")) {
          const button = collapse
            .closest(".accordion-item")
            ?.querySelector(".accordion-button");
          button?.classList.remove("collapsed");
          collapse.classList.add("show");
        }
      } else {
        link.classList.remove("active");
      }
    });
  };

  // --- Render e inicializa ---
  renderSidebar();
  updateActiveState();

  // --- Observa mudanças de rota (pushState / replaceState / popstate) ---
  const observeNavigation = () => {
    const _wrap = (type) => {
      const orig = history[type];
      return function () {
        const rv = orig.apply(this, arguments);
        // Aguarda o DOM atualizar antes de disparar o evento
        setTimeout(() => window.dispatchEvent(new Event("locationchange")), 50);
        return rv;
      };
    };

    history.pushState = _wrap("pushState");
    history.replaceState = _wrap("replaceState");

    window.addEventListener("popstate", () =>
      setTimeout(() => window.dispatchEvent(new Event("locationchange")), 50)
    );

    // Evento unificado para qualquer mudança de rota
    window.addEventListener("locationchange", updateActiveState);
  };

  observeNavigation();

  // --- StickySidebar ---

  // --- StickySidebar (ativo apenas no desktop) ---
  if (typeof StickySidebar !== "undefined" && window.innerWidth > 992) {
    new StickySidebar("#sidebar", {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: ".content",
      innerWrapperSelector: ".sidebar__inner",
    });
    console.log("StickySidebar ativado (desktop)");
  }


  // --- Botão para recolher / expandir sidebar (DESKTOP) ---
  const hidebarButton = document.getElementById("hidebar-button");
  const pageWrapper = document.getElementById("page");
  const sidebarInner = document.querySelector(".sidebar__inner");

  if (hidebarButton && pageWrapper && sidebarInner) {
    hidebarButton.addEventListener("click", () => {
      const sidebarInnerPosition = window.getComputedStyle(sidebarInner).position;
      const isFixed = sidebarInnerPosition === "fixed";

      if (!sidebarRoot.classList.contains("hide")) {
        sidebarRoot.style.marginLeft = "-370px";
        if (isFixed) sidebarInner.style.left = "-370px";
        hidebarButton.style.left = "10px";
        pageWrapper.style.marginLeft = "10px";
        hidebarButton.classList.toggle("hidebar-button--close");
        sidebarRoot.classList.add("hide");
      } else {
        sidebarRoot.style.marginLeft = "0px";
        if (isFixed) sidebarInner.style.left = "0px";
        hidebarButton.style.left = "380px";
        pageWrapper.style.marginLeft = "380px";
        hidebarButton.classList.toggle("hidebar-button--close");
        sidebarRoot.classList.remove("hide");
      }
    });
  }

  // --- Mobile toggle ---
  const sidebarToggleOpen = document.querySelector(".mobile-toggle-open .mobile-toggle__button");
  const sidebarToggleClose = document.querySelector(".mobile-toggle-close .mobile-toggle__button");
  const htmlPage = document.querySelector("html");

  if (sidebarToggleOpen) {
    sidebarToggleOpen.addEventListener("click", () => {
      sidebarRoot.classList.add("sidebar-show");
      htmlPage.classList.add('html-overflow');
    });
  }

  if (sidebarToggleClose) {
    sidebarToggleClose.addEventListener("click", () => {
      sidebarRoot.classList.remove("sidebar-show");
      htmlPage.classList.remove('html-overflow');
    });
  }

});
