// sidebar.js - versão 3.0
// Autores: Aline Polycarpo, Danilo Blum, Luciana Nunes

document.addEventListener("DOMContentLoaded", initSidebar);

function initSidebar() {
	const sidebarRoot = document.getElementById("sidebar");
	if (!sidebarRoot) return;

	/* =================================================
	DOM HELPERS
	================================================= */

	function el(tag, classes = [], text = null) {
		const element = document.createElement(tag);

		if (classes.length) element.classList.add(...classes);

		if (text !== null) element.textContent = text;

		return element;
	}

	/* =================================================
	UTILS
	================================================= */

	function getCurrentPath() {
		return window.location.pathname.replace(/\/$/, "");
	}

	function getBasePath() {
		const parts = window.location.pathname.split("/").filter(Boolean);

		const index = parts.findIndex((p) => /^modulo\d+/i.test(p));

		return index > 0 ? "/" + parts.slice(0, index).join("/") : "";
	}

	let modalCache = null;

	function loadModalFile() {
		if (modalCache) {
			return Promise.resolve(modalCache);
		}

		const src = "/js/modal-content/modal-sidebar.html";

		return fetch(src)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Erro ao carregar modais: " + src);
				}
				return res.text();
			})
			.then((html) => {
				modalCache = html;
				return html;
			});
	}

	const basePath = getBasePath();

	const hasActiveChild = (items) =>
		items?.some((item) => {
			if (item.type === "link") {
				const full = basePath + item.path;

				return full === getCurrentPath();
			}

			if (item.type === "accordion") {
				return hasActiveChild(item.items);
			}
		});

	/* =================================================
	COMPONENT REGISTRY
	================================================= */

	const Components = {
		link: createLinkItem,

		accordion: createAccordionItem,

		modal: createModalItem,
	};

	/* =================================================
	LINK COMPONENT
	================================================= */

	function createLinkItem(item) {
		const full = basePath + item.path;

		const link = el("a", ["list-group-item", "link-item"], item.title);

		link.href = full;

		if (item.icon) link.classList.add(`icon-${item.icon}`);

		if (full === getCurrentPath()) link.classList.add("active");

		return link;
	}

	/* =================================================
	MODAL COMPONENT
	================================================= */

	function createModalItem(item) {
		const button = el("button", ["list-group-item", "link-item"], item.title);

		button.type = "button";

		button.dataset.bsToggle = "modal";
		button.dataset.bsTarget = `#${item.modal.id}`;

		if (item.icon) button.classList.add(`icon-${item.icon}`);

		createModalIfNeeded(item.modal);

		return button;
	}

	/* =================================================
	MODAL BUILDER
	================================================= */

	function createModalIfNeeded(config) {
		if (document.getElementById(config.id)) return;

		const modal = el("div", ["modal", "fade"]);
		modal.id = config.id;

		const dialog = el("div", ["modal-dialog"]);

		if (config.size) dialog.classList.add(`modal-${config.size}`);

		const content = el("div", ["modal-content"]);

		const header = el("div", ["modal-header"]);

		const title = el("h5", ["modal-title"], config.title || "");

		const close = el("button", ["close"]);
		close.dataset.bsDismiss = "modal";
		close.innerHTML = "&times;";

		header.append(title, close);

		const body = el("div", ["modal-body"]);

		loadModalContent(config.id, body);

		content.append(header, body);

		if (config.footer) {
			const footer = el("div", ["modal-footer"]);

			const btn = el("button", ["button-primary"], config.footer);

			btn.dataset.bsDismiss = "modal";

			footer.appendChild(btn);

			content.appendChild(footer);
		}

		dialog.appendChild(content);

		modal.appendChild(dialog);

		document.body.appendChild(modal);
	}

	function loadModalContent(id, body) {
		loadModalFile().then((html) => {
			const container = document.createElement("div");
			container.innerHTML = html;

			const modalContent = container.querySelector("#" + id);

			if (!modalContent) {
				console.warn("Modal não encontrado:", id);
				return;
			}

			body.appendChild(modalContent.cloneNode(true));
		});
	}

	/* =================================================
	ACCORDION COMPONENT
	================================================= */

	function createAccordionItem(item, parent, parentId, index) {
		const id = `${parentId}-${index}`;

		const isActive = hasActiveChild(item.items);

		const accordionItem = el("div", ["accordion-item"]);

		const header = el("h2", ["accordion-header"]);
		header.id = `${id}-header`;

		const button = el("button", ["accordion-button"], item.title);

		if (!isActive) button.classList.add("collapsed");

		button.type = "button";

		button.dataset.bsToggle = "collapse";
		button.dataset.bsTarget = `#${id}`;

		button.setAttribute("aria-expanded", isActive ? "true" : "false");

		header.appendChild(button);

		const collapse = el("div", ["accordion-collapse", "collapse"]);
		collapse.id = id;

		if (isActive) collapse.classList.add("show");

		collapse.dataset.bsParent = `#${parentId}`;

		const body = el("div", ["accordion-body", "list-group"]);

		const nestedAccordion = el("div", ["accordion"]);
		nestedAccordion.id = `${id}-items`;

		body.appendChild(nestedAccordion);

		collapse.appendChild(body);

		accordionItem.append(header, collapse);

		parent.appendChild(accordionItem);

		renderItems(item.items, nestedAccordion, nestedAccordion.id);
	}

	/* =================================================
	RENDER ENGINE
	================================================= */

	function renderItems(items, parent, parentId) {
		items?.forEach((item, i) => {
			const component = Components[item.type];

			if (!component) {
				console.warn("Tipo não suportado:", item.type);

				return;
			}

			if (item.type === "accordion") {
				component(item, parent, parentId, i);
			} else {
				parent.appendChild(component(item));
			}
		});
	}

	/* =================================================
	RENDER SIDEBAR
	================================================= */

	function renderSidebar() {
		sidebarRoot.innerHTML = "";

		const sidebarInner = el("div", ["sidebar__inner"]);

		sidebarInner.appendChild(createMobileHeader());

		sidebarInner.appendChild(createModules());

		sidebarRoot.appendChild(sidebarInner);
	}

	/* =================================================
	MOBILE HEADER
	================================================= */

	function createMobileHeader() {
		const section = el("section", ["sidebar__section", "mobile-only"]);

		const header = el("div", ["sidebar__section-header"]);

		const courseName = el("div", ["course-name"]);

		const title = el("h2", [], course.title);

		courseName.appendChild(title);

		const toggle = el("div", ["mobile-toggle-close"]);

		const button = el("a", ["mobile-toggle__button"]);

		button.role = "button";

		const icon = el("span", ["icon", "material-symbols-rounded"], "read_more");

		button.appendChild(icon);

		toggle.appendChild(button);

		header.append(courseName, toggle);

		section.appendChild(header);

		return section;
	}

	/* =================================================
	MODULES ROOT
	================================================= */

	function createModules() {
		const section = el("section", ["sidebar__section"]);

		const wrap = el("div", ["sidebar__section-accordion"]);

		const accordion = el("div", ["accordion"]);

		accordion.id = "sidebarAccordion";

		renderItems(course.modules, accordion, "sidebarAccordion");

		wrap.appendChild(accordion);

		section.appendChild(wrap);

		return section;
	}

	/* =================================================
	ACTIVE STATE
	================================================= */

	function updateActiveState() {
		const links = sidebarRoot.querySelectorAll(".link-item");

		const current = getCurrentPath();

		links.forEach((link) => {
			if (link.getAttribute("href") === current) {
				link.classList.add("active");

				const collapse = link.closest(".accordion-collapse");

				if (collapse && !collapse.classList.contains("show")) {
					const button = collapse.closest(".accordion-item")?.querySelector(".accordion-button");

					button?.classList.remove("collapsed");

					collapse.classList.add("show");
				}
			} else {
				link.classList.remove("active");
			}
		});
	}

	/* =================================================
	NAVIGATION OBSERVER
	================================================= */

	function observeNavigation() {
		const wrap = (type) => {
			const orig = history[type];

			history[type] = function () {
				const rv = orig.apply(this, arguments);

				setTimeout(() => {
					window.dispatchEvent(new Event("locationchange"));
				}, 50);

				return rv;
			};
		};

		wrap("pushState");

		wrap("replaceState");

		window.addEventListener("popstate", () => {
			setTimeout(() => {
				window.dispatchEvent(new Event("locationchange"));
			}, 50);
		});

		window.addEventListener("locationchange", updateActiveState);
	}

	/* =================================================
	STICKY SIDEBAR
	================================================= */

	function initStickySidebar() {
		if (typeof StickySidebar !== "undefined" && window.innerWidth > 992) {
			new StickySidebar("#sidebar", {
				topSpacing: 0,

				bottomSpacing: 0,

				containerSelector: ".content",

				innerWrapperSelector: ".sidebar__inner",
			});
		}
	}

	/* =================================================
	HIDE SIDEBAR
	================================================= */

	function initHideSidebar() {
		const hideBtn = document.getElementById("hidebar-button");

		const page = document.getElementById("page");

		const inner = document.querySelector(".sidebar__inner");

		if (!hideBtn || !page || !inner) return;

		hideBtn.addEventListener("click", () => {
			const fixed = window.getComputedStyle(inner).position === "fixed";

			if (!sidebarRoot.classList.contains("hide")) {
				sidebarRoot.style.marginLeft = "-370px";

				if (fixed) inner.style.left = "-370px";

				hideBtn.style.left = "10px";

				page.style.marginLeft = "10px";

				hideBtn.classList.toggle("hidebar-button--close");

				sidebarRoot.classList.add("hide");
			} else {
				sidebarRoot.style.marginLeft = "0";

				if (fixed) inner.style.left = "0";

				hideBtn.style.left = "380px";

				page.style.marginLeft = "380px";

				hideBtn.classList.toggle("hidebar-button--close");

				sidebarRoot.classList.remove("hide");
			}
		});
	}

	/* =================================================
	MOBILE TOGGLE
	================================================= */

	function initMobileToggle() {
		const open = document.querySelector(".mobile-toggle-open .mobile-toggle__button");

		const close = document.querySelector(".mobile-toggle-close .mobile-toggle__button");

		const html = document.querySelector("html");

		const backToTop = document.querySelector("#back-to-top");

		if (open) {
			open.addEventListener("click", () => {
				sidebarRoot.classList.add("sidebar-show");
				backToTop.classList.toggle("hidden");

				html.classList.add("html-overflow");
			});
		}

		if (close) {
			close.addEventListener("click", () => {
				sidebarRoot.classList.remove("sidebar-show");
				backToTop.classList.toggle("hidden");

				html.classList.remove("html-overflow");
			});
		}
	}

	/* =================================================
	INIT
	================================================= */

	renderSidebar();

	updateActiveState();

	observeNavigation();

	initStickySidebar();

	initHideSidebar();

	initMobileToggle();
}
