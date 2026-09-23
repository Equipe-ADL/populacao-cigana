// Iniciar o AOS
window.addEventListener('DOMContentLoaded', () => AOS.init());

// Stick Header

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const titleHeight = document.querySelector(".header").scrollHeight;

    if (window.scrollY > 150) {
        header.classList.add("header--sticky");
    } else {
        header.classList.remove("header--sticky");
    }
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll(".copy-to-clip");

copyButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        copyToClipboard(btn);
        // tooltipShow(btn);

        tooltipFeedback(btn);
    });
});

function copyToClipboard(e) {
    const textToCopy = e.getAttribute("data-link");
    const textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
    let feedback = $('[data-toggle="tooltip"]');

    // feedback.tooltip('show');

    b.addEventListener("mouseout", () => {
        feedback.tooltip("hide");
    });
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll(".lightbox");

imageToLightbox.forEach((image) => {
    image.addEventListener("click", () => {
        if (!image.classList.contains("lightbox--show")) {
            // const getImage = image.querySelector("img");
            // const getImageSrc = getImage.getAttribute("src")
            const getImageSrc = image.getAttribute("src");
            const imageLightbox = document.createElement("div");

            imageLightbox.classList.add("lightbox__image");

            document.body.appendChild(imageLightbox);
            imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
            console.log(getImageSrc);

            image.classList.add("lightbox--show");

            document.body.style.overflow = "hidden";
            document.body.style.userSelect = "none";

            closeLightbox(imageLightbox);
        }

        function closeLightbox(e) {
            const lightboxOpen = document.querySelector(".lightbox__image");
            e.addEventListener("click", () => {
                document.body.removeChild(e);
                image.classList.remove("lightbox--show");
                document.body.style.overflow = "auto";
                document.body.style.userSelect = "auto";
            });
        }
    });
});

// Lightbox Scroll (insert the class "lightbox-scroll" into <figure>)

const imageToLightboxWithScroll = document.querySelectorAll(".lightbox-scroll");

imageToLightboxWithScroll.forEach((imageScroll) => {
    imageScroll.addEventListener("click", () => {
        if (!imageScroll.classList.contains("lightbox-scroll--show")) {
            const getImageScroll = imageScroll.querySelector("img");
            const getImageScrollSrc = getImageScroll.getAttribute("src");
            const imageLightboxScroll = document.createElement("div");

            imageLightboxScroll.classList.add("lightbox-scroll__image");

            document.body.appendChild(imageLightboxScroll);
            imageLightboxScroll.innerHTML = `<img src="${getImageScrollSrc}"/>`;
            console.log(getImageScrollSrc);

            imageScroll.classList.add("lightbox-scroll--show");

            document.body.style.overflow = "hidden";
            document.body.style.userSelect = "none";

            closeLightboxScroll(imageLightboxScroll);
        }

        function closeLightboxScroll(s) {
            const lightboxScrollOpen = document.querySelector(".lightbox-scroll__image");
            s.addEventListener("click", () => {
                document.body.removeChild(s);
                imageScroll.classList.remove("lightbox-scroll--show");
                document.body.style.overflow = "auto";
                document.body.style.userSelect = "auto";
            });
        }
    });
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    const boxAttribute = box.getAttribute("data-box");

    const boxLabel = box.querySelector(".label");

    boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais
const modalInfos = {
    creditos: {
        ariaLabel: "creditos",
        modalSize: "modal-lg",
        modalTitle: "Créditos",
        modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Alexandre Padilha</p>
						<p class="small text-muted"><em>Ministro</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>

						<p class="mb-1">Marly Cruz</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>

                        <p class="mb-1">Marco Menezes</p>
						<p class="small text-muted"><em>Diretor da Escola Nacional de Saúde Pública Sergio Arouca (ENSP)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora Geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora Adjunta</em></p>

						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Coordenadora de Produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Gerente de Produção</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de Comunicação</em></p>
					
						<p class="mb-1">Alessandra Siqueira</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>

						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>

						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
					
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>
					
						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>

						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>

						<span class="h6 mb-3 d-block">Recursos Educacionais</span>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>
						
						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>

                        <p class="mb-1">Catarina Santiago</p>
                        <p class="small text-muted"><em>Ilustração e designer gráfico</em></p>
					</div>

                    <span class="h5 mb-3 d-block">Realização</span>
					
					<div class="mb-5">
						<p class="mb-1">Vice-Direção da Escola de Governo em Saúde da ENSP/Fiocruz</p>
						<p class="small text-muted"><em>Campus Virtual Fiocruz</em></p>
					</div>

                    <span class="h5 mb-3 d-block">Apoio institucional</span>
					
					<div class="mb-5">
						<p class="mb-1">Ana Luiza Ferreira Rodrigues Caldas</p>
						<p class="small text-muted"><em>Secretária de Atenção Primária à Saúde (SAPS)</em></p>

                        <p class="mb-1">José Eudes Barroso Vieira</p>
						<p class="small text-muted"><em>Diretor do Departamento de Saúde da Família (DESF)</em></p>

                        <p class="mb-1">Ana Cláudia Cardozo Chaves</p>
						<p class="small text-muted"><em>Coordenadora-Geral de Saúde da Família e Comunidade (CGESCO)</em></p>

                        <p class="mb-1">Lilian Silva Gonçalves</p>
						<p class="small text-muted"><em>Coordenadora-Geral de Acesso e Equidade na Atenção Primária à Saúde (CGAEQ)</em></p>

                        <p class="mb-1">Juliana Azevedo Fernandes</p>
						<p class="small text-muted"><em>Coordenadora de Atributos e Ações Estratégicas da Atenção Primária à Saúde (COAE)</em></p>

                        <p class="mb-1">Samara Carolina Rodrigues</p>
						<p class="small text-muted"><em>Técnica da Coordenação de Atributos e Ações Estratégicas da Atenção Primária à Saúde (COAE)</em></p>

                        <p class="mb-1">Sueli Zeferino Ferreira Almeida</p>
						<p class="small text-muted"><em>Técnica da Coordenação de Atributos e Ações Estratégicas da Atenção Primária à Saúde (COAE)</em></p>

                        <p class="mb-1">Hannah Shiva Ludgero Farias</p>
						<p class="small text-muted"><em>Tecnologista na Coordenação de Atributos e Ações Estratégicas da Atenção Primária à Saúde (COAE)</em></p>

                        <p class="mb-1">Cláudio Luiz de França Neto</p>
						<p class="small text-muted"><em>Tecnologista na Coordenação-Geral de Acesso e Equidade na Atenção Primária à Saúde (CGAEQ)</em></p>

                        <p class="mb-1">Daniela de Macêdo Pimentel</p>
						<p class="small text-muted"><em>Assessora Técnica na Coordenação-Geral de Acesso e Equidade na Atenção Primária à Saúde (CGAEQ)</em></p>

                        <p class="mb-1">Flávia Santana Lima</p>
						<p class="small text-muted"><em>Tecnologista na Coordenação-Geral de Acesso e Equidade na Atenção Primária à Saúde (CGAEQ)</em></p>

                        <p class="mb-1">Vanessa de Souza Hacon</p>
						<p class="small text-muted"><em>Assessora Técnica na Coordenação-Geral de Mudanças Climáticas e Equidade em Saúde (CGCLIMA)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Mudanças climáticas e a atuação da Atenção Primária à Saúde – 1ª oferta (2026-2027)</span>
					
					<div class="mb-5">
						<p class="mb-1">Carlos Machado de Freitas</p>
						<p class="small text-muted"><em>Coordenação Institucional</em></p>

                        <p class="mb-1">Vânia Rocha</p>
						<p class="small text-muted"><em>Coordenação Acadêmica</em></p>

                        <p class="mb-1">Luciana Alves Pereira</p>
						<p class="small text-muted"><em>Coordenação de Produção</em></p>
					</div>

					<span class="h5 mb-3 d-block">Autoria</span>
					
					<div class="mb-5">
						<p class="mb-1">Eliane Lima e Silva</p>
						<p class="small text-muted"><em>Pesquisadora do Centro de Estudos e Pesquisas em Emergências e Desastres em Saúde da Fiocruz (Cepedes/Fiocruz) e do Laboratório de Geografia, Ambiente e Saúde da UnB (LAGAS/UnB)</em></p>

						<p class="mb-1">Maria Mitsuko Peres </p>
						<p class="small text-muted"><em>Enfermeira da Estratégia de Saúde da Família da Secretaria Municipal de Saúde do Rio de Janeiro, pesquisadora do Centro de Estudos e Pesquisas em Emergências e Desastres em Saúde (Cepedes/Fiocruz)</em></p>

						<p class="mb-1">Tatiane Moraes</p>
						<p class="small text-muted"><em>Pesquisadora do Observatório do Clima e Saúde (ICICT/Fiocruz) e do Departamento de Epidemiologia do Instituto de Medicina Social da UERJ (IMS/UERJ)</em></p>

						<p class="mb-1">Vânia Rocha</p>
						<p class="small text-muted"><em>Pesquisadora do Centro de Estudos e Pesquisas em Emergências e Desastres em Saúde da Fiocruz (Cepedes/Fiocruz)</em></p>
					</div>

                    <span class="h5 mb-3 d-block">Colaboração</span>
					
					<div class="mb-5">
						<p class="mb-1">Carlos Machado de Freitas</p>
						<p class="small text-muted"><em>Coordenador do Centro de Estudos e Pesquisas em Emergências e Desastres em Saúde da Fiocruz (Cepedes/Fiocruz) e Pesquisador da Escola Nacional de Saúde Pública Sergio Arouca/Fiocruz </em></p>

						<p class="mb-1">Jacqueline Santos da Silva</p>
						<p class="small text-muted"><em>Enfermeira, Agente Comunitária de Saúde da Estratégia de Saúde da Família da Secretaria Municipal de Saúde do Rio de Janeiro</em></p>

						<p class="mb-1">Michele da Conceição Galdino</p>
						<p class="small text-muted"><em>Enfermeira residente da Estratégia de Saúde da Família da Secretaria Municipal de Saúde do Rio de Janeiro</em></p>

						<p class="mb-1">Pedro Ruiz Barbosa Nassar</p>
						<p class="small text-muted"><em>Professor Adjunto da Universidade Federal Fluminense (UFF) e especialista em Gestão em Emergências e Desastres na Atenção Primária à Saúde</em></p>
					</div>

                    <span class="h5 mb-3 d-block">Revisão Ortográfica</span>
					
					<div class="mb-5">
						<p class="mb-1">Luciana Alves Pereira</p>
						<p class="small text-muted"><em>Assessora didático-pedagógica da VDEGS/ENSP</em></p>
					</div>

                    <span class="h5 mb-3 d-block">Agradecimento Especial</span>
					
					<div class="mb-5">
						<p class="mb-3">Este curso foi construído de forma colaborativa e ganha ainda mais significado com a generosa contribuição dos profissionais de saúde de diferentes regiões do Brasil que compartilharam seus relatos de experiência diante de secas, inundações, deslizamentos, queimadas e os demais eventos climáticos extremos.</p>

                        <p>Nosso sincero agradecimento a cada profissional que disponibilizou seu tempo, sua escuta sensível e sua vivência nos territórios para a gravação dos áudios que ilustram as aulas. Seus depoimentos dão voz às realidades locais, aproximam o conhecimento teórico do cotidiano do trabalho em saúde e evidenciam o compromisso do Sistema Único de Saúde com o cuidado, a solidariedade e a defesa da vida.</p>
					</div>
				</div>
			</div>
		`,
    },
    bibliografia: {
        ariaLabel: "bibliografia",
        modalSize: "modal-xl",
        modalTitle: "Bibliografia",
        modalBody: `
		<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion Módulos-->
            <div class="accordion accordion-flush" id="accordionBibliografia">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo1" aria-expanded="true" aria-controls="collapse1-modulo1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-modulo1" class="accordion-collapse collapse" aria-labelledby="heading1-modulo1" data-bs-parent="">

                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m1-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula1" aria-expanded="true" aria-controls="collapse-m1-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m1-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde.<em> Plano Clima Participativo:</em> aberta consulta pública para as estratégias na área de saúde – AdaptaSUS. Disponível em: <a href='https://shre.ink/AdaptaSUS' target='_blank' rel='noopener noreferrer'>https://shre.ink/AdaptaSUS</a>. Acesso em: 16 set. 2025.</li>

                                                    <li class="list-group-item">COELHO, C. A. W. et al. <em>Mudança do clima no Brasil:</em> síntese atualizada e perspectivas para decisões estratégicas. Brasília: Ministério da Ciência, Tecnologia e Inovação, 2024. Disponível em: <a href='https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl/arquivos/Relatorio_Mudanca_Clima_Brasil.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl/arquivos/Relatorio_Mudanca_Clima_Brasil.pdf</a>. Acesso em: 30 set. 2025.</li>

                                                    <li class="list-group-item">FREITAS, C. M. de; SILVA, E. L.; ROCHA, V. <em>Brasil 2050</em> – emergência climática, os desastres e os desafios para gestão de riscos e a adaptação. Rio de Janeiro: Fiocruz, 2025. Disponível em: <a href='https://saudeamanha.fiocruz.br/textos-discussao/td-90-brasil-2050-a-emergencia-climatica-os-desastres-e-os-desafios-para-gestao-de-riscos-e-a-adaptacao' target='_blank' rel='noopener noreferrer'>https://saudeamanha.fiocruz.br/textos-discussao/td-90-brasil-2050-a-emergencia-climatica-os-desastres-e-os-desafios-para-gestao-de-riscos-e-a-adaptacao</a>. Acesso em: 27 out. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BBC News Brasil. <em>Como podemos esfriar o planeta e frear o aquecimento global?</em> São Paulo: Canal BBC News Brasil, 2021, (8min45s.). Disponível em: <a href='https://youtu.be/uOrXw8lTmVo?si=uFMGjLgC3jtDKkuE' target='_blank' rel='noopener noreferrer'>https://youtu.be/uOrXw8lTmVo?si=uFMGjLgC3jtDKkuE</a>.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de Vigilância em Saúde Ambiental e Saúde do Trabalhador. <em>Mudanças climáticas para profissionais de saúde:</em> guia de bolso [recurso eletrônico]. 2. ed. rev. Brasília: Ministério da Saúde, 2026. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2026/mudancas-climaticas-para-profissionais-de-saude-guia-de-bolso.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2026/mudancas-climaticas-para-profissionais-de-saude-guia-de-bolso.pdf</a>. Acesso em: 12 jul. 2026.</li>

                                                    <li class="list-group-item">MOROSINI, L. Crise climática aumenta doenças. Desastres favorecem o aparecimento de novas doenças e produzem efeito cascata negativo na atenção à saúde. <em>Revista Radis</em>. Rio de Janeiro, 10 de maio de 2024. Disponível em: <a href='https://radis.ensp.fiocruz.br/reportagem/mudancas-climaticas/crise-climatica-aumenta-doencas/' target='_blank' rel='noopener noreferrer'>https://radis.ensp.fiocruz.br/reportagem/mudancas-climaticas/crise-climatica-aumenta-doencas/</a>. Acesso em: 30 set. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula2" aria-expanded="false" aria-controls="collapse-m1-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m1-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Saúde Mental dos Trabalhadores dos Serviços de Saúde:</em> diretrizes para formulação de políticas públicas em Emergências em Saúde Pública. Brasília: Ministério da Saúde, 2024. </li>

                                                    <li class="list-group-item">FREITAS, C. M.; BARCELLOS, C. Desastre no Rio Grande do Sul, Brasil: crise climática, resposta do Sistema Único de Saúde e desafios dos novos tempos. <em>Cadernos de Saúde Pública</em>, v. 40, n. 11, e00114424, 2024.</li>

                                                    <li class="list-group-item">FREITAS, C. M.; SILVA, E. L.; ROCHA, V. Do risco à reconstrução: estratégias dos sistemas de saúde em desastres e emergências em saúde pública. <em>Políticas e Sistemas de Saúde no Brasil</em>. Rio de Janeiro: Fiocruz, Cebes, 2025 (no prelo). </li>

                                                    <li class="list-group-item">FREITAS, C. L. S. de; PAIVA, F. S. de. Desastres socioambientais e sofrimento psicossocial no contexto latino-americano: uma revisão integrativa. <em>Psicol. Soc</em>. [Internet]. 2025; 37:e298777. Disponível em: <a href='https://doi.org/10.1590/1807-0310/2025v37298777' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/1807-0310/2025v37298777</a>. Acesso em: 05 maio 2025.</li>

                                                    <li class="list-group-item">INTERGOVERNMENTAL PANEL ON CLIMATE CHANGE (IPCC). Climate Change:<em></em> Impacts, Adaptation and Vulnerability. Summary for Policymakers. Cambridge: Cambridge University Press, 2022.</li>

                                                    <li class="list-group-item">OXFORD LANGUAGES. Word of the Year 2019: Climate Emergency. Disponível em: <a href='https://languages.oup.com/word-of-the-year/2019/' target='_blank' rel='noopener noreferrer'>https://languages.oup.com/word-of-the-year/2019/</a>. Acesso em: 30 set. 2025.</li>

                                                    <li class="list-group-item">UNITED NATIONS OFFICE FOR DISASTER RISK REDUCTION (UNDRR). Sendai Framework Terminology on Disaster Risk Reduction. 2023. Disponível em: <a href='https://www.undrr.org/terminology#R' target='_blank' rel='noopener noreferrer'>https://www.undrr.org/terminology#R</a>. Acesso em: 30 abr. 2025.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION (WHO). <em>Glossary of Health Emergency and Disaster Risk Management Terminology</em>. Geneva: WHO, 2019.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério do Meio Ambiente e Mudança do Clima. Secretaria Nacional de Mudança do Clima. <em>Plano Clima-Adaptação</em>. 2024. Disponível em: <a href='https://www.gov.br/mma/pt-br/composicao/smc/plano-clima/plano-clima-adaptacao' target='_blank' rel='noopener noreferrer'>https://www.gov.br/mma/pt-br/composicao/smc/plano-clima/plano-clima-adaptacao</a>. Acesso em: 30 jul. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Plano Clima Participativo:</em> aberta consulta pública para as estratégias na área de saúde – AdaptaSUS. Disponível em: <a href='https://brasilparticipativo.presidencia.gov.br/processes/planoclima/f/543/' target='_blank' rel='noopener noreferrer'>https://brasilparticipativo.presidencia.gov.br/processes/planoclima/f/543/</a>. Acesso em: 16 set. 2025.</li>

                                                    <li class="list-group-item">SINIMBÚ, F. Crise climática é amplificadora de outras crises, alerta pesquisadora. Especialista analisa os efeitos das mudanças climáticas para o planeta. <em>Agência Brasil</em>. Brasília, 22 de janeiro de 2025. Disponível em: <a href='https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2025-01/crise-climatica-e-amplificadora-de-outras-crises-alerta-pesquisadora' target='_blank' rel='noopener noreferrer'>https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2025-01/crise-climatica-e-amplificadora-de-outras-crises-alerta-pesquisadora</a>. Acesso em: 16 set. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula3" aria-expanded="false" aria-controls="collapse-m1-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m1-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M.; SILVA, E. L.; ROCHA, V. Do risco à reconstrução: estratégias dos sistemas de saúde em desastres e emergências em saúde pública. <em>Políticas e Sistemas de Saúde no Brasil</em>. Rio de Janeiro: Fiocruz e Cebes, 2025. (no prelo)</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M.; MAZOTO, M. L.; ROCHA, V. Guia de preparação e respostas do setor saúde aos desastres. Rio de Janeiro: Fundação Oswaldo Cruz e Ministério da Saúde, 2018. 159 p. Disponível em: <a href='https://arca.fiocruz.br/items/451a5442-3dc9-4ccd-95f0-6ef5b7c9a3d6' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/451a5442-3dc9-4ccd-95f0-6ef5b7c9a3d6</a>. Acesso em: 30 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. et al. <em>Orientações para gestão de risco de desastres e emergências em saúde pública: </em>abordagem integrada atenção primária e vigilância em saúde. Rio de Janeiro: Fundação Oswaldo Cruz e Ministério da Saúde, 2023. 116 p. Disponível em: <a href='https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e</a>. Acesso em: 30 out. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula4" aria-expanded="false" aria-controls="collapse-m1-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m1-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. et al. <em>Orientações para gestão de risco de desastres e emergências em saúde pública:</em> abordagem integrada atenção primária e vigilância em saúde. Rio de Janeiro: Fundação Oswaldo Cruz e Ministério da Saúde, 2023. 116 p. Disponível em: <a href='https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e</a>. Acesso em: 30 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LAMBERTI-CASTRONUOVO, A. et al. Primary health care disaster preparedness: a review of the literature and the proposal of a new framework. <em>International Journal of Disaster Risk Reduction</em>, v. 81, p. 103278, 2022.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION (WHO). <em>Health emergency and disaster risk management framework</em>. Genebra: WHO, 2019.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <em>Diretriz nacional para atuação integrada dos agentes de combate às endemias e agentes comunitários de saúde no território</em> [recurso eletrônico]. Brasília: Ministério da Saúde, 2025. 51 p. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/diretriz_atuacao_integrada_agentes_combate_endemias.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/diretriz_atuacao_integrada_agentes_combate_endemias.pdf</a>. Acesso em 17 jun. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de Vigilância em Saúde Ambiental e Saúde do Trabalhador. <em>Mudanças climáticas para profissionais de saúde:</em> guia de bolso [recurso eletrônico]. 2. ed. Brasília: Ministério da Saúde, 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Fernando F. et at. (Orgs.) <em>Guia de Vigilância Popular em Saúde e Emergências Climáticas</em>. Eusébio-CE: Fiocruz Ceará, 2026. 171 p. Disponível em: <a href='https://ceara.fiocruz.br/serpovos/download/guia-de-vigilancia-popular-em-saude-e-emergencias-climaticas/' target='_blank' rel='noopener noreferrer'>https://ceara.fiocruz.br/serpovos/download/guia-de-vigilancia-popular-em-saude-e-emergencias-climaticas/</a>. Acesso em: 12 jul. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NOGUEIRA, P. T. A. <em>et al</em>. A necessidade de construção de assistência e Vigilância em Saúde no contexto das mudanças climáticas – ‘um passo à frente e você não estará mais no mesmo lugar’. <em>Saúde em Debate</em>, v. 48, p. e8696, 2024.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo2" aria-expanded="false" aria-controls="collapse1-modulo2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-modulo2" class="accordion-collapse collapse" aria-labelledby="heading1-modulo2" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m2-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula1" aria-expanded="true" aria-controls="collapse-m2-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m2-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Presidência da República. Casa Civil. <em>Nota Técnica n. 2/2025/SADJ-VI/SEPAC/CC/PR</em>. Brasília: Casa Civil, 2025. Disponível em: <a href='https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/NotaTecnica2.2025_SADJVISEPAC.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/NotaTecnica2.2025_SADJVISEPAC.pdf</a>. Acesso em: 3 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_BRASIL. L<em>ei n. 12.608 de 10 de abril de 2012</em>. Institui a Política Nacional de Proteção e Defesa Civil. Brasília: Presidência da República, 2012. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm</a>. Acesso em: 03 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério do Desenvolvimento Regional. Secretaria Nacional de Proteção e Defesa Civil. Universidade Federal de Santa Catarina. Centro de Estudos e Pesquisas em Engenharia e Defesa Civil. <em>A P&DC e os 30 anos de desastres no Brasil: </em>(1991 - 2020). Florianópolis: Fepese, 2022. Disponível em: <a href='https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/A_p_amp_dc_e_os_30_anos_de_desastres_no_Brasil_20221_compressed.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/A_p_amp_dc_e_os_30_anos_de_desastres_no_Brasil_20221_compressed.pdf</a>. Acesso em: 03 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, Carlos Machado de; SILVA, Eliane L. e; ROCHA, Vânia. <em>Brasil 2050:</em> a emergência climática, os desastres e os desafios para gestão de riscos e a adaptação. Rio de Janeiro: ENSP/Fiocruz, 2025. (Saúde Amanhã/Textos para Discussão, 90). Disponível em: <a href='https://arca.fiocruz.br/items/d5342e72-5925-49dc-97de-17138ec27819' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/d5342e72-5925-49dc-97de-17138ec27819</a>. Acesso em: 03 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, Carlos Machado de; ROCHA, Vânia (Orgs.). <em>Agentes locais em desastres naturais:</em> defesa civil e saúde na redução de riscos. Rio de Janeiro: Fiocruz, 2014. 169 p. Livro do Aluno. Disponível em: <a href='https://arca.fiocruz.br/items/6f0e984b-90a0-4a19-b21b-bfdc49d7688f' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/6f0e984b-90a0-4a19-b21b-bfdc49d7688f</a>. Acesso em: 03 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARENGO, J. A. et al. Estado do clima, extremos de clima e desastres no Brasil em 2024. Brasília: Cemaden, 2024. Disponível em: <a href='http://inctmc2.cemaden.gov.br/wp-content/uploads/2025/03/Relatorio_NT-Clima_Extremos_Desastres-2024-Brasil-digital.pdf' target='_blank' rel='noopener noreferrer'>http://inctmc2.cemaden.gov.br/wp-content/uploads/2025/03/Relatorio_NT-Clima_Extremos_Desastres-2024-Brasil-digital.pdf</a>. Acesso em: 25 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SWINBURN B. A. et al. The global syndemic of obesity, undernutrition, and Climate Change: The Lancet Commission report. <em>Lancet</em>. Feb 23; 393 (10173): 791-846, 2019. </li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M.; BARCELLOS, C. Desastre no Rio Grande do Sul, Brasil: crise climática, resposta do Sistema Único de Saúde e desafios dos novos tempos. <em>Cadernos de Saúde Pública</em>. v. 40, n. 11, e00114424. Disponível em: <a href='https://doi.org/10.1590/0102-311XEN114424' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/0102-311XEN114424</a>. Acesso em: 25 nov. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula2" aria-expanded="false" aria-controls="collapse-m2-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m2-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério do Meio Ambiente e Mudança do Clima. Ministério da Ciência, Tecnologia e Inovação. Ministério da Saúde. <em>Plano Clima Adaptação</em> – Plano Setorial de Saúde: Versão preliminar. Brasília: MMA/MCTI/MS, 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Fundação Oswaldo Cruz. <em>Guia de preparação e respostas do setor saúde aos desastres</em>. Rio de Janeiro: Fiocruz, 2018.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, Carlos Machado de; SILVA, Eliane L. e; ROCHA, Vânia. <em>Brasil 2050</em>: a emergência climática, os desastres e os desafios para gestão de riscos e a adaptação. Rio de Janeiro: ENSP/Fiocruz, 2025. (Saúde Amanhã/Textos para Discussão, 90). Disponível em: <a href='https://arca.fiocruz.br/items/d5342e72-5925-49dc-97de-17138ec27819' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/d5342e72-5925-49dc-97de-17138ec27819</a>. Acesso em: 03 nov. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Recomenda-se, ainda, aprofundar o conteúdo sobre prevenção do suicídio, incluindo orientações práticas para identificação e manejo de pessoas em risco, avaliação da urgência, medidas de proteção, acionamento da rede de atenção e acompanhamento dos casos. Sugere-se considerar, como referência também a Cartilha de Prevenção de Suicídios (2026): <a href='https://www.gov.br/saude/pt-br/centrais-deconteudo/publicacoes/cartilhas/2026/cartilha-prevencao-de-suicidios.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-deconteudo/publicacoes/cartilhas/2026/cartilha-prevencao-de-suicidios.pdf</a></li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MOROSINI, Liseane. Crise climática aumenta doenças. RADIS <em>Comunicação e Saúde</em>, Rio de Janeiro, 10 maio 2024. Disponível em: <a href='https://radis.ensp.fiocruz.br/reportagem/mudancas-climaticas/crise-climatica-aumenta-doencas/' target='_blank' rel='noopener noreferrer'>https://radis.ensp.fiocruz.br/reportagem/mudancas-climaticas/crise-climatica-aumenta-doencas/</a>. Acesso em: 25 nov. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula3" aria-expanded="false" aria-controls="collapse-m2-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m2-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">FREITAS, Carlos Machado de; SILVA, Eliane L. e; ROCHA, Vânia. <em>Brasil 2050:</em> a emergência climática, os desastres e os desafios para gestão de riscos e a adaptação. Rio de Janeiro: ENSP/Fiocruz, 2025. (Saúde Amanhã/Textos para Discussão, 90). Disponível em: <a href='https://arca.fiocruz.br/items/d5342e72-5925-49dc-97de-17138ec27819' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/d5342e72-5925-49dc-97de-17138ec27819</a>. Acesso em: 03 nov. 2025.</li>

                                                    <li class="list-group-item">FREITAS, C. M.; BARCELLOS, C. Reconstruir melhor: lições dos desastres para os serviços de saúde. <em>Cadernos de Saúde Pública</em>, Rio de Janeiro, v. 40, n. 1, p. e000000, 2024.</li>

                                                    <li class="list-group-item">FREITAS, Carlos Machado <em>et al</em>. <em>Orientações para gestão de risco de desastres e emergências em saúde pública:</em> abordagem integrada, atenção primária e vigilância em saúde. Rio de Janeiro: Fiocruz/ENSP/CEPEDES, 2023. 116 p. Relatório de pesquisa. Disponível em: <a href='https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e</a>. Acesso em: 03 nov. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <em>Plano de ação em saúde de Belém para a adaptação do setor da saúde às mudanças climáticas</em>. Brasília, DF: Ministério da Saúde, 2025. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/cop30/publicacoes/plano-de-acao-em-saude-de-belem-portugues.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/cop30/publicacoes/plano-de-acao-em-saude-de-belem-portugues.pdf</a>. Acesso em: 25 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Vigilância em Saúde. <em>Folder</em> - Orientações à população em situação de enchentes. Brasília: Ministério da Saúde, 2026. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/enchentes/orientacoes-a-populacao-em-situacao-de-enchentes.pdf/view' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/enchentes/orientacoes-a-populacao-em-situacao-de-enchentes.pdf/view</a>. Acesso em: 12 jul. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo3" aria-expanded="false" aria-controls="collapse1-modulo3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-modulo3" class="accordion-collapse collapse" aria-labelledby="heading1-modulo3" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula1" aria-expanded="true" aria-controls="collapse-m3-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m3-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANAZAWA, T. M.; CARMO, R. L. do; MONTEIRO, A. M. V. <em>A grave escassez hídrica da Região Metropolitana de Campinas entre 2013 e 2015 enquanto um desastre socialmente construído:</em> abordagem metodológica multiescalar. Campinas, SP: Núcleo de Estudos de População “Elza Berquó”/Unicamp, 2017.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALPINO, T. de M. A. <em>Seca, condições de vida e saúde no Nordeste brasileiro:</em> o caso do município de Itapetim, Pernambuco. 2015. 218 f. Dissertação (Mestrado em Saúde Pública). Escola Nacional de Saúde Pública Sergio Arouca, Fundação Oswaldo Cruz, Rio de Janeiro, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. de; MAZOTO, M. L.; ROCHA, V. da (Orgs.). G<em>uia de preparação e respostas do setor saúde aos desastres.</em> Rio de Janeiro: Fiocruz; Secretaria de Vigilância em Saúde, 2018. 161 p. Disponível em: <a href='https://docs.bvsalud.org/biblioref/2024/09/1571685/guiadepreparacaoerespostasdosetorsaudeaosdesastres.pdf' target='_blank' rel='noopener noreferrer'>https://docs.bvsalud.org/biblioref/2024/09/1571685/guiadepreparacaoerespostasdosetorsaudeaosdesastres.pdf</a>. Acesso em: 01 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. de; SILVA, E. L. e; ROCHA, V. <em>Brasil 2050:</em> a emergência climática, os desastres e os desafios para gestão de riscos e a adaptação. Rio de Janeiro: ENSP/Fiocruz, 2025. (Saúde Amanhã/ Textos para Discussão, 90).</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERGOVERNMENTAL PANEL ON CLIMATE CHANGE (IPCC). <em>Climate Change 2023: Synthesis Report, Summary for Policymakers.</em> Geneva: IPCC, 2023.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SENA, A. R. M.; ALPINO, T. M. A. <em>Seca silenciosa, saúde invisível:</em> um desastre naturalizado no Semiárido do Brasil. Rio de Janeiro: Editora Fiocruz, 2021.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, E. L. <em>Transversalidade das políticas públicas na gestão de risco de inundações.</em> Brasília: Universidade de Brasília, 2019</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNITED NATIONS OFFICE FOR DISASTER RISK REDUCTION (UNDRR). Terminology on Disaster Risk Reduction. Genebra: UNDRR, 2022.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUZA, R. F. de; NASCIMENTO, S. L. do. Doenças e agravos no contexto das grandes inundações graduais no estado do Amazonas, BR. <em>Hygeia:</em> Revista Brasileira de Geografia Médica e da Saúde, v. 13, n. 26, 2017.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SENA, A. et al. Medindo o invisível: análise dos Objetivos de Desenvolvimento Sustentável em populações expostas à seca. <em>Ciência & Saúde Coletiva</em>, v. 21, p. 671-684, 2016.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula2" aria-expanded="false" aria-controls="collapse-m3-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m3-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANAZAWA, T. M.; CARMO, R. L. do; MONTEIRO, A. M. V. <em>A grave escassez hídrica da Região Metropolitana de Campinas entre 2013 e 2015 enquanto um desastre socialmente construído:</em> abordagem metodológica multiescalar. Campinas, SP: Núcleo de Estudos de População “Elza Berquó”/Unicamp, 2017.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SENA, A. R. M.; ALPINO, T. M. A. <em>Seca silenciosa, saúde invisível:</em> um desastre naturalizado no Semiárido do Brasil. Rio de Janeiro: Editora Fiocruz, 2021.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, E. L. <em>Transversalidade das políticas públicas na gestão de risco de inundações</em>. Brasília: Universidade de Brasília, 2019.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARREIROS, R, et al. Entenda o que é justiça climática. <em>WRI Brasil</em>. São Paulo, 11 fev. 2025. Disponível em: <a href=' https://www.wribrasil.org.br/noticias/entenda-o-que-e-justica-climatica' target='_blank' rel='noopener noreferrer'>https://www.wribrasil.org.br/noticias/entenda-o-que-e-justica-climatica</a>. Acesso em: 07 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COSTA, P. V. M. Secas, desigualdades e saúde no Semiárido Brasileiro. <em>Radar Cidacs</em>. Centro de Integração de Dados e Conhecimentos para Saúde/Fiocruz Bahia. Salvador, 25 jul. 2025. Disponível em: <a href='https://cidacs.bahia.fiocruz.br/2025/07/secas-desigualdades-e-saude-no-semiarido-brasileiro/' target='_blank' rel='noopener noreferrer'>https://cidacs.bahia.fiocruz.br/2025/07/secas-desigualdades-e-saude-no-semiarido-brasileiro/</a>. Acesso em: 07 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERGOVERNMENTAL PANEL ON CLIMATE CHANGE (IPCC). <em>Climate Change 2023: Synthesis Report, Summary for Policymakers</em>. Geneva: IPCC, 2023.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SALDIVA, P. Crise hídrica pode afetar saúde da população, alerta Paulo Saldiva. <em>Jornal da USP</em>. São Paulo, 05 set. 2021. Disponível em: <a href='https://jornal.usp.br/?p=432668' target='_blank' rel='noopener noreferrer'>https://jornal.usp.br/?p=432668</a>. Acesso em: 07 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNITED NATIONS OFFICE FOR DISASTER RISK REDUCTION (UNDRR). <em>Terminology on Disaster Risk Reduction</em>. Genebra: UNDRR, 2022.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula3" aria-expanded="false" aria-controls="collapse-m3-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m3-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALPINO, T. de M. A. <em>Seca, condições de vida e saúde no Nordeste brasileiro:</em> o caso do município de Itapetim, Pernambuco. 2015. 218 f. Dissertação (Mestrado em Saúde Pública). Escola Nacional de Saúde Pública Sergio Arouca, Fundação Oswaldo Cruz, Rio de Janeiro, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALPINO, T. de A.; SENA, A. R. M. de; FREITAS, C. M. de. Desastres relacionados à seca e saúde coletiva – uma revisão da literatura científica. <em>Ciência & Saúde Coletiva</em>, v. 21, n. 3, p. 809-820, mar. 2016.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de Emergências em Saúde Pública. <em>Plano de Contingência para Emergências em Saúde Pública por chuvas intensas e desastres associados</em> [recurso eletrônico]. Brasília: Ministério da Saúde, 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Estratégias e Políticas de Saúde Comunitária. <em>Inundações: diretrizes para profissionais de saúde: unidades básicas de saúde</em> [recurso eletrônico]. 1. ed. rev. Brasília: Ministério da Saúde, 2024.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. <em>O trabalho do agente comunitário de saúde</em>. Brasília: Ministério da Saúde, 2009. Disponível em: <a href='http://189.28.128.100/dab/docs/publicacoes/geral/manual_acs.pdf' target='_blank' rel='noopener noreferrer'>http://189.28.128.100/dab/docs/publicacoes/geral/manual_acs.pdf</a>. Acesso em: 07 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. et al. <em>Orientações para gestão de risco de desastres e emergências em saúde pública:</em> abordagem integrada, atenção primária e vigilância em saúde. Rio de Janeiro: Fiocruz/ENSP/CEPEDES, 2023. 116 p. Relatório de pesquisa. Disponível em:<a href=' https://arca.fiocruz.br/handle/icict/61692' target='_blank' rel='noopener noreferrer'> https://arca.fiocruz.br/handle/icict/61692</a>. Acesso em: 07 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. de. <em>Guia</em> – Preparação para resposta à emergência em saúde pública por seca e estiagem. Rio de Janeiro: ENSP, Fiocruz, 2021. 235 p. Disponível em: <a href='https://informe.ensp.fiocruz.br/assets/anexos/c9e480d9c1f855dc86484519b372fbaa.PDF' target='_blank' rel='noopener noreferrer'>https://informe.ensp.fiocruz.br/assets/anexos/c9e480d9c1f855dc86484519b372fbaa.PDF</a>. Acesso em: 07 abr. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. de. <em>Guia</em> – Preparação para resposta à emergência em saúde pública por inundações graduais. Rio de Janeiro: ENSP, Fiocruz, 2021. 227 p. Disponível em: <a href='https://informe.ensp.fiocruz.br/assets/anexos/77f24366813d7fd4b757a3aaea7790a7.PDF' target='_blank' rel='noopener noreferrer'>https://informe.ensp.fiocruz.br/assets/anexos/77f24366813d7fd4b757a3aaea7790a7.PDF</a>. Acesso em: 07 abr. 2026.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <em>Diretriz Nacional para Atuação Integrada dos Agentes de Combate às Endemias e Agentes Comunitários de Saúde no Território</em> [recurso eletrônico]. Brasília: Ministério da Saúde, 2025. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia-ambiental/diretriz-nacional-para-atuacao-dos-ace-e-acs-no-territorio.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia-ambiental/diretriz-nacional-para-atuacao-dos-ace-e-acs-no-territorio.pdf</a>. Acesso em: 12 jul. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <em>Nota Técnica Conjunta</em> n. 217/2024-CGESCO/DESCO/SAPS/MS-DAHU/SAES/MS-DAPSI/SESAI/MS. Brasília: Ministério da Saúde, 2024. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2024/nota-tecnica-conjunta-no-217-2024-cgesco-desco-saps-ms-e-dahu-saes-ms-e-dapsi-sesai-ms' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2024/nota-tecnica-conjunta-no-217-2024-cgesco-desco-saps-ms-e-dahu-saes-ms-e-dapsi-sesai-ms</a>. Acesso em: 13 jul. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FAUSTO, M. C. R. et al. Sustentabilidade da Atenção Primária à Saúde em territórios rurais remotos na Amazônia fluvial: organização, estratégias e desafios. <em>Ciência & Saúde Coletiva</em>, Rio de Janeiro, v. 27, p. 1605-1618, 2022. Disponível em: <a href='https://www.scielo.br/j/csc/a/zZdBtL6QPw35vSPYz75XRPv/?format=pdf&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/zZdBtL6QPw35vSPYz75XRPv/?format=pdf&lang=pt</a>. Acesso em: 07 abr. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo4" aria-expanded="false" aria-controls="collapse1-modulo4">Módulo 4</button>
                    </h5>
                    <div id="collapse1-modulo4" class="accordion-collapse collapse" aria-labelledby="heading1-modulo4" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m4-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m4-aula1" aria-expanded="true" aria-controls="collapse-m4-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m4-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m4-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Ciência, Tecnologia e Inovação (MCTI). <em>Clima em síntese:</em> estudos sobre saúde e ondas de calor no Brasil (2015-2025). Brasília: MCTI, 2025. Disponível em: <a href='https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl/paginas/clima-em-sintese/clima-em-sintese_estudos-sobre-saude-e-ondas-de-calor-no-brasil-2015-2025.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl/paginas/clima-em-sintese/clima-em-sintese_estudos-sobre-saude-e-ondas-de-calor-no-brasil-2015-2025.pdf</a>. Acesso em: 20 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GARTLAND, Lisa. <em>Ilhas de calor:</em> como mitigar zonas de calor em áreas urbanas. Trad. Silvia Helena Gonçalves. São Paulo: Oficina de Textos, 2010. Disponível em: <a href='http://ofitexto.arquivos.s3.amazonaws.com/Degustacao-Ilhas-de-Calor.pdf' target='_blank' rel='noopener noreferrer'>http://ofitexto.arquivos.s3.amazonaws.com/Degustacao-Ilhas-de-Calor.pdf</a>. Acesso em: 20 nov. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BECKER, L. <em>Entenda por que o aquecimento global também causa ondas de frio e deve piorá-las</em>. Um Só Planeta, Globo.com, 23 ago. 2024. Disponível em: <a href='https://umsoplaneta.globo.com/clima/noticia/2024/08/23/entenda-por-que-o-aquecimento-global-tambem-causa-ondas-de-frio-e-deve-piora-las.ghtml' target='_blank' rel='noopener noreferrer'>https://umsoplaneta.globo.com/clima/noticia/2024/08/23/entenda-por-que-o-aquecimento-global-tambem-causa-ondas-de-frio-e-deve-piora-las.ghtml</a>. Acesso em: 20 nov. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m4-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m4-aula2" aria-expanded="false" aria-controls="collapse-m4-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m4-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m4-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EBI, K. L. et al. Hot weather and heat extremes: health risks. <em>The Lancet</em>, v. 398, i. 10301, p. 698-708, ago 2021. Disponível em: <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2821%2901208-3/fulltext' target='_blank' rel='noopener noreferrer'>https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2821%2901208-3/fulltext</a>. Acesso em: 18 jun. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS NOURI, A. et al. Detection and quantification of seasonal human heat and cold stress frequencies in representative existing and future urban canyons: the case of Ankara. <em>Theoretical Applied Climatololy</em>, v. 153, p. 593–620, maio 2023. Disponível em: <a href='https://link.springer.com/article/10.1007/s00704-023-04482-5?utm_source=researchgate.net&utm_medium=article#citeas' target='_blank' rel='noopener noreferrer'>https://link.springer.com/article/10.1007/s00704-023-04482-5?utm_source=researchgate.net&utm_medium=article#citeas</a>. Acesso em: 18 jun. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">TORTORA, G. J.; DERRICKSON, B. <em>Princípios de anatomia e fisiologia</em>. 14. ed. Rio de Janeiro: Guanabara Koogan, 2014.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PESQUISA FAPESP. <em>Ondas de calor e frio ameaçam a saúde</em>. YouTube. 2 mar. 2025. Vídeo (5min. 27s.). Disponível em: <a href='https://www.youtube.com/watch?v=KAOrz94tELg' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=KAOrz94tELg</a>. Acesso em: 22 nov. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO Internacional do Trabalho. Garantir a segurança e saúde no trabalho num clima em mudança. <em>Síntese do relatório</em>. Genebra: OIT, 2024. Disponível em: <a href='https://www.ilo.org/sites/default/files/2024-04/OIT_SafeDay24_S%C3%ADntese-do-Relat%C3%B3rio.pdf' target='_blank' rel='noopener noreferrer'>https://www.ilo.org/sites/default/files/2024-04/OIT_SafeDay24_S%C3%ADntese-do-Relat%C3%B3rio.pdf</a>. Acesso em: 10 dez. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m4-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m4-aula3" aria-expanded="false" aria-controls="collapse-m4-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m4-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m4-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de Emergências em Saúde Pública. Coordenação-Geral de Preparação para as Emergências em Saúde Pública. <em>Nota Técnic</em>a nº 5/2025-CGPRESP/DEMSP/SVSA/MS. Fornece diretrizes abrangentes para a preparação e resposta às ondas de frio. Brasília: Ministério da Saúde, 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIO DE JANEIRO. Secretaria Municipal de Saúde. <em>Protocolo de enfrentamento ao calor extremo</em> [livro eletrônico]. 1. ed. Rio de Janeiro: Ed. dos Autores, 2024. Disponível em: <a href='https://saude.prefeitura.rio/wp-content/uploads/sites/47/2024/10/Livro_PlanoContingenciaEnfrentamentoCalorExtremo_PDFDigital_20241024.pdf' target='_blank' rel='noopener noreferrer'>https://saude.prefeitura.rio/wp-content/uploads/sites/47/2024/10/Livro_PlanoContingenciaEnfrentamentoCalorExtremo_PDFDigital_20241024.pdf</a>. Acesso em: 16 dez. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIO DE JANEIRO. Superintendência de Atenção Primária. <em>Nota Técnica</em>: dispõe sobre a atuação das equipes de atenção primária diante das ondas de calor. Rio de Janeiro, 15 dez. 2023.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NOGUEIRA, P. T. A. et al. A necessidade de construção de assistência e vigilância em saúde no contexto das mudanças climáticas - ‘um passo à frente e você não estará mais no mesmo lugar’. <em>Saúde em Debate</em>, v. 48, n. spe1, p. e8696, ago. 2024.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FLOSS, M.; BARROS, E. F. Estresse por calor na Atenção Primária à Saúde: uma revisão clínica. <em>Revista Brasileira de Medicina de Família e Comunidade</em>, v. 15, n. 42, p. 1948-1948, 2020.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo5" aria-expanded="false" aria-controls="collapse1-modulo5">Módulo 5</button>
                    </h5>
                    <div id="collapse1-modulo5" class="accordion-collapse collapse" aria-labelledby="heading1-modulo5" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m5-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m5-aula1" aria-expanded="true" aria-controls="collapse-m5-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m5-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m5-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FEARNSIDE, P. M. Uso da terra na Amazônia e as mudanças climáticas globais. In: FEARNSIDE, P. M. <em>Destruição e Conservação da Floresta Amazônica</em>, vol. 1. Brasil: Editora do INPA, 2022. p. 21-38.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO de Pesquisa Ambiental da Amazônia (IPAM). Tudo o que você queria saber sobre fogo na Amazônia e no Cerrado. <em>Site IPAM Amazônia</em>, setembro 2024. Disponível em: <a href='https://ipam.org.br/cartilhas-ipam/foconofogo/' target='_blank' rel='noopener noreferrer'>https://ipam.org.br/cartilhas-ipam/foconofogo/</a>. Acesso em: 01 dez. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO Nacional de Pesquisas Espaciais (INPE). Programa Queimadas. <em>Portal INPE</em>. Disponível em: <a href='https://terrabrasilis.dpi.inpe.br/queimadas/portal/' target='_blank' rel='noopener noreferrer'>https://terrabrasilis.dpi.inpe.br/queimadas/portal/</a>. Acesso em: 01 dez. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m5-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m5-aula2" aria-expanded="false" aria-controls="collapse-m5-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m5-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m5-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Queimadas. <em>Saúde de A a Z</em>. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/q/queimadas' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/q/queimadas</a>. Acesso em: 10 dez. 2025. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FIOCRUZ. ICICT. Observatório de Clima e Saúde. <em>Vídeo</em>. Queimadas na Amazônia (2012). Disponível em: <a href='https://climaesaude.icict.fiocruz.br/video/queimadas-na-amazonia-2012' target='_blank' rel='noopener noreferrer'>https://climaesaude.icict.fiocruz.br/video/queimadas-na-amazonia-2012</a>. Acesso em: 01 dez. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUSA, T. C. M.; HACON, S. S.; BARCELLOS, C. Covid-19 e queimadas na Amazônia Legal e no Pantanal: aspectos cumulativos e vulnerabilidades. In: FREITAS, C. M.; </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARCELLOS, C.; VILLELA, D. A. M. (orgs.). <em>Covid-19 no Brasil</em>: cenários epidemiológicos e vigilância em saúde [online]. Rio de Janeiro: Observatório Covid-19 Fiocruz; Editora Fiocruz, 2021, p. 159-169. <a href='https://doi.org/10.7476/9786557081211.0010' target='_blank' rel='noopener noreferrer'>https://doi.org/10.7476/9786557081211.0010</a>.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m5-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m5-aula3" aria-expanded="false" aria-controls="collapse-m5-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m5-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m5-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREITAS, C. M. et al. <em>Orientações para gestão de risco de desastres e emergências em saúde pública</em>: abordagem integrada atenção primária e vigilância em saúde. Rio de Janeiro: Fiocruz/ENSP/Cepedes, 2023.116 p. Disponível em: <a href='https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/40e47741-f71d-4f8c-a887-4762361d864e</a>. Acesso em: 25 maio. 26.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GRACIE, Renata; RODRIGUES, Jessica Muzy (org.). <em>Curso análise de situação de saúde ambiental</em> [recurso eletrônico]: ASISA-Queimadas. Rio de Janeiro: Edições Livres, 2024. 267 p. Disponível em: <a href='https://arca.fiocruz.br/items/d02160b3-ee30-4e1a-8387-f6c1d5eca0b8' target='_blank' rel='noopener noreferrer'>https://arca.fiocruz.br/items/d02160b3-ee30-4e1a-8387-f6c1d5eca0b8</a>. Acesso em: 25 maio 26.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIO GRANDE DO SUL. Secretaria da Saúde. Centro Estadual de Vigilância em Saúde; Departamento de Atenção Primária e Políticas de Saúde. <em>Nota Orientadora Conjunta CEVS/DAPPS n. 01/2024</em>: organização das ações da Atenção Primária à Saúde na prevenção e mitigação dos efeitos da contaminação do ar causada por queimadas. Porto Alegre: SES/RS, 17 set. 2024. Disponível em: <a href='https://saude.rs.gov.br/upload/arquivos/202409/17183002-nota-orientadora-conjunta-cevs-dapps-n-01-2024-3.pdf' target='_blank' rel='noopener noreferrer'> https://saude.rs.gov.br/upload/arquivos/202409/17183002-nota-orientadora-conjunta-cevs-dapps-n-01-2024-3.pdf</a>. Acesso em: 25 maio 26.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VITOR, Nathan. Ministra Nísia Trindade apresenta novas ações da pasta e orientações para proteção da saúde diante das queimadas. Saúde & Meio Ambiente. <em>Ministério da Saúde</em>, 2014. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/noticias/2024/setembro/ministra-nisia-trindade-apresenta-novas-acoes-da-pasta-e-orientacoes-para-protecao-da-saude-diante-das-queimadas' target='_blank' rel='noopener noreferrer'> https://www.gov.br/saude/pt-br/assuntos/noticias/2024/setembro/ministra-nisia-trindade-apresenta-novas-acoes-da-pasta-e-orientacoes-para-protecao-da-saude-diante-das-queimadas </a>. Acesso em: 25 maio 26.</li>

                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Bibliografia complementar</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDERSON, L. O. et al. Modelo conceitual de sistema de alerta e de gestão de riscos e desastres associados a incêndios florestais e desafios para políticas públicas no Brasil. <em>Territorium</em>, n. 26 (I), p. 43-61, 2019. Disponível em: </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDRADE, É. F. R. de et al. Letramento em saúde ambiental entre ribeirinhos da Amazônia paraense. <em>Revista da Escola de Enfermagem da USP</em>, v. 59, p. e20250015, 2025. </li>
                                               
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NASSAR, P. et al. Avaliação em desastres como estratégia para mitigar os riscos na atenção primária à saúde. <em>Revista Saúde e Meio Ambiente</em>, v. 14, n. 2, p. 121-132, 2022.Diponível em: <a href='https://periodicos.ufms.br/index.php/sameamb/article/view/16790' target='_blank' rel='noopener noreferrer'>https://periodicos.ufms.br/index.php/sameamb/article/view/16790</a>. Acesso em: 25 maio 26.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SALDIVA, P. “Se tem um sistema de saúde que pode fazer frente à crise climática, é o SUS”. Entrevistadores: Ana Paula Evangelista e Leandro Modolo. In: <em>Repórter SUS</em>. Rio de Janeiro: EPSJV/Fiocruz, 6 set. 2024. Podcast. Disponível em:  <a href='https://www.abc.org.br/2024/09/06/paulo-saldiva-se-tem-um-sistema-de-saude-que-pode-fazer-frente-a-crise-climatica-e-o-sus/' target='_blank' rel='noopener noreferrer'>https://www.abc.org.br/2024/09/06/paulo-saldiva-se-tem-um-sistema-de-saude-que-pode-fazer-frente-a-crise-climatica-e-o-sus/</a>. Acesso em: 25 maio 26.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUSA, M. F. de et al. Potencialidades da Atenção Básica à Saúde na consolidação dos sistemas universais. <em>Saúde em Debate</em> [online]. v. 43, n. spe5, dez. 2019, p. 82-93. Disponível em: <a href='https://doi.org/10.1590/0103-11042019S507' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/0103-11042019S507</a>. Acesso em: 01 dez. 25.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion Módulos -->
        </div>

    </div>
</div>
		`,
    },
    materialcomplementar: {
        ariaLabel: "materialcomplementar",
        modalSize: "modal-xl",
        modalTitle: "Material Complementar",
        modalBody: `
			<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion Módulos-->
            <div class="accordion accordion-flush" id="accordionMaterialComplementar">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo1" aria-expanded="true" aria-controls="collapse1-material-modulo1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-material-modulo1" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo1" data-bs-parent="">

                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m1-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula1" aria-expanded="true" aria-controls="collapse-m1-material-complementar-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ARREAZA, Ana Lucia V.; MORAES, José Cássio de. Vigilância da saúde: fundamentos, interfaces e tendências. Ciência & Saúde Coletiva, Rio de Janeiro, v. 15, n. 4, p. 2215–2228, 2010. DOI: 10.1590/S1413-81232010000400036. Disponível em: <a href='https://www.scielo.br/j/csc/a/nC4LpHzs3bS7RVztSq8SZnc/' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/nC4LpHzs3bS7RVztSq8SZnc/</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">AVANCI, Joviana Quintes <em>et al</em>. Ações de vigilância das violências em serviços da atenção primária, hospitalar e de reabilitação no Brasil. Ciência & Saúde Coletiva, v. 30, n. 3, e17372024, 2025. DOI: 10.1590/1413-81232025303.17372024.</li>

                                                    <li class="list-group-item">BAQUI, Patricia <em>et al</em>. Ethnic and regional variations in hospital mortality from COVID-19 in Brazil. The Lancet Global Health, v. 8, n. 8, p. e1018–e1026, 2020. DOI: 10.1016/S2214-109X(20)30285-0.</li>

                                                    <li class="list-group-item">BARATA, Rita Barradas. Investigação de surtos e epidemias: transformações na teoria, nos conceitos e nas práticas do século XVIII ao século XXI. Saúde e Sociedade, São Paulo, v. 33, n. 1, e220310pt, 2024. DOI: 10.1590/s0104-12902024220310pt.</li>

                                                    <li class="list-group-item">BRASIL. 1ª Conferência Nacional de Vigilância em Saúde: Vigilância em Saúde – direito, conquistas e defesa de um SUS público de qualidade. Brasília, 2018. Disponível em: <a href='http://ces.saude.mg.gov.br/wp-content/uploads/2016/06/Documento-Orientador-1%C2%AA-CEVS.pdf' target='_blank' rel='noopener noreferrer'>http://ces.saude.mg.gov.br/wp-content/uploads/2016/06/Documento-Orientador-1%C2%AA-CEVS.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. <em>Saúde ambiental: guia básico para construção de indicadores</em>. 1. ed. Brasília, 2011. 128 p. (Série B. Textos básicos de saúde). ISBN 9788533417779.</li>

                                                    <li class="list-group-item">CAIRUS, Henrique F.; RIBEIRO, Wilson A. <em>Textos hipocráticos: o doente, o médico e a doença</em>. Rio de Janeiro: Editora FIOCRUZ, 2005. 251 p. ISBN 9788575413753.</li>

                                                    <li class="list-group-item">CAMPOS, Gastão Wagner de Sousa <em>et al</em>. <em>Tratado de saúde coletiva.</em> 2. ed. rev. ampl. São Paulo: HUCITEC, 2012. 968 p. ISBN 9788564806566.</li>

                                                    <li class="list-group-item">CANAL USP. Da colonização à abolição: a história das epidemias no Brasil. YouTube, 24 mar. 2020. Disponível em: <a href='https://www.youtube.com/watch?v=HRTkFCe7xwI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=HRTkFCe7xwI</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">CONSELHO NACIONAL DE SECRETARIAS MUNICIPAIS DE SAÚDE (CONASEMS). Aula 21 - Vigilância em saúde: (parte 1). YouTube, 24 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=zszLy8ckb0E' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=zszLy8ckb0E</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">CONSELHO NACIONAL DE SECRETARIAS MUNICIPAIS DE SAÚDE (CONASEMS). Aula 22 - Vigilância em saúde (parte 2). YouTube, 24 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=Q0hYz3lKrG8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Q0hYz3lKrG8</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">DA SILVA JUNIOR, Jarbas Barbosa. <em>A nova face da vigilância epidemiológica</em>. Epidemiologia e Serviços de Saúde, Brasília, v. 12, n. 1, 2003. DOI: 10.5123/S1679-49742003000100001.</li>

                                                    <li class="list-group-item">FRANCO, Geraldo <em>et al</em>. <em>Vigilância em saúde brasileira: reflexões e contribuição ao debate da 1ª Conferência Nacional de Vigilância em Saúde</em>. Ciência & Saúde Coletiva, Rio de Janeiro, v. 22, n. 10, p. 3137–3148, 2017. DOI: 10.1590/1413-812320172210.18092017.</li>

                                                    <li class="list-group-item">HENRIQUES, Carolina Maria P.; MOURA, Natália F. O. de; SOUZA, Paulo B. de. <em>Desafios e lições da pandemia de COVID-19 para a Vigilância em Saúde no Brasil</em>. Revista Brasileira de Epidemiologia, v. 27, e240049, 2024. DOI: 10.1590/1980-549720240049.2.</li>

                                                    <li class="list-group-item">LEE, Lisa M. <em>et al</em>. <em>Principles and practice of public health surveillance</em>. Oxford: Oxford University Press, 2010. 766 p. ISBN 9780195372922. DOI: 10.1093/acprof:oso/9780195372922.001.0001.</li>

                                                    <li class="list-group-item">METEORO BRASIL. A história da vigilância em saúde no Brasil. YouTube, 13 set. 2021. Disponível em: <a href='https://www.youtube.com/watch?v=DXXL4EBwxZo' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=DXXL4EBwxZo</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">PRAZER, KARNAL – CANAL OFICIAL DE LEANDRO KARNAL. História das Epidemias | Leandro Karnal. YouTube, 2 ago. 2021. Disponível em:<a href=' https://www.youtube.com/watch?v=vt8d0FKj7k4' target='_blank' rel='noopener noreferrer'> https://www.youtube.com/watch?v=vt8d0FKj7k4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">ROSEN, George. <em>Uma história da saúde pública</em>. São Paulo: HUCITEC, 1994. 423 p. ISBN 9788527102629.</li>

                                                    <li class="list-group-item">TV SENADO. A Revolta da Vacina. YouTube, 30 out. 2017. Disponível em: <a href='https://www.youtube.com/watch?v=6i6v9f_aWjg' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6i6v9f_aWjg</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">VIDEOSAÚDE DISTRIBUIDORA DA FIOCRUZ. A história da saúde pública no Brasil – 500 anos na busca de soluções. YouTube, 22 fev. 2016. Disponível em: <a href='https://www.youtube.com/watch?v=7ouSg6oNMe8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=7ouSg6oNMe8</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Noncommunicable diseases: progress monitor 2025. Geneva, 2025. Disponível em: <a href='https://iris.who.int/server/api/core/bitstreams/7a228681-a190-4c29-b2a8-9d4255dc49d1/content' target='_blank' rel='noopener noreferrer'>https://iris.who.int/server/api/core/bitstreams/7a228681-a190-4c29-b2a8-9d4255dc49d1/content</a>.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula2" aria-expanded="false" aria-controls="collapse-m1-material-complementar-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Instrumentos de planejamento do SUS. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Vigilância em Saúde das Populações Expostas a Contaminantes e Substâncias Químicas (VIGIPEQ). Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigipeq' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigipeq</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Manual de planejamento do SUS: articulação interfederativa. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/articulacao_interfederativa_v4_manual_planejamento_atual.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/articulacao_interfederativa_v4_manual_planejamento_atual.pdf</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL DE FATO. Documentário denuncia contaminação por contato com lama tóxica da Samarco. São Paulo, 5 fev. 2019. Disponível em: <a href='https://www.brasildefato.com.br/2019/02/05/documentario-denuncia-contaminacao-por-contato-com-lama-toxica-da-samarco/' target='_blank' rel='noopener noreferrer'>https://www.brasildefato.com.br/2019/02/05/documentario-denuncia-contaminacao-por-contato-com-lama-toxica-da-samarco/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">CONASEMS. Aula 21 - Vigilância em saúde (parte 1). YouTube, 24 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=zszLy8ckb0E' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=zszLy8ckb0E</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">CONASEMS. Vigilância em saúde (parte 2). YouTube, 25 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=Q0hYz3lKrG8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Q0hYz3lKrG8</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">DATASUS. TABNET: intoxicação exógena – SINAN. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/Intoxbr.def' target='_blank' rel='noopener noreferrer'>http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/Intoxbr.def</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">DATASUS. Tutorial TABNET. Brasília, DF: Ministério da Saúde, 2020. Disponível em: <a href='https://datasus.saude.gov.br/wp-content/uploads/2020/02/Tutorial-TABNET-2020.pdf' target='_blank' rel='noopener noreferrer'>https://datasus.saude.gov.br/wp-content/uploads/2020/02/Tutorial-TABNET-2020.pdf</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">DATASUS. Portal DATASUS. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://datasus.saude.gov.br/' target='_blank' rel='noopener noreferrer'>https://datasus.saude.gov.br/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FIOCRUZ. Vigilância em saúde – ligado em saúde. Rio de Janeiro: Fiocruz, [s.d.]. Vídeo. Disponível em: <a href='https://fiocruz.br/video/vigilancia-em-saude-ligado-em-saude' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/video/vigilancia-em-saude-ligado-em-saude</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FIOCRUZ. Vigilância genômica de dengue, chikungunya e Zika. Rio de Janeiro: Fiocruz, [s.d.]. Vídeo. Disponível em: <a href='https://fiocruz.br/video/projeto-da-fiocruz-gera-mais-de-120-genomas-completos-de-dengue-zika-e-chikungunya' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/video/projeto-da-fiocruz-gera-mais-de-120-genomas-completos-de-dengue-zika-e-chikungunya</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FOLHA DE S. PAULO. Fantasmas da lama: a vida dos atingidos pela mineração em MG, oito anos após Mariana. YouTube, 5 nov. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=8xwOIFizqA0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=8xwOIFizqA0</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FIOCRUZ. Carlos Machado: tragédia de Brumadinho e saúde pública. YouTube, 31 jan. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=YlMMk_-ZDKM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=YlMMk_-ZDKM</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">MURAD, Vinícius. COP30: documentário mostra a luta do povo Munduruku contra o garimpo ilegal. <em>CNN Brasil</em>, São Paulo, 8 set. 2025. Disponível em: <a href='https://www.cnnbrasil.com.br/nacional/cop30-documentario-mostra-a-luta-do-povo-munduruku-contra-o-garimpo-ilegal/' target='_blank' rel='noopener noreferrer'>https://www.cnnbrasil.com.br/nacional/cop30-documentario-mostra-a-luta-do-povo-munduruku-contra-o-garimpo-ilegal/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">PAIM, Jairnilson Silva. O que é o SUS. Rio de Janeiro: Editora Fiocruz, 2009.</li>

                                                    <li class="list-group-item">PEREIRA, João Carlos; SILVA, Maria Fernanda da. O impacto das tecnologias educacionais na aprendizagem ativa. <em>Revista Brasileira de Ensino Superior Online</em>, São Paulo, v. 15, n. 2, p. 123–145, jul./dez. 2025. Disponível em: <a href='https://www.scielo.br/j/rbso/a/RFccCXPZH4Z57Dw5gTzBmpj/' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/rbso/a/RFccCXPZH4Z57Dw5gTzBmpj/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">PORTO, Marcelo Firpo de Souza. Saúde, ambiente e sustentabilidade: uma análise interdisciplinar. Rio de Janeiro: Editora Fiocruz, 2012.</li>

                                                    <li class="list-group-item">RELATOS de vítimas de Brumadinho. [S.l.]: [s.n.], [s.d.]. Vídeo (YouTube). Disponível em: <a href='https://www.youtube.com/watch?v=PZ3X52sq1pA' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=PZ3X52sq1pA</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">SERVIÇO de vigilância em saúde e sua importância no planejamento das ações executadas pelo SUS. [S.l.]: [s.n.], [s.d.]. Vídeo (YouTube). Disponível em: <a href='https://www.youtube.com/watch?v=TOW_ij0zjh8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=TOW_ij0zjh8</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">TABNET: utilização avançada. [S.l.]: [s.n.], [s.d.]. Vídeo (YouTube). Disponível em: <a href='https://www.youtube.com/watch?v=PJTx7STy0Xc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=PJTx7STy0Xc</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">USO do TABNET – vídeo curto. [S.l.]: [s.n.], [s.d.]. Vídeo. Disponível em: <a href='http://go.microsoft.com/fwlink/p/?LinkId=255141' target='_blank' rel='noopener noreferrer'>http://go.microsoft.com/fwlink/p/?LinkId=255141</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">VIDEOSAÚDE DISTRIBUIDORA DA FIOCRUZ. A história da saúde pública no Brasil – 500 anos na busca de soluções. YouTube, 22 fev. 2016. Disponível em: <a href='https://www.youtube.com/watch?v=7ouSg6oNMe8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=7ouSg6oNMe8</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula3" aria-expanded="false" aria-controls="collapse-m1-material-complementar-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde, Universidade Federal de Goiás. Asis - Análise de Situação de Saúde. Brasília: Ministério da Saúde, 2015. 3v.: il. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/asis_analise_situacao_saude_volume_1.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/asis_analise_situacao_saude_volume_1.pdf</a>. Acesso em: 24 out. 2025. </li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria de Consolidação Nº 4, de 28 de setembro de 2017. Consolidação das normas sobre os sistemas e os subsistemas do Sistema Único de Saúde. Anexo III Ações e Serviços de Vigilância em Saúde (Origem: PRT MS/GM 1378/2013). Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria de Consolidação Nº 4, de 28 de setembro de 2017. Consolidação das normas sobre os sistemas e os subsistemas do Sistema Único de Saúde. Anexo V Sistema Nacional de Vigilância Epidemiológica (SNVE) (Origem: PRT MS/GM 204/2016). Capítulo I Da lista nacional de notificação compulsória de doenças, agravos e eventos de saúde pública. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria de Consolidação No. 5, de 28 de setembro de 2017. Estabelece as normas sobre as ações e os serviços de saúde do Sistema Único de Saúde. Disponível em: <a href='https://portalsinan.saude.gov.br/images/documentos/Legislacoes/Portaria_Consolidacao_5_28_SETEMBRO_2017.pdf' target='_blank' rel='noopener noreferrer'>https://portalsinan.saude.gov.br/images/documentos/Legislacoes/Portaria_Consolidacao_5_28_SETEMBRO_2017.pdf</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Decreto n. 78.231, de 12 de agosto de 1976. Regulamenta a Lei nº 6.259, de 30 de outubro de 1975, que dispõe sobre a organização das ações de Vigilância Epidemiológica, sobre o Programa Nacional de Imunizações, estabelece normas relativas à notificação compulsória de doenças, e dá outras providências. Diário Oficial da União, Poder Executivo, Brasília, DF, 13 ago. 1976. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/d78231.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/d78231.htm</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Lei nº 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes. Diário Oficial da União, Poder Executivo, Brasília, DF, 20 set. 1990. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/L8080.htm#art15' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/L8080.htm#art15</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Lei nº 9.782, de 26 de janeiro de 1999. Define o Sistema Nacional de Vigilância Sanitária, cria a Agência Nacional de Vigilância Sanitária, e dá outras providências. Diário Oficial da União, Poder Executivo, Brasília, DF, 27 jan. 1999. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/l9782.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/l9782.htm</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Saúde Ambiental, do Trabalhador e Vigilância das Emergências em Saúde Pública. A evolução da Vigilância em Saúde Ambiental e Saúde do Trabalhador no Sistema Único de Saúde (2011 – 2021). Brasília: Ministério da Saúde, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/saude-do-trabalhador/a-evolucao-da-vigilancia-em-saude-ambiental-e-saude-do-trabalhador.pdf/view' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/saude-do-trabalhador/a-evolucao-da-vigilancia-em-saude-ambiental-e-saude-do-trabalhador.pdf/view</a>. </li>

                                                    <li class="list-group-item">COSTA, M. C. <em>et al</em>. Vigilância em Saúde no SUS – Construção, Efeitos e Perspectivas. Ciência & Saúde Coletiva, 2018. 23(6):1811-1818. Disponível em: <a href='https://www.scielo.br/j/csc/a/FxcSJBQq8G7CNSxhTyT7Qbn/' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/FxcSJBQq8G7CNSxhTyT7Qbn/</a>.</li>

                                                    <li class="list-group-item">MINISTÉRIO DA SAÚDE. Composição. Vigilância em Saúde e Ambiente. Saúde do Trabalhador. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/saude-do-trabalhador' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/svsa/saude-do-trabalhador</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">MINISTÉRIO DA SAÚDE. Agência Nacional de Vigilância Sanitária - Anvisa – Centrais de conteúdo. Disponível em: <a href='https://www.gov.br/anvisa/pt-br/centraisdeconteudo' target='_blank' rel='noopener noreferrer'>https://www.gov.br/anvisa/pt-br/centraisdeconteudo</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">MINISTÉRIO DA SAÚDE. Secretaria de Vigilância em Saúde e Ambiente. Coordenação-Geral de Informações e Análises Epidemiológicas. Departamento de Análise Epidemiológica e Vigilância de Doenças Não Transmissíveis. Sistemas de Informação. Disponível em: <a href='https://svs.aids.gov.br/daent/cgiae/istemas-informacao/' target='_blank' rel='noopener noreferrer'>https://svs.aids.gov.br/daent/cgiae/istemas-informacao/</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Diretrizes da OMS para questões éticas na vigilância em saúde pública. 2023. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/57542/9789275719848_por.pdf?sequence=1&isAllowed=y' target='_blank' rel='noopener noreferrer'>https://iris.paho.org/bitstream/handle/10665.2/57542/9789275719848_por.pdf?sequence=1&isAllowed=y</a>. </li>

                                                    <li class="list-group-item">RIPSA. Rede Interagencial de Informação para a Saúde. Indicadores básicos para a saúde no Brasil: conceitos e aplicações. 2. ed. Brasília: Organização Pan-Americana da Saúde, 2008. 349 p.: il. Disponível em: <a href='http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf' target='_blank' rel='noopener noreferrer'>http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf</a>. Acesso em: 24 out. 2025. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula4" aria-expanded="false" aria-controls="collapse-m1-material-complementar-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AGUILAR, G. M. O. <em>et al</em>. Preparação, vigilância e resposta às emergências de saúde pública na Cidade do Rio de Janeiro, Brasil, de 2021 a 2024. <em>Ciência & Saúde Coletiva</em>, v. 30, n. 7, e18832024, 2025. DOI: 10.1590/1413-81232025307.18832024.</li>

                                                    <li class="list-group-item">BBC NEWS BRASIL. Brumadinho: o documentário da BBC (parte 2). YouTube, 28 maio 2019. Disponível em: <a href='https://www.youtube.com/watch?v=TUlq8pjOU4U' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=TUlq8pjOU4U</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BBC NEWS BRASIL. Como a COVID-19 mudou o mundo: 21 notícias que marcaram o século XXI. YouTube, 5 nov. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=fRT8AS-007I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=fRT8AS-007I</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Estratégia da Vigilância Baseada em Eventos: mini guia.</em> Brasília, DF: Ministério da Saúde, 2023. 28 p. ISBN 978-65-87589-84-8.</li>

                                                    <li class="list-group-item">CARMO, E. H. Emergências de saúde pública: breve histórico, conceitos e aplicações. <em>Saúde em Debate</em>, v. 44, n. especial 2, p. 9-19, jul. 2020. DOI: 10.1590/0103-11042020e201.</li>

                                                    <li class="list-group-item">CARMO, E. H.; PENNA, G. O.; OLIVEIRA, W. K. Emergências de saúde pública: conceito, caracterização, preparação e resposta. <em>Estudos Avançados</em>, v. 22, n. 64, p. 19-32, 2008. DOI: 10.1590/S0103-40142008000300003.</li>

                                                    <li class="list-group-item">FOOD AND AGRICULTURE ORGANIZATION OF THE UNITED NATIONS; UNITED NATIONS ENVIRONMENT PROGRAMME; WORLD HEALTH ORGANIZATION; WORLD ORGANISATION FOR ANIMAL HEALTH. <em>One Health Joint Plan of Action (2022–2026): working together for the health of humans, animals, plants and the environment</em>. Rome: FAO, 2022. DOI: 10.4060/cc2289en.</li>

                                                    <li class="list-group-item">VIVER BEM ANANINDEUA/PA. A tragédia humanitária na Terra Indígena Yanomami. YouTube, 30 JAN. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=BpNFT8SFAc0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=BpNFT8SFAc0</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">G1. Garimpo ilegal, desnutrição: Entenda a situação da reserva. YouTube, 24 jan. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=WQauthpCP4I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=WQauthpCP4I</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">G1. Repórteres reencontram crianças yanomami que comoveram o país durante crise humanitária. YouTube, 4 de maio 2025. Disponível em: <a href='https://www.youtube.com/watch?v=Td_J0J2zWkA' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Td_J0J2zWkA</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">INEGÁVEL O FILME. Inegável: um olhar sobre o início da vacinação contra a COVID-19 na cidade do Rio de Janeiro. YouTube, 1 fev 2022. Disponível em: <a href='https://www.youtube.com/watch?v=jUccdPBSyS4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=jUccdPBSyS4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">HERSTEIN, J. J. <em>et al</em>. Emergency preparedness: what is the future? Antimicrobial Stewardship & Healthcare Epidemiology, v. 1, n. 1, e29, 2021. DOI: 10.1017/ash.2021.190.</li>

                                                    <li class="list-group-item">MERALI, S. et al. Community-based surveillance advances the Global Health Security Agenda in Ghana. <em>PLoS One</em>, v. 15, n. 8, e0237320, 2020. DOI: 10.1371/journal.pone.0237320.</li>

                                                    <li class="list-group-item">NORZIN, T. et al. Event-based surveillance: providing early warning for communicable disease threats. <em>Canada Communicable Disease Report</em>, v. 49, n. 2/3, p. 29-34, 2023. DOI: 10.14745/ccdr.v49i23a01.</li>

                                                    <li class="list-group-item">OLIVEIRA E CRUZ, D. M. D. et al. Centro de operações de emergência na COVID-19: a experiência do município do Rio de Janeiro. Revista Panamericana de Salud Pública, v. 46, e29, 2022. DOI: 10.26633/RPSP.2022.9.</li>

                                                    <li class="list-group-item">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Investimento e desenvolvimento da preparação para emergências de saúde a longo prazo durante a pandemia de COVID-19: orientação provisória para os Estados Membros da OMS. Brasília, DF: OPAS, 2020. Licença CC BY-NC-SA 3.0 IGO.</li>

                                                    <li class="list-group-item">PAN AMERICAN HEALTH ORGANIZATION. Strategy on epidemic intelligence for strengthening early warning of health emergencies 2024–2029. Washington, D.C.: PAHO, 2024. (61st Directing Council of PAHO, 76th Session of the Regional Committee of WHO for the Americas, CD61/12, Rev. 1).</li>

                                                    <li class="list-group-item">RODRIGUES-JR., A. L. A inteligência epidemiológica como modelo de organização em saúde. Ciência & Saúde Coletiva, v. 17, n. 3, p. 797-805, 2012. DOI: 10.1590/S1413-81232012000300027.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. A guide to establishing event-based surveillance. Geneva: WHO, 2008. ISBN 978-92-9061-321-3.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Early detection, assessment and response to acute public health events: implementation of early warning and response with a focus on event-based surveillance. Geneva: WHO, 2014. Disponível em: <a href='https://iris.who.int/bitstream/handle/10665/112667/WHO_HSE_GCR_LYO_2014.4_eng.pdf' target='_blank' rel='noopener noreferrer'>https://iris.who.int/bitstream/handle/10665/112667/WHO_HSE_GCR_LYO_2014.4_eng.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Framework for a public health emergency operations centre. Geneva: WHO, 2015. Disponível em: <a href='https://iris.who.int/handle/10665/196135' target='_blank' rel='noopener noreferrer'>https://iris.who.int/handle/10665/196135</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. WHO guidance for contingency planning. Geneva: WHO, 2018. Licença CC BY-NC-SA 3.0 IGO.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Guidance for after action review (AAR). Geneva: WHO, 2019. Disponível em: <a href='https://www.who.int/publications/i/item/WHO-WHE-CPI-2019.4' target='_blank' rel='noopener noreferrer'>https://www.who.int/publications/i/item/WHO-WHE-CPI-2019.4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Strengthening health emergency preparedness in cities and urban settings: guidance for national and local authorities. Geneva: WHO, 2021. Licença CC BY-NC-SA 3.0 IGO.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Strengthening health emergency prevention, preparedness, response and resilience. Geneva: WHO, 2023.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Emergency response framework: internal WHO procedures. Geneva: WHO, 2024. ISBN 978-92-4-005806-4 (versão eletrônica); ISBN 978-92-4-005807-1 (versão impressa).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo2" aria-expanded="false" aria-controls="collapse1-material-modulo2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-material-modulo2" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo2" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m2-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula1" aria-expanded="true" aria-controls="collapse-m2-material-complementar-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AL-HOCEIMA CITY, MOROCCO. <em>Assessing the impact of organic and inorganic micropollutants released from a wastewater treatment plant on humans and aquatic environment</em>. Toxicology Reports, 2024. DOI: 10.1016/j.toxrep.2024.101699.</li>

                                                    <li class="list-group-item">APOSTILA de Toxicologia Básica. Salvador: Centro de Informação e Assistência Toxicológica da Bahia (CIAVE), 2009. Disponível em: <a href='https://www.saude.ba.gov.br/wp-content/uploads/2017/08/Apostila_CIAVE_Ago_2009_A4.pdf' target='_blank' rel='noopener noreferrer'>https://www.saude.ba.gov.br/wp-content/uploads/2017/08/Apostila_CIAVE_Ago_2009_A4.pdf</a>.</li>

                                                    <li class="list-group-item">EFFECTS of organic and inorganic contaminants and their mixtures on metabolic health and gene expression in developmentally exposed zebrafish. bioRxiv, 2024. DOI: 10.1101/2024.10.28.620642.</li>

                                                    <li class="list-group-item">ENSP FIOCRUZ. Entrevista: Fiocruz diz não a pulverização aérea de agrotóxicos em áreas urbanas. YouTube, 17 jun. 2016. Disponível em: <a href='https://www.youtube.com/watch?v=uQWfwGxiViY' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=uQWfwGxiViY</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">MANUAL de Toxicologia Clínica. Curitiba: Universidade Federal do Paraná, [s.d.]. Disponível em: <a href='https://saude.ufpr.br/medtrab/wp-content/uploads/sites/25/2016/08/Manual-de-Toxicologia-Cl%C3%ADnica_pdf.pdf' target='_blank' rel='noopener noreferrer'>https://saude.ufpr.br/medtrab/wp-content/uploads/sites/25/2016/08/Manual-de-Toxicologia-Cl%C3%ADnica_pdf.pdf</a>.</li>

                                                    <li class="list-group-item">MARKDCATLIN. Routes of exposure to toxic materials 1965 DOD. YouTube, 20 jan. 2011. Disponível em: <a href='https://www.youtube.com/watch?v=88QRIGOto4Y' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=88QRIGOto4Y</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">MENTE FORA DO CUBO. O Desastre de Minamata. YouTube, 13 ago. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=6e5wODc-S-Y' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6e5wODc-S-Y</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">THE OCCUPATIONAL SAFETY LEADERSHIP PODCAST. Episode 13 Chemical Routes of Exposure. YouTube, 24 dez. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=kt2x_iC7k18' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=kt2x_iC7k18</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">TOXICOLOGIA e segurança. [S.l.]: ISPSN, [s.d.]. Disponível em: <a href='https://www.ispsn.org/sites/default/files/documentos-virtuais/pdf/toxicologia_e_seguranca_-_lucile_cecilia_peruzzo_0.pdf' target='_blank' rel='noopener noreferrer'>https://www.ispsn.org/sites/default/files/documentos-virtuais/pdf/toxicologia_e_seguranca_-_lucile_cecilia_peruzzo_0.pdf</a>.</li>

                                                    <li class="list-group-item">TOXICOLOGIA: uma abordagem multidisciplinar – volume I. [S.l.]: CAPES, [s.d.]. Disponível em: <a href='https://educapes.capes.gov.br/handle/capes/699865' target='_blank' rel='noopener noreferrer'>https://educapes.capes.gov.br/handle/capes/699865</a>.</li>

                                                    <li class="list-group-item">VITRIOL. Cidade de Chumbo – Parte 1. YouTube, 19 out. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=3WSl4FFiivQ' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=3WSl4FFiivQ</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">VSN INTERNATIONAL. Dose response analysis in toxicology. YouTube, 21 set. 2020. Disponível em: <a href='https://www.youtube.com/watch?v=LZcRA9CoHsc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=LZcRA9CoHsc</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula2" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. ATSDR ToxFAQs e Toxicological Profiles. Atlanta: ATSDR, [s.d.]. Disponível em: <a href='https://www.atsdr.cdc.gov/toxicological-profiles/about/index.html' target='_blank' rel='noopener noreferrer'>https://www.atsdr.cdc.gov/toxicological-profiles/about/index.html</a>.</li>

                                                    <li class="list-group-item">A CRITICAL review on the toxicological and epidemiological evidence integration for assessing human health risks to environmental chemical exposures. Reviews on Environmental Health, 2024. DOI: 10.1515/reveh-2024-0072.</li>

                                                    <li class="list-group-item">CASARETT, Louis J.; DOULL, John. Casarett & Doull’s toxicology: the basic science of poisons. 9. ed. New York: McGraw-Hill Education, 2019. Disponível em: <a href='https://accesspharmacy.mhmedical.com/book.aspx?bookid=2462' target='_blank' rel='noopener noreferrer'>https://accesspharmacy.mhmedical.com/book.aspx?bookid=2462</a>.</li>

                                                    <li class="list-group-item">RADIOLOGANDO. Efeitos biológicos causados pela radiação ionizante | Radiologando. YouTube, 23 ago. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=XKj30u-dig4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=XKj30u-dig4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">HAYES, A. Wallace. Hayes’ principles and methods of toxicology. 6. ed. Boca Raton: CRC Press, 2014. Disponível em: <a href='https://www.taylorfrancis.com/books/mono/10.1201/b17359' target='_blank' rel='noopener noreferrer'>https://www.taylorfrancis.com/books/mono/10.1201/b17359</a>.</li>

                                                    <li class="list-group-item">HUMAN exposure to chemical mixtures: challenges for the integration of toxicology with epidemiology data in risk assessment. Food and Chemical Toxicology, v. 103, p. 188–193, 2017. DOI: 10.1016/j.fct.2017.03.012.</li>

                                                    <li class="list-group-item">G1. Fantástico: Crescem os casos graves de intoxicação por bebidas adulteradas com metanol em SP. YouTube, 29 set. 2025. Disponível em: <a href='https://www.youtube.com/watch?v=lzbuI_dA_lU' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=lzbuI_dA_lU</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">KIS KIS - KEEP IT SHORT. SHORT film on the outbreak of an epidemy | Snow – by Isaac Ergas. YouTube, 10 jul. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=qATr4D_lqZU' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=qATr4D_lqZU</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula3" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AMBOSS: MEDICAL KNOWLEDGE DISTILLED. Farmacodinâmica - Parte 1: Como os Medicamentos Agem no Corpo. YouTube, 3 out. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=PhfhMBO-w9Q' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=PhfhMBO-w9Q</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">DRAUZIO VARELLA. Como a nicotina age no cérebro. YouTube, 28 set. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=D8RE-JL-oMY' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=D8RE-JL-oMY</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">DRAUZIO VARELLA. Como eu larguei o cigarro e dicas para quem quer parar. YouTube, 14 nov. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=Jtpd9d93wX8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Jtpd9d93wX8</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">NEUROSCIENTIFICALLY CHALLENGED. Neurociência de 2 Minutos: Nicotina. YouTube, 23 abr. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=I02WbuLiivw' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=I02WbuLiivw</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">ONU BRASIL. Controle do tabaco pode economizar bilhões de dólares e salvar milhões de vidas. YouTube, 12 jan. 2017. Disponível em: <a href='https://www.youtube.com/watch?v=T8bH0vFP2PM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=T8bH0vFP2PM</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">ONU BRASIL. OMS alerta para perigo dos cigarros eletrônicos. YouTube, 2 set. 2014. Disponível em: <a href='https://www.youtube.com/watch?v=X4FrEVGAf5s' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=X4FrEVGAf5s</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">TRATAMENTOENFISEMA. Enfisema Pulmonar e Válvulas Brônquicas Unidirecionais. YouTube, 28 jun. 2010. Disponível em: <a href='https://www.youtube.com/watch?v=r7U_Ih7-se4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=r7U_Ih7-se4</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula4" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">CANAL VP - NUTRIÇÃO FUNCIONAL. Uso de Agrotóxicos Brasil x UE | Especialistas | Larissa Bombardi | VP Nutrição Funcional. YouTube, 5 fev. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=t0c3k6r5J9Q' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=t0c3k6r5J9Q</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">OLÁ, CIÊNCIA. Como realmente eliminar o agrotóxico dos alimentos. YouTube, 3 abr. 2025. Disponível em: <a href='https://www.youtube.com/watch?v=F5O0lC-38fM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=F5O0lC-38fM</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula5" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ACGIH – AMERICAN CONFERENCE OF GOVERNMENTAL INDUSTRIAL HYGIENISTS. <em>TLVs® e BEIs®</em>. Disponível em: <a href='https://www.acgih.org/data-hub/' target='_blank' rel='noopener noreferrer'>https://www.acgih.org/data-hub/</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ARAÚJO, U. C. et al. Avaliação da exposição ocupacional ao chumbo: proposta de uma estratégia de monitoramento para prevenção dos efeitos clínicos e subclínicos. <em>Cadernos de Saúde Pública</em>, 1999. Disponível em: <a href='https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">CAMPOS, É. A.; SILVA, I. F.; WARDEN, C. F. Exposição a metais em população adulta residente em áreas industriais: revisão sistemática da literatura. <em>Ciência & Saúde Coletiva</em>, v. 26, n. 6, p. 2253–2270, 2021. Disponível em: <a href='https://doi.org/10.1590/1413-81232021266.07612019' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/1413-81232021266.07612019</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">HUMAN BIOMONITORING FOR EUROPEAN UNION (HBM4EU). <em>Biomarcadores de efeito: o que se precisa saber?</em> Disponível em: <a href='https://www.hbm4eu.eu/wp-content/uploads/2018/12/20166_brief_n1_biomarkers_PT_v02_HL_JG.pdf' target='_blank' rel='noopener noreferrer'>https://www.hbm4eu.eu/wp-content/uploads/2018/12/20166_brief_n1_biomarkers_PT_v02_HL_JG.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">HUMAN BIOMONITORING FOR EUROPEAN UNION (HBM4EU). <em>Infográficos sobre Hg, As, Pb, Cd e Cr VI</em>. Disponível em: <a href='https://www.hbm4eu.eu/citizens-corner/infographics/' target='_blank' rel='noopener noreferrer'>https://www.hbm4eu.eu/citizens-corner/infographics/</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">INTERTOX. Webinar: Limites de exposição ocupacional. Youtube, 17 dez. 2018. Disponível em: <a href='https://www.youtube.com/watch?v=_RWd4xxz_Es' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=_RWd4xxz_Es</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">JOMOVA, K.; ALOMAR, S. Y.; NEPOVIMOVA, E.; KUCA, K.; VALKO, M. Heavy metals: toxicity and human health effects. <em>Archives of Toxicology</em>, v. 99, n. 1, p. 153–209, 2025. Disponível em: <a href='https://doi.org/10.1007/s00204-024-03903-2' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1007/s00204-024-03903-2</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">MOTA, P. J.; ALONZO, H. G. A.; ANDRÉ, L. C.; CÂMARA, V. M.; CAMPOLINA, D.; SANTOS, A. S. E.; FRÓES-ASMUS, C. I. R.; PEIXOTO, S. V. Prevalence of metal levels above the reference values in a municipality affected by the collapse of a mining tailings dam: Brumadinho Health Project. <em>Revista Brasileira de Epidemiologia</em>, v. 25, e220014, 2022. Disponível em: <a href='https://doi.org/10.1590/1980-549720220014.supl.2' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/1980-549720220014.supl.2</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo4" aria-expanded="false" aria-controls="collapse1-material-modulo4">Módulo 3</button>
                    </h5>
                    <div id="collapse1-material-modulo4" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo4" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula1" aria-expanded="true" aria-controls="collapse-m3-material-complementar-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ACADEMIA DOS CURIOSOS. Mercúrio e seus efeitos tóxicos no corpo humano e no mundo. YouTube, 6 jun. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=dfBVuif-QK4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=dfBVuif-QK4</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ANDRADE, D. F.; ROCHA, M. S. da. A toxicidade do arsênio e sua natureza. Revista Acadêmica Oswaldo Cruz, n. 10, p. 1–11, 2013. Disponível em: <a href='https://oswaldocruz.br/revista_academica/content/pdf/Edicao_10_Andrade_Daiene_Flor.pdf' target='_blank' rel='noopener noreferrer'>https://oswaldocruz.br/revista_academica/content/pdf/Edicao_10_Andrade_Daiene_Flor.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ARAÚJO, U. C. <em>et al</em>. Avaliação da exposição ocupacional ao chumbo: proposta de uma estratégia de monitoramento para prevenção dos efeitos clínicos e subclínicos. Cadernos de Saúde Pública, 1999. Disponível em:<a href=' https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt' target='_blank' rel='noopener noreferrer'> https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">@TUTORIALDEQUÍMICACOMPROFESSORE. ARSÊNIO – conheça as curiosidades e aplicações desse elemento químico. YouTube, [s.d.]. Disponível em: <a href='https://www.youtube.com/shorts/FxaJ3ffiITM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/shorts/FxaJ3ffiITM</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BISINOTI, M. C.; JARDIM, W. F. O emprego de técnicas analíticas na especiação de metais pesados e a sua importância para o estudo do ambiente. 2004. Disponível em: <a href='https://lqa.iqm.unicamp.br/cadernos/caderno2.pdf' target='_blank' rel='noopener noreferrer'>https://lqa.iqm.unicamp.br/cadernos/caderno2.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Guia de Vigilância em Saúde: intoxicação exógena. Brasília: Ministério da Saúde, [s.d.]. p. 1065–1077. Disponível em: <a href='https://www.cevs.rs.gov.br/upload/arquivos/202201/31102342-intoxicacao-exogena-guia-de-vigilancia-em-saude.pdf' target='_blank' rel='noopener noreferrer'>https://www.cevs.rs.gov.br/upload/arquivos/202201/31102342-intoxicacao-exogena-guia-de-vigilancia-em-saude.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância das Doenças Transmissíveis. Orientações para a notificação de intoxicações por mercúrio. Brasília: Ministério da Saúde, 2021. 14 p. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/intoxicacao/orientacoes-para-a-notificacao-de-intoxicacoes-por-mercurio' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/intoxicacao/orientacoes-para-a-notificacao-de-intoxicacoes-por-mercurio</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">CARVALHO, F. M. et al. Intoxicação por chumbo e cádmio em trabalhadores de oficinas para reforma de baterias em Salvador, Brasil. Revista de Saúde Pública, v. 19, n. 5, p. 411–420, 1985.</li>

                                                    <li class="list-group-item">DUBEY, R.; VERMA, P.; KUMAR, S. Cr(III) genotoxicity and oxidative stress: an occupational health risk for leather tannery workers of South Asian developing countries. Toxicology and Industrial Health, v. 38, n. 2, p. 112–126, 2022.</li>

                                                    <li class="list-group-item">FACULDADE DE SAÚDE PÚBLICA DA USP. Exposição ao chumbo | fsp/usp | exsat #5. YouTube, 4 abr. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=B9WsssVbU70' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=B9WsssVbU70</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">JARDIM, A. N. O.; CALDAS, E. D. Exposição humana a substâncias químicas potencialmente tóxicas na dieta e os riscos para saúde: revisão. Química Nova, v. 32, n. 7, p. 1898–1909, 2009.</li>

                                                    <li class="list-group-item">KHOURY, E. D. T. et al. Manifestações neurológicas em ribeirinhos de áreas expostas ao mercúrio na Amazônia brasileira. Cadernos de Saúde Pública, v. 29, n. 11, p. 2191–2202, 2013. DOI: 10.1590/0102-311X00158012.</li>

                                                    <li class="list-group-item">MANZINI, F. F.; SÁ, K. B.; PLICAS, L. M. A. Metais pesados: fonte e ação toxicológica. Boletim de Tecnologia e Desenvolvimento de Embalagens, v. 1, p. 1–5, 1996.</li>

                                                    <li class="list-group-item">MANZINI, F. F.; SÁ, K. B.; PLICAS, L. M. A. Metais pesados: fonte e ação toxicológica. Fórum Ambiental da Alta Paulista, v. 6, p. 800–815, 2010.</li>

                                                    <li class="list-group-item">METRÓPOLES. Estudo da USP encontra chumbo no leite humano: entenda. YouTube, 24 set. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=xlxDnK-3N7o' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=xlxDnK-3N7o</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">MOREIRA, F. A. et al. Determinação dos níveis de exposição de metais em trabalhadores da construção naval: impactos e desafios. Revista Brasileira de Medicina do Trabalho, v. 15, n. 3, p. 147–154, 2017.</li>

                                                    <li class="list-group-item">MOREIRA, F. R.; MOREIRA, J. C. A importância da análise de especiação do chumbo em plasma para a avaliação dos riscos à saúde. Química Nova, v. 27, n. 2, p. 179–184, 2004.</li>

                                                    <li class="list-group-item">MUNIZ, D. H. F.; OLIVEIRA-FILHO, E. C. Metais pesados provenientes de rejeitos de mineração e seus efeitos sobre a saúde e o meio ambiente. Universitas: Ciências da Saúde, v. 4, n. 1/2, p. 83–100, 2006.</li>

                                                    <li class="list-group-item">PROFESSOR POLÍMEROS 2025. Cádmio: o metal que ameaça sua saúde?! YouTube, [s.d.]. Disponível em: <a href='https://www.youtube.com/shorts/BUYL1EybKSc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/shorts/BUYL1EybKSc</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">REINALDO, M. A. Cromo: intoxicações por metais pesados. YouTube, [s.d.]. Disponível em: <a href='https://www.youtube.com/watch?v=lWPqgHmY35c' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=lWPqgHmY35c</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">SCHIFER, T. S.; BOGUSZ JUNIOR, S.; MONTANO, M. A. E. Aspectos toxicológicos do chumbo. Infarma, v. 17, n. 5/6, p. 31–39, 2005.</li>

                                                    <li class="list-group-item">TAVARES, T. M.; CARVALHO, F. M. Avaliação de exposição de populações humanas a metais pesados no ambiente: exemplos do Recôncavo Baiano. Química Nova, v. 15, n. 2, p. 147–154, 1992.</li>

                                                    <li class="list-group-item">TEIXEIRA, D. C. <em>et al</em>. Exposição a contaminantes ambientais inorgânicos e danos à saúde humana. Brazilian Journal of Health Review, v. 3, n. 4, p. 10353–10369, 2020.</li>

                                                    <li class="list-group-item">TOMITA, N. E.; PADULA, N. A. M. R. Intoxicação por chumbo em crianças e o discurso da imprensa. Ciência & Saúde Coletiva, v. 10, supl., p. 67–75, 2005. DOI: 10.1590/S1413-81232005000500014.</li>

                                                    <li class="list-group-item">TV PUC-RIO. Química e Fiocruz analisaram contaminação por mercúrio. YouTube, 27 mar. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=KeEZbO7SrhI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=KeEZbO7SrhI</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">UNIMED GOIÂNIA. Arsênio. YouTube, 2 jun. 2021. Disponível em: <a href='https://www.youtube.com/watch?v=6rwnCimhke8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6rwnCimhke8</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula2" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">IBSI - INSTITUTO BRASILEIRO DE SAÚDE INTEGRATIVA. Como o mercúrio pode causar degeneração dos neurônios cerebrais. YouTube, 15 mai. 2020. Disponível em: <a href='https://youtu.be/FaT4QDkNahU' target='_blank' rel='noopener noreferrer'>https://youtu.be/FaT4QDkNahU</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">JORNALISMO TV CULTURA. Munduruku: condenados pelo mercúrio. YouTube, 19 abr. 2023. Disponível em: <a href='https://youtu.be/mDCayIcO5gw' target='_blank' rel='noopener noreferrer'>https://youtu.be/mDCayIcO5gw</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula3" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Diretrizes de vigilância e atenção à saúde de populações expostas a metais pesados. Brasília, DF: Ministério da Saúde, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br</a>. Acesso em: 13 fev. 2026.</li>

                                                    <li class="list-group-item">LABORATORY SOLUTIONS FROM METTLER TOLEDO. Equilibrando o futuro - temporada 2, episódio 7. YouTube, 8 set. 2025. disponível em: <a href='https://www.youtube.com/watch?v=cg2rznwddku' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=cg2rznwddku</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">CADMIUM — Chemical safety and health: health impacts. world health organization (who). disponível em: <a href='https://www.who.int/teams/environment-climate-change-and-health/chemical-safety-and-health/health-impacts/chemicals/cadmium' target='_blank' rel='noopener noreferrer'>https://www.who.int/teams/environment-climate-change-and-health/chemical-safety-and-health/health-impacts/chemicals/cadmium</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">CNN BRASIL. Cientista explica como chumbo influenciou na evolução do cérebro humano. YouTube, 17 out. 2025. disponível em: <a href='https://www.youtube.com/watch?v=ma32dkxflew' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=ma32dkxflew</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">DANINBLUE. The minamata mercury disaster (mini-documentary). YouTube, 7 fev. 2024. disponível em: <a href='https://www.youtube.com/watch?v=mdtwwzkflhe' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=mdtwwzkflhe</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION (WHO). Who guideline for clinical management of exposure to lead. geneva: world health organization, [s.d.]. disponível em: <a href='https://www.who.int/publications/b/60593' target='_blank' rel='noopener noreferrer'>https://www.who.int/publications/b/60593</a>. acesso em: 13 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula4" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Ficha de investigação de intoxicação exógena: Sistema de Informação de Agravos de Notificação – SINAN. Brasília: Ministério da Saúde, [s. d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/intoxicacao_exogena_sinan.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/intoxicacao_exogena_sinan.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Guia de investigação de surtos e epidemias. Brasília: Ministério da Saúde, [s. d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/guia_investigacao_surtos_epidemias.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/guia_investigacao_surtos_epidemias.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Lista completa das doenças e agravos de notificação obrigatória. Portal SINAN. Disponível em: <a href='https://portalsinan.saude.gov.br/doencas-e-agravos?showall=1&limitstart=' target='_blank' rel='noopener noreferrer'>https://portalsinan.saude.gov.br/doencas-e-agravos?showall=1&limitstart=</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Sistemas de informação em saúde no Brasil: contextos históricos. Brasília: Ministério da Saúde, [s. d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/sistemas_informacao_atencao_saude_contextos_historicos.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/sistemas_informacao_atencao_saude_contextos_historicos.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ORGANIZAÇÃO MUNDIAL DA SAÚDE (OMS). Fluxo da informação em saúde. Infográfico. [s. l.]: OMS, 2017. Disponível em: <a href='https://www.afro.who.int/sites/default/files/2017-06/AHO_Country_H_Infos_Systems_2nd_edition.pdf' target='_blank' rel='noopener noreferrer'>https://www.afro.who.int/sites/default/files/2017-06/AHO_Country_H_Infos_Systems_2nd_edition.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">VIDEOSAÚDE DISTRIBUIDORA DA FIOCRUZ. Ep. 01 – Webinário CEE/Fiocruz: A Vigilância Epidemiológica no SUS. YouTube, 23 jul. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=MR2Te6GnE1w' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=MR2Te6GnE1w</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula5" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Falta de áreas verdes aumenta exposição a metais pesados em recém-nascidos, aponta pesquisa. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/noticias/2024/setembro/falta-de-areas-verdes-aumenta-exposicao-a-metais-pesados-em-recem-nascidos-aponta-pesquisa' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/noticias/2024/setembro/falta-de-areas-verdes-aumenta-exposicao-a-metais-pesados-em-recem-nascidos-aponta-pesquisa</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Combate à desinformação na área da saúde: uma luta de todos. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/noticias/2024/maio/combate-a-desinformacao-na-area-da-saude-uma-luta-de-todos' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/noticias/2024/maio/combate-a-desinformacao-na-area-da-saude-uma-luta-de-todos</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde (SAPS). Populações em situação de vulnerabilidade e desigualdade social. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/saps/equidade/o-que-e-equidade/populacoes-em-situacao-de-vulnerabilidade-e-desigualdade-social' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/saps/equidade/o-que-e-equidade/populacoes-em-situacao-de-vulnerabilidade-e-desigualdade-social</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">CARVALHO, L. V. B. de <em>et al</em>. Exposição ocupacional a substâncias químicas, fatores e saúde do trabalhador: uma visão integrada. Saúde em Debate, v. 41, n. spe2, p. 313–326, 2017.</li>

                                                    <li class="list-group-item">DÁSKALOS. Você sabe o que foi o desastre de Minamata – ENEM 2022. YouTube, 13 set. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=OLVFxwHWuE0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=OLVFxwHWuE0</a>. Acesso em: 25 set. 2025.</li>

                                                    <li class="list-group-item">FIORATI, R. C.; ELUI, V. M. Determinantes sociais da saúde, iniquidades e inclusão social entre pessoas com deficiência. Revista Latino-Americana de Enfermagem, v. 23, n. 2, p. 329–336, 2015.</li>

                                                    <li class="list-group-item">FIOCRUZ. Pesquisa mostra que população de Brumadinho tem alta exposição a metais pesados. 2022. Disponível em: <a href='https://fiocruz.br/noticia/2022/07/pesquisa-mostra-que-populacao-de-brumadinho-tem-alta-exposicao-metais-pesados' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/noticia/2022/07/pesquisa-mostra-que-populacao-de-brumadinho-tem-alta-exposicao-metais-pesados</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">FRANZOSO, C. Desastre de Minamata. YouTube, 1 abr. 2014. Disponível em: <a href='https://www.youtube.com/watch?v=_zMG0MsyIQ0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=_zMG0MsyIQ0</a>. Acesso em: 2 set. 2025.</li>

                                                    <li class="list-group-item">FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). DSSBR – Determinantes sociais da saúde: o que é. Rio de Janeiro: Fiocruz, 2025. Disponível em: <a href='https://dssbr.ensp.fiocruz.br/dss-o-que-e/' target='_blank' rel='noopener noreferrer'>https://dssbr.ensp.fiocruz.br/dss-o-que-e/</a>. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">GARBOIS, J. A.; SODRÉ, F.; DALBELLO-ARAÚJO, M. Da noção de determinação social à de determinantes sociais da saúde. Saúde em Debate, v. 41, n. 112, p. 1–11, 2017.</li>

                                                    <li class="list-group-item">INSTITUTO NACIONAL DE CÂNCER (INCA). Exposição no trabalho e no ambiente. Disponível em: <a href='https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-no-trabalho-e-no-ambiente/amianto' target='_blank' rel='noopener noreferrer'>https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-no-trabalho-e-no-ambiente/amianto</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">MENDES, F. <em>et al</em>. Armed violence in Manguinhos/RJ, Brazil: health and daily life of health and education workers. Cadernos de Saúde Pública, v. 29, n. 7, p. e04502024, jul. 2024.</li>

                                                    <li class="list-group-item">MONIZ, G. <em>et al</em>. Desigualdades em saúde: uma perspectiva global. Ciência & Saúde Coletiva, [S.l.], v. 22, n. 3, p. 737–746, 2017. Disponível em: <a href='https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/?format=html&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/?format=html&lang=pt</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">PRECOMA, D. B. A educação como determinante social associado ao risco cardiovascular. Arquivos Brasileiros de Cardiologia, v. 117, n. 1, p. 13–14, jul. 2021.</li>

                                                    <li class="list-group-item">RIBEIRO, K. G. <em>et al</em>. Determinantes sociais da saúde dentro e fora de casa. Saúde em Debate, v. 48, n. 140, e8590, 2024.</li>

                                                    <li class="list-group-item">SANEAMENTO SALVA. Pontos de Vista: Drauzio explica as principais doenças causadas da falta de saneamento. YouTube, 19 nov. 2025. Disponível em: <a href='https://www.youtube.com/watch?v=bXRYCcmAXt0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=bXRYCcmAXt0</a>. Acesso em: 13 fev. 2026.</li>

                                                    <li class="list-group-item">SANT’ANNA, C. F. <em>et al</em>. Determinantes sociais de saúde: características da comunidade e trabalho das enfermeiras na saúde da família. Revista Gaúcha de Enfermagem, v. 31, n. 1, p. 92–99, 2010.</li>

                                                    <li class="list-group-item">SILVA, M. A. <em>et al</em>. Saúde ambiental, determinantes sociais e vigilância à exposição de contaminantes químicos no Brasil: revisão integrativa de literatura. Aracê, v. 7, n. 1, p. 1384–1415, 2025.</li>

                                                    <li class="list-group-item">WWF-BRASIL. Especial Minamata: o que aconteceu no Japão poderia se repetir aqui? YouTube, 19 nov. 2018. Disponível em: <a href='https://www.youtube.com/watch?v=lWQO7aaqiVc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=lWQO7aaqiVc</a>. Acesso em: 25 set. 2025.</li>

                                                    <li class="list-group-item">YANOMAMIS de nove aldeias estão contaminados por mercúrio. Disponível em: <a href='https://agenciagov.ebc.com.br/noticias/202404/yanomamis-de-nove-aldeias-assediadas-pelo-garimpo-estao-contaminados-por-mercurio' target='_blank' rel='noopener noreferrer'>https://agenciagov.ebc.com.br/noticias/202404/yanomamis-de-nove-aldeias-assediadas-pelo-garimpo-estao-contaminados-por-mercurio</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula6" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula6">Aula 6</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula6" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula6" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">CARVALHO, A.; BURGESS, J. Cultural circuits of climate change in UK broadsheet newspapers, 1985–2003. Risk Analysis, Hoboken, v. 25, n. 6, p. 1457–1469, 2005. DOI: 10.1111/j.1539-6924.2005.00692.x.</li>

                                                    <li class="list-group-item">MORENO, A. R.; PERES, F. El estado del arte de la comunicación de riesgos en la región de América Latina. Revista de Comunicación y Salud, Madrid, v. 1, n. 1, p. 55–71, 2011.</li>

                                                    <li class="list-group-item">PERES, F. Biossegurança, saúde, ambiente e comunicação de riscos: um debate necessário. Ciência & Saúde Coletiva, Rio de Janeiro, v. 17, p. 294–297, 2012.</li>

                                                    <li class="list-group-item">PERES, F. <em>et al</em>. Design of risk communication strategies based on risk perception among farmers exposed to pesticides in Rio de Janeiro State, Brazil. American Journal of Industrial Medicine, Hoboken, v. 56, n. 1, p. 77–89, 2013.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion Módulos -->
        </div>

    </div>
</div>
		`,
    },
    glossario: {
        ariaLabel: "glossario",
        modalSize: "modal-lg",
        modalTitle: "Glossário",
        modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-atores-tab" data-bs-toggle="pill" data-bs-target="#pills-atores" type="button" role="tab" aria-controls="pills-atores" aria-selected="true">Atores</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-seguranca-tab" data-bs-toggle="pill" data-bs-target="#pills-seguranca" type="button" role="tab" aria-controls="pills-seguranca" aria-selected="false">Segurança</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-processos-tab" data-bs-toggle="pill" data-bs-target="#pills-processos" type="button" role="tab" aria-controls="pills-processos" aria-selected="false">Processos</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-documentos-tab" data-bs-toggle="pill" data-bs-target="#pills-documentos" type="button" role="tab" aria-controls="pills-documentos" aria-selected="false">Documentos</button>
					</li>
				</ul>
				<div class="tab-content" id="pills-tabContent">
					<!-- Atores -->
					<div class="tab-pane fade show active" id="pills-atores" role="tabpanel" aria-labelledby="pills-atores-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
								</h2>
								<div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>ANVISA</strong></p>
										<p>Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.</p>
										<p><strong>Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</strong></p>
										<p>Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.</p>
										<p><strong>Autoridades Regulatórias</strong></p>
										<p>Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
								</h2>
								<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Centro de Pesquisa</strong></p>
										<p>Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).</p>
										<p><strong>Comitê de Coordenação</strong></p>
										<p>Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.</p>
										<p><strong>Comitê de Ética em Pesquisa (CEP)</strong></p>
										<p>Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.</p>
										<p><strong>Comitê de Ética Independente (IEC)</strong></p>
										<p>Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).</p>
										<p><strong>Comitê Independente de Monitoramento de Dados (IDMC)</strong></p>
										<p>Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo.</p>
										<p><strong>Comitê Institucional de Bioética Para Saúde (CIBS)</strong></p>
										<p>Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.</p>
										<p><strong>Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</strong></p>
										<p>Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.</p>
										<p><strong>CONEP</strong></p>
										<p>Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
								</h2>
								<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Instituição</strong></p>
										<p>Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.</p>
										<p><strong>Investigador de Coordenação</strong></p>
										<p>Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.</p>
										<p><strong>Investigador/Investigador Principal/Pesquisador</strong></p>
										<p>Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.</p>
										<p><strong>Investigador/ Instituição</strong></p>
										<p>Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.</p>
										<p><strong>Investigador-Patrocinador</strong></p>
										<p>Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-o">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
								</h2>
								<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Organização de Pesquisa Contratada (CRO)</strong></p>
										<p>Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
								</h2>
								<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Participante de Pesquisa</strong></p>
										<p>Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.</p>
										<p><strong>Populações Vulneráveis</strong></p>
										<p>Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.</p>
										<p><strong>Patrocinador</strong></p>
										<p>Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
								</h2>
								<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Representante legal</strong></p>
										<p>Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-s">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
								</h2>
								<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Sub Investigador</strong></p>
										<p>Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
								</h2>
								<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Testemunha Imparcial</strong></p>
										<p>Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Segurança -->
					<div class="tab-pane fade" id="pills-seguranca" role="tabpanel" aria-labelledby="pills-seguranca-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-c" aria-expanded="true" aria-controls="collapse2-c">C</button>
								</h2>
								<div id="collapse2-c" class="accordion-collapse collapse" aria-labelledby="heading2-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Comparador (Produto)</strong></p>
										<p>Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-d" aria-expanded="false" aria-controls="collapse2-d">D</button>
								</h2>
								<div id="collapse2-d" class="accordion-collapse collapse" aria-labelledby="heading2-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Desvio de Protocolo</strong></p>
										<p>Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-e" aria-expanded="false" aria-controls="collapse2-e">E</button>
								</h2>
								<div id="collapse2-e" class="accordion-collapse collapse" aria-labelledby="heading2-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Evento Adverso (EA)</strong></p>
										<p>Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.</p>
										<p><strong>Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</strong></p>
										<p>Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-p" aria-expanded="false" aria-controls="collapse2-p">P</button>
								</h2>
								<div id="collapse2-p" class="accordion-collapse collapse" aria-labelledby="heading2-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Placebo</strong></p>
										<p>Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.</p>
										<p><strong>Produto Investigacional (ou produto experimental)</strong></p>
										<p>Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-r" aria-expanded="false" aria-controls="collapse2-r">R</button>
								</h2>
								<div id="collapse2-r" class="accordion-collapse collapse" aria-labelledby="heading2-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Reação Adversa ao medicamento (RAM)</strong></p>
										<p>Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.</p>
										<p><strong>Reação Adversa Inesperada ao medicamento</strong></p>
										<p>Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-v">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-v" aria-expanded="false" aria-controls="collapse2-v">V</button>
								</h2>
								<div id="collapse2-v" class="accordion-collapse collapse" aria-labelledby="heading2-v" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Violação de protocolo de ensaio clínico</strong></p>
										<p>Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Processos -->
					<div class="tab-pane fade" id="pills-processos" role="tabpanel" aria-labelledby="pills-processos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-a" aria-expanded="true" aria-controls="collapse3-a">A</button>
								</h2>
								<div id="collapse3-a" class="accordion-collapse collapse" aria-labelledby="heading3-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Adesão (em relação aos estudos)</strong></p>
										<p>Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.</p>
										<p><strong>Acesso Direto</strong></p>
										<p>Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.</p>
										<p><strong>Assentimento livre e esclarecido</strong></p>
										<p>Anuência do participante da pesquisa – criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.</p>
										<p><strong>Auditoria</strong></p>
										<p>Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-b" aria-expanded="false" aria-controls="collapse3-b">B</button>
								</h2>
								<div id="collapse3-b" class="accordion-collapse collapse" aria-labelledby="heading3-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Bem-estar (dos participantes de pesquisa)</strong></p>
										<p>Integridade física e mental dos indivíduos envolvidos em um estudo clínico.</p>
										<p><strong>Boas Práticas Clínicas (BPC)</strong></p>
										<p>Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-c" aria-expanded="false" aria-controls="collapse3-c">C</button>
								</h2>
								<div id="collapse3-c" class="accordion-collapse collapse" aria-labelledby="heading3-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Caráter Cego/Mascaramento</strong></p>
										<p>Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.</p>
										<p><strong>Confidencialidade </strong></p>
										<p>Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.</p>
										<p><strong>Consentimento Livre e Esclarecido</strong></p>
										<p>Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.</p>
										<p><strong>Controle de Qualidade</strong></p>
										<p>Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-e" aria-expanded="false" aria-controls="collapse3-e">E</button>
								</h2>
								<div id="collapse3-e" class="accordion-collapse collapse" aria-labelledby="heading3-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Estudo Clínico</strong></p>
										<p>Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-f">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-f" aria-expanded="false" aria-controls="collapse3-f">F</button>
								</h2>
								<div id="collapse3-f" class="accordion-collapse collapse" aria-labelledby="heading3-f" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Farmacocinética</strong></p>
										<p>Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).</p>
										<p><strong>Farmacodinâmica</strong></p>
										<p>Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-g">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-g" aria-expanded="false" aria-controls="collapse3-g">G</button>
								</h2>
								<div id="collapse3-g" class="accordion-collapse collapse" aria-labelledby="heading3-g" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Garantia de Qualidade</strong></p>
										<p>Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-i" aria-expanded="false" aria-controls="collapse3-i">I</button>
								</h2>
								<div id="collapse3-i" class="accordion-collapse collapse" aria-labelledby="heading3-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Inspeção</strong></p>
										<p>Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-m">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-m" aria-expanded="false" aria-controls="collapse3-m">M</button>
								</h2>
								<div id="collapse3-m" class="accordion-collapse collapse" aria-labelledby="heading3-m" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Monitoria</strong></p>
										<p>Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-r" aria-expanded="false" aria-controls="collapse3-r">R</button>
								</h2>
								<div id="collapse3-r" class="accordion-collapse collapse" aria-labelledby="heading3-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Randomização</strong></p>
										<p>Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Documentos  -->
					<div class="tab-pane fade" id="pills-documentos" role="tabpanel" aria-labelledby="pills-documentos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-a" aria-expanded="true" aria-controls="collapse4-a">A</button>
								</h2>
								<div id="collapse4-a" class="accordion-collapse collapse" aria-labelledby="heading4-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Aprovação (em relação às Instâncias Regulatórias)</strong></p>
										<p>É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-b" aria-expanded="false" aria-controls="collapse4-b">B</button>
								</h2>
								<div id="collapse4-b" class="accordion-collapse collapse" aria-labelledby="heading4-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Brochura do Investigador</strong></p>
										<p>Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-c" aria-expanded="false" aria-controls="collapse4-c">C</button>
								</h2>
								<div id="collapse4-c" class="accordion-collapse collapse" aria-labelledby="heading4-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Certificado de Auditoria</strong></p>
										<p>Declaração de confirmação do auditor de que a auditoria foi realizada.</p>
										<p><strong>Código de Identificação do Participante</strong></p>
										<p>Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.</p>
										<p><strong>Contrato</strong></p>
										<p>Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-d" aria-expanded="false" aria-controls="collapse4-d">D</button>
								</h2>
								<div id="collapse4-d" class="accordion-collapse collapse" aria-labelledby="heading4-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Dados Fonte</strong></p>
										<p>Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).</p>
										<p><strong>Documentação</strong></p>
										<p>Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.</p>
										<p><strong>Documentos Essenciais</strong></p>
										<p>Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.</p>
										<p><strong>Documentos Fonte</strong></p>
										<p>Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-e" aria-expanded="false" aria-controls="collapse4-e">E</button>
								</h2>
								<div id="collapse4-e" class="accordion-collapse collapse" aria-labelledby="heading4-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Emenda ao Protocolo</strong></p>
										<p>Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.</p>
										<p><strong>Exigências Regulatórias Aplicáveis</strong></p>
										<p>Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.</p>
										<p><strong>Ficha Clínica (Case Report Form - CRF)</strong></p>
										<p>Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-p" aria-expanded="false" aria-controls="collapse4-p">P</button>
								</h2>
								<div id="collapse4-p" class="accordion-collapse collapse" aria-labelledby="heading4-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Parecer</strong></p>
										<p>Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).</p>
										<p><strong>Procedimentos Operacionais Padrão (POP)</strong></p>
										<p>Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.</p>
										<p><strong>Produto sob investigação</strong></p>
										<p>Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.</p>
										<p><strong>Protocolo</strong></p>
										<p>Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-r" aria-expanded="false" aria-controls="collapse4-r">R</button>
								</h2>
								<div id="collapse4-r" class="accordion-collapse collapse" aria-labelledby="heading4-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Relatório de Auditoria</strong></p>
										<p>Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.</p>
										<p><strong>Relatório de Estudo Clínico</strong></p>
										<p>Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.</p>
										<p><strong>Relatório Interino do Estudo Clínico</strong></p>
										<p>Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.</p>
										<p><strong>Relatório de Monitoria</strong></p>
										<p>Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-t" aria-expanded="false" aria-controls="collapse4-t">T</button>
								</h2>
								<div id="collapse4-t" class="accordion-collapse collapse" aria-labelledby="heading4-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Trilha de Auditoria</strong></p>
										<p>Documentação que permite a reconstrução do curso dos eventos e /ou achados.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
    },
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener("DOMContentLoaded", function (event) {
    //do work

    modalButtons.forEach((btn) => {
        // Check if the modal exist
        const modalId = btn.getAttribute("data-bs-target").slice(1);

        const createdModalId = document.getElementById(modalId);

        if (!createdModalId) {
            // If don't exist create one
            createModal(modalId);
        }
    });
});

function createModal(id) {
    const newModal = document.createElement("div");
    const modalLabel = id.slice(6);

    newModal.classList.add("modal", "fade");
    newModal.setAttribute("id", id);
    newModal.setAttribute("tabindex", "-1");
    newModal.setAttribute("aria-labelledby", modalLabel);
    newModal.setAttribute("aria-hidden", "true");

    newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

    document.body.appendChild(newModal);
}

//Before and after
const container = document.querySelector(".antes-e-depois--container");

if (container) {

    document.querySelector(".antes-e-depois--slider").addEventListener("input", (e) => {
        container.style.setProperty("--position", `${e.target.value}%`);
    });
}

// Botão Back to top

function initBackToTop() {
    // evita criar duas vezes
    if (document.querySelector("#back-to-top")) return;

    // não cria se a página for muito pequena
    if (document.body.scrollHeight < window.innerHeight + 200) return;

    const button = document.createElement("button");

    button.id = "back-to-top";

    button.className = "fio-button fio-button-primary";

    button.setAttribute("aria-label", "Voltar ao topo");

    button.innerHTML = `
		<span class="material-symbols-rounded">
			keyboard_arrow_up
		</span>
	`;

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {
        button.classList.toggle("show", window.scrollY > 400);
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

initBackToTop();

//Breadcrumb

function getCurrentPageData() {
    const currentPath = window.location.pathname;

    for (let moduleIndex = 0; moduleIndex < course.modules.length; moduleIndex++) {
        const module = course.modules[moduleIndex];

        for (let itemIndex = 0; itemIndex < module.items.length; itemIndex++) {
            const item = module.items[itemIndex];

            if (currentPath.endsWith(item.path)) {
                return {
                    moduleIndex,
                    itemIndex,
                    module,
                    item,
                };
            }
        }
    }

    return null;
}

function initBreadcrumb() {
    const breadcrumb = document.getElementById("breadcrumb");

    if (!breadcrumb) return;

    const pageData = getCurrentPageData();

    if (!pageData) return;

    const moduleNumber = pageData.moduleIndex + 1;

    let itemLabel = "";

    switch (pageData.item.icon) {
        case "activity":
            itemLabel = "Atividades";
            break;

        case "welcome":
            itemLabel = "Introdução";
            break;

        case "closing":
            itemLabel = "Encerramento";
            break;

        default:
            itemLabel = `Aula ${pageData.itemIndex + 1}`;
    }

    breadcrumb.innerHTML = `
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">

				<li class="breadcrumb-item">
					<a href="../index.html">Início</a>
				</li>

				<li class="breadcrumb-item">
					Módulo ${moduleNumber}
				</li>

				<li class="breadcrumb-item active" aria-current="page">
					${itemLabel}
				</li>

			</ol>
		</nav>
	`;
}

initBreadcrumb();

//Impedir de baixar os vídeos direto da página

// Seleciona todos os vídeos com a classe .video-protegido
const videosProtegidos = document.querySelectorAll('.video-protegido');

videosProtegidos.forEach(function (video) {
    // 1. Remove o botão de download de forma nativa via API de controles do navegador
    if (video.controlsOptions) {
        video.controlsOptions.disableRemotePlayback = true; // Opcional: desativa espelhamento se desejar
    }
    // Esta propriedade desativa recursos específicos do painel (como o download)
    video.setAttribute('controlslist', 'nodownload');

    // 2. Mantém o bloqueio do clique com botão direito que já tínhamos feito
    video.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});
