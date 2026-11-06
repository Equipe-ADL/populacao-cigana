// Iniciar o AOS
window.addEventListener('DOMContentLoaded', () => AOS.init());

// Stick Header

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#menu-global");
    const logoBlack = header.querySelector(".logo-black");
    const logoWhite = header.querySelector(".logo-white");

    // Garante o estado inicial das logos
    logoBlack.style.display = "block";
    logoWhite.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            header.classList.add("header--sticky");
            logoBlack.style.display = "none";
            logoWhite.style.display = "block";
        } else {
            header.classList.remove("header--sticky");
            logoBlack.style.display = "block";
            logoWhite.style.display = "none";
        }
    });
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

        <!-- Ministério da Saúde -->
        <span class="h5 mb-3 d-block">Ministério da Saúde</span>

        <div class="mb-5">
            <p class="mb-1">Alexandre Padilha</p>
            <p class="small text-muted"><em>Ministro da Saúde</em></p>
        </div>

        <!-- Secretaria-executiva UNA-SUS -->
        <span class="h5 mb-3 d-block">Secretaria-executiva da Universidade Aberta do SUS – UNA-SUS</span>

        <div class="mb-5">
            <p class="mb-1">Maria Fabiana Damásio Passos</p>
            <p class="small text-muted"><em>Secretária-executiva</em></p>
        </div>

        <!-- Fundação Oswaldo Cruz -->
        <span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>

        <div class="mb-5">
            <p class="mb-1">Mário Moreira</p>
            <p class="small text-muted"><em>Presidente</em></p>

            <p class="mb-1">Marly Cruz</p>
            <p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
        </div>

        <!-- Secretaria de Atenção Primária à Saúde -->
        <span class="h5 mb-3 d-block">Secretaria de Atenção Primária à Saúde – SAPS</span>

        <div class="mb-5">
            <p class="mb-1">Ana Luiza F.R. Caldas</p>
            <p class="small text-muted"><em>Secretária de Atenção Primária à Saúde</em></p>
        </div>

        <!-- Departamento de Saúde da Família -->
        <span class="h5 mb-3 d-block">Departamento de Saúde da Família – DESF</span>

        <div class="mb-5">
            <p class="mb-1">José Eudes Barroso Vieira</p>
            <p class="small text-muted"><em>Diretor do Departamento de Saúde da Família</em></p>
        </div>

        <!-- Departamento de Gestão do Cuidado Integral -->
        <span class="h5 mb-3 d-block">Departamento de Gestão do Cuidado Integral - DGCI</span>

        <div class="mb-5">
            <p class="mb-1">Olivia Lucena de Medeiros</p>
            <p class="small text-muted"><em>Diretora do Departamento de Gestão do Cuidado Integral</em></p>
        </div>

        <!-- Departamento de Promoção da Saúde -->
        <span class="h5 mb-3 d-block">Departamento de Promoção da Saúde - DEPROS</span>

        <div class="mb-5">
            <p class="mb-1">Ângela Fernandes Leal da Silva</p>
            <p class="small text-muted"><em>Diretora do Departamento de Promoção da Saúde</em></p>
        </div>

        <!-- Coordenação-Geral do Acesso e Equidade -->
        <span class="h5 mb-3 d-block">Coordenação-Geral do Acesso e Equidade na Atenção Primária à Saúde – CGAEQ</span>

        <div class="mb-5">
            <p class="mb-1">Lilian Silva Gonçalves</p>
            <p class="small text-muted"><em>Coordenadora-Geral de Acesso e Equidade na Atenção Primária à Saúde</em></p>
        </div>

        <!-- Coordenação de Atenção às Populações em Situação de Vulnerabilidade -->
        <span class="h5 mb-3 d-block">Coordenação de Atenção às Populações em Situação de Vulnerabilidade – COASV</span>

        <div class="mb-5">
            <p class="mb-1">Cláudio Luiz de França Neto</p>
            <p class="small text-muted"><em>Coordenador de Atenção às Populações em Situação de Vulnerabilidade</em></p>
        </div>

        <!-- Assessoria Técnica COASV -->
        <span class="h5 mb-3 d-block">Assessoria Técnica da Coordenação de Atenção às Populações em Situação de Vulnerabilidade – COASV</span>

        <div class="mb-5">
            <p class="mb-1">Annaterra Meira Oliveira de Jesus</p>
            <p class="mb-1">Danylo Silva Guimarães</p>
            <p class="mb-1">Luciana da Conceição e Silva</p>
            <p class="mb-1">Mariana Leão Soares Gomes</p>
            <p class="mb-1">Natália dos Anjos Guimarães</p>
            <p class="mb-1">Regina Gabriela Mesquita Dias</p>
        </div>

        <!-- Endereço UNA-SUS -->
        <span class="h5 mb-3 d-block">Secretaria-executiva da Universidade Aberta do SUS – UNA-SUS</span>

        <div class="mb-5">
            <p class="mb-1">Campus Universitário Darcy Ribeiro</p>
            <p class="mb-1">Av. L3 Norte, s/n, Gleba A</p>
            <p class="mb-1">Ed. Administrativo da Fiocruz Brasília, 2º andar</p>
            <p class="mb-1">Asa Norte, Brasília/DF - 70.904-130</p>
            <p class="mb-1">Telefone: (61) 3329-4598</p>
        </div>

        <!-- Curso -->
        <span class="h5 mb-3 d-block">Atenção Integral à Saúde para Povos Ciganos</span>

        <!-- Coordenação do curso -->
        <span class="h5 mb-3 d-block">Coordenador do Curso</span>

        <div class="mb-5">
            <p class="mb-1">Aluízio de Azevedo Silva Júnior</p>
            <p class="small text-muted"><em>Fiocruz/RJ / Coletivo Ciganagens / Associação Estadual das Etnias Ciganas de Mato Grosso (AEEC/MT)</em></p>
        </div>

        <!-- Conteudistas e autores -->
        <span class="h5 mb-3 d-block">Conteudista/Autor</span>

        <div class="mb-5">
            <p class="mb-1">Aluízio de Azevedo Silva Júnior</p>
            <p class="small text-muted"><em>Fiocruz/RJ / Coletivo Ciganagens e Associação Estadual das Etnias Ciganas de Mato Grosso (AEEC-MT)</em></p>

            <p class="mb-1">Antônio José Gomes Alcântara</p>
            <p class="small text-muted"><em>Faculdade Santa Maria (FSM)</em></p>

            <p class="mb-1">Brenna Carolaine Lopes Vaz</p>
            <p class="small text-muted"><em>Universidade do Estado da Bahia</em></p>

            <p class="mb-1">Cícera Suênia Soares Mangueira</p>
            <p class="small text-muted"><em>Mestre em Saúde coletiva- UFPB / Coordenação da ESF DS II - Secretaria municipal de saúde de Sousa-PB</em></p>

            <p class="mb-1">Danillo Amaral Nascimento (Danillo Kalón)</p>
            <p class="small text-muted"><em>Membro do Coletivo Ciganagens</em></p>

            <p class="mb-1">Desirée Mattos Almeida</p>
            <p class="small text-muted"><em>Secretaria Municipal de Educação do Rio de Janeiro / Coletivo Ciganagens</em></p>

            <p class="mb-1">Irisma Fernandes Calvo</p>
            <p class="small text-muted"><em>Artista da Comunidade Tradicional Cigana Circense Fazenda Umburaninha - Povoado Creguenhem - Tucano (BA) / Creche Vovó Maria Rosa</em></p>

            <p class="mb-1">Hayanne Giovana Iovanovitchi</p>
            <p class="small text-muted"><em>FAE Centro Universitário / Coletivo Ciganagens</em></p>

            <p class="mb-1">Marcilânia Gomes Alcântara Figueiredo</p>
            <p class="small text-muted"><em>Rede Municipal de Ensino de Sousa/PB – Escola Municipal Irmã Maria Iraides Holanda Lavor</em></p>

            <p class="mb-1">Marcos Toyansk Guimarãis</p>
            <p class="small text-muted"><em>Laboratório de Estudos sobre Etnicidade, Racismo e Discriminação da USP.</em></p>

            <p class="mb-1">Roi Rogeres Fernandes Filho</p>
            <p class="small text-muted"><em>Universidade Federal da Bahia (UFBA) / Coletivo @ciganagens</em></p>

            <p class="mb-1">Sara Macêdo de Paula</p>
            <p class="small text-muted"><em>Universidade Federal de Goiás (UFG) / Coletivo Ciganagens</em></p>
        </div>

        <!-- Revisão técnico-científica -->
        <span class="h5 mb-3 d-block">Revisor Técnico-científico</span>

        <div class="mb-5">
            <p class="mb-1">Aluízio de Azevedo Silva Júnior</p>
            <p class="small text-muted"><em>Fiocruz/RJ / Coletivo Ciganagens / Associação Estadual das Etnias Ciganas de Mato Grosso (AEEC/MT)</em></p>

            <p class="mb-1">Roi Rogeres Fernandes Filho</p>
            <p class="small text-muted"><em>Universidade Federal da Bahia (UFBA) / Coletivo @ciganagens</em></p>
        </div>

        <!-- Artes e ilustrações -->
        <span class="h5 mb-3 d-block">Artes e ilustrações</span>

        <div class="mb-5">
            <p class="mb-1">Danillo Amaral Nascimento (Danillo Kalón)</p>
            <p class="small text-muted"><em>Membro do Coletivo Ciganagens</em></p>
        </div>

        <!-- Validação externa -->
        <span class="h5 mb-3 d-block">Validador Externo (equipe Ministério da Saúde)</span>

        <div class="mb-5">
            <p class="mb-1">XXXXXXXXXX</p>
        </div>

        <!-- Campus Virtual Fiocruz -->
        <span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

        <div class="mb-5">
            <p class="mb-1">Ana Cristina da Matta Furniel</p>
            <p class="small text-muted"><em>Coordenadora-Geral</em></p>

            <p class="mb-1">Rosane Mendes</p>
            <p class="small text-muted"><em>Coordenadora Adjunta</em></p>

            <p class="mb-1">Renata Bernardes David</p>
            <p class="small text-muted"><em>Coordenação de Produção</em></p>

            <p class="mb-1">Juliana Dutra</p>
            <p class="small text-muted"><em>Gerente de Produção</em></p>

            <p class="mb-1">Isabela Schincariol</p>
            <p class="small text-muted"><em>Assessora de Comunicação</em></p>

            <p class="mb-1">Alessandra Guedes</p>
            <p class="small text-muted"><em>Designer Educacional</em></p>

            <p class="mb-1">Alessandra Siqueira</p>
            <p class="small text-muted"><em>Designer Educacional</em></p>

            <p class="mb-1">Aline Polycarpo</p>
            <p class="small text-muted"><em>UX/UI Designer</em></p>

            <p class="mb-1">Danilo Blum</p>
            <p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>

            <p class="mb-1">Luciana Nunes</p>
            <p class="small text-muted"><em>UX/UI Designer</em></p>
        </div>

        <!-- Recursos Audiovisuais -->
        <span class="h5 mb-3 d-block">Recursos Audiovisuais</span>

        <div class="mb-5">
            <p class="mb-1">Bruno Athaydes</p>
            <p class="small text-muted"><em>Editor audiovisual</em></p>

            <p class="mb-1">Teo Venerando</p>
            <p class="small text-muted"><em>Editor audiovisual</em></p>
        </div>

        <!-- Recursos Educacionais -->
        <span class="h5 mb-3 d-block">Recursos Educacionais</span>

        <div class="mb-5">
            <p class="mb-1">Natália Rasina</p>
            <p class="small text-muted"><em>Audiodescrição</em></p>
        </div>

        <!-- Revisão Ortográfica -->
        <span class="h5 mb-3 d-block">Revisão Ortográfica</span>

        <div class="mb-5">
            <p class="mb-1">Angélica Drska</p>
        </div>

        <!-- Assessoria Pedagógica -->
        <span class="h5 mb-3 d-block">Assessoria Pedagógica</span>

        <div class="mb-5">
            <p class="mb-1">Cláudia Reis</p>
            <p class="small text-muted"><em>Pedagoga</em></p>
        </div>

        <!-- Suporte Técnico de Tecnologia da Informação -->
        <span class="h5 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>

        <div class="mb-5">
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
            <p class="small text-muted"><em>Designer gráfico</em></p>
        </div>

        <!-- Assessoria Técnica SE/UNASUS -->
        <span class="h5 mb-3 d-block">Assessoria Técnica – SE/UNASUS</span>

        <div class="mb-5">
            <p class="mb-1">Débora Dupas Gonçalves do Nascimento</p>
            <p class="mb-1">Edinalva Neves Nascimento</p>
            <p class="mb-1">Jakeline Ribeiro Barbosa</p>
        </div>

        <!-- Apoio Técnico -->
        <span class="h5 mb-3 d-block">Apoio Técnico</span>

        <div class="mb-5">
            <p class="mb-1">Aline Santos Jacob</p>
            <p class="mb-1">Ilma F Santos</p>
            <p class="mb-1">Pollyana dos Santos Pereira</p>
        </div>

         <!-- Ficha técnica e direitos autorais -->
        

        <div class="mb-5">
            <p>©2026. Ministério da Saúde. Sistema Universidade Aberta do SUS. Fundação Oswaldo Cruz</p>
            <p>Alguns direitos reservados. É permitida a reprodução, disseminação e utilização dessa obra, em parte ou em sua totalidade, nos termos da licença para usuário final do Acervo de Recursos Educacionais em Saúde (ARES). Deve ser citada a fonte e é vedada a sua utilização comercial.</p>
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
                                                    <li class="list-group-item">ALMEIDA, M. G.; BARBOSA, D. R. M.; PEDROSA, J. I. S. Trilhas da iniquidade: saúde de povos ciganos e políticas públicas no Brasil. <em>Revista Eletrônica Gestão &amp; Saúde</em>, Brasília, 2013. ISSN 1982-4785.</li>
                                                    <li class="list-group-item">BRASIL. <em>Decreto nº 6.040, de 7 de fevereiro de 2007</em>. Institui a Política Nacional de Desenvolvimento Sustentável dos Povos e Comunidades Tradicionais. Brasília, DF: Presidência da República, 2007. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6040.html" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6040.html</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">BRASIL. <em>Conheça os direitos de todos os cidadãos usuários do SUS</em>. Brasília, DF: Governo Federal, 2022. Disponível em: <a href="https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2022/05/conheca-os-direitos-de-todos-os-cidadaos-usuarios-do-sus" target="_blank" rel="noopener noreferrer">https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2022/05/conheca-os-direitos-de-todos-os-cidadaos-usuarios-do-sus</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Acolhimento</em>. Brasília, DF: Ministério da Saúde. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/dicas/167acolhimento.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/dicas/167acolhimento.html</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Acolhimento: práticas de produção de saúde</em>. Brasília, DF: Ministério da Saúde. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_praticas_producao_saude.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_praticas_producao_saude.pdf</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Subsídios para o cuidado à saúde do povo cigano</em>. Brasília, DF: Ministério da Saúde, 2016. 44 p. ISBN 978-85-334-2437-1. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/subsidios_cuidado_saude_povo_cigano.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/subsidios_cuidado_saude_povo_cigano.pdf</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">CAMPOS, J. M. S.; FOTTA, M. Ciganos no Brasil: relações entre continuidade, mudança e diferença. <em>Civitas: Revista de Ciências Sociais</em>, Porto Alegre, v. 23, e44457, 2023. DOI: <a href="https://doi.org/10.15448/1984-7289.2023.1.44457" target="_blank" rel="noopener noreferrer">https://doi.org/10.15448/1984-7289.2023.1.44457</a>.</li>
                                                    <li class="list-group-item">CARDOSO, Priscila dos Santos Pereira. O acolhimento na rede de atenção psicossocial: conceito e importância. <em>Revista Arquivos Científicos (IMMES)</em>, Macapá, v. 4, n. 1, p. 47-53, 2021. ISSN 2595-4407.</li>
                                                    <li class="list-group-item">CORTESÃO, Luíza; PINTO, Fátima (org.). <em>O povo cigano: cidadãos na sombra: processos explícitos e ocultos de exclusão</em>. Porto: Edições Afrontamento, 1995. v. 8, p. 13-20.</li>
                                                    <li class="list-group-item">COSTA, E.; ROLIM, J. D. J. <em>Redução das desigualdades em saúde nas comunidades ciganas no Brasil: subsídios para a discussão</em>. Brasília, DF: AMSK/Brasil, 2014. 41 p. Disponível em: <a href="http://www.amsk.org.br/imagem/publicacao/publicacao2_AMSK_2014.pdf" target="_blank" rel="noopener noreferrer">http://www.amsk.org.br/imagem/publicacao/publicacao2_AMSK_2014.pdf</a>. Acesso em: 17 jul. 2015.</li>
                                                    <li class="list-group-item">COSTA, Elisa; CAVALCANTE, Lucimara. O direito de existir: seguindo na trilha da geração de dados. In: BRASIL. Ministério Público Federal. 6ª Câmara de Coordenação e Revisão. <em>Coletânea de artigos: povos ciganos: direitos e instrumentos para sua defesa</em>. Brasília, DF: MPF, 2020. p. 124-150. ISBN 978-65-87377-00-1.</li>
                                                    <li class="list-group-item">DESLANDES, S. F. Análise do discurso oficial sobre a humanização da assistência hospitalar. <em>Ciência &amp; Saúde Coletiva</em>, Rio de Janeiro, v. 9, n. 1, p. 7-14, 2004.</li>
                                                    <li class="list-group-item">FERNANDES, A. T. Etnicização e racização no processo de exclusão social. <em>Sociologia: Revista da Faculdade de Letras da Universidade do Porto</em>, Porto, I série, v. 1, 1995.</li>
                                                    <li class="list-group-item">MOONEN, F. <em>Anticiganismo e políticas ciganas na Europa e no Brasil</em>. ed. rev. e ampl. Recife: AMSK/Brasil, 2013.</li>
                                                    <li class="list-group-item">SILVA, Ana Conceição da. <em>Fatores associados à utilização de serviços de saúde por ciganos na Bahia, Brasil</em>. 2016. Tese (Doutorado em Medicina e Saúde Humana) – Escola Bahiana de Medicina e Saúde Pública, Salvador, 2016.</li>
                                                    <li class="list-group-item">SILVA JÚNIOR, Aluízio de Azevedo. <em>A liberdade na aprendizagem ambiental cigana dos mitos e ritos Kalon</em>. 2009. Dissertação (Mestrado em Educação) – Universidade Federal de Mato Grosso, Cuiabá, 2009. Disponível em: <a href="https://bit.ly/30K0vUc" target="_blank" rel="noopener noreferrer">https://bit.ly/30K0vUc</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">SILVA JÚNIOR, Aluízio de Azevedo. <em>A produção social dos sentidos nos processos interculturais de comunicação e saúde: a apropriação das políticas públicas de saúde para ciganos no Brasil e em Portugal</em>. 2018. Tese (Doutorado em Informação e Comunicação em Saúde) – Instituto de Comunicação e Informação Científica e Tecnológica em Saúde, Fundação Oswaldo Cruz, Rio de Janeiro, 2018.</li>
                                                    <li class="list-group-item">SILVA, P. C. S. e; FIGUEIRA, L. E. A luta pelos direitos ciganos no Senado Federal. <em>Revista Direito e Práxis</em>, Rio de Janeiro, v. 13, n. 1, p. 312-341, 2022. DOI: <a href="https://doi.org/10.1590/2179-8966/2021/54537" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/2179-8966/2021/54537</a>.</li>
                                                    <li class="list-group-item">SOUSA, Carlos J. dos Santos. <em>Os Maias: retrato sociológico de uma família cigana portuguesa (1827-1957)</em>. Lisboa: Mundos Sociais, 2013.</li>
                                                    <li class="list-group-item">UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL. <em>Vidas itinerantes</em>. Porto Alegre: UFRGS. Disponível em: <a href="https://www.ufrgs.br/cultura/vidas-itinerantes/" target="_blank" rel="noopener noreferrer">https://www.ufrgs.br/cultura/vidas-itinerantes/</a>. Acesso em: 21 set. 2026.</li>
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
                                                    <li class="list-group-item"><strong>AQUINO, Tomás de.</strong> <em>Suma Teológica.</em> Tradução e comentário de Edson B. da Silva. São Paulo: Editora Érica, 2002.</li>
                                                    <li class="list-group-item"><strong>ARISTÓTELES.</strong> <em>Metafísica.</em> Tradução e comentário de João Mário de Oliveira. São Paulo: Edusp, 2000.</li>
                                                    <li class="list-group-item"><strong>BÍBLIA. A. T. Provérbios.</strong> In: <strong>BÍBLIA.</strong> <em>Sagrada Bíblia Católica: Antigo e Novo Testamentos.</em> Tradução de José Simão. São Paulo: Sociedade Bíblica de Aparecida, 2008.</li>
                                                    <li class="list-group-item"><strong>BOURDIEU, Pierre.</strong> <em>A distinction: a social critique of the judgement of taste.</em> Cambridge, MA: Harvard University Press, 1984.</li>
                                                    <li class="list-group-item"><strong>COUTINHO, Cassi Ladi Reis.</strong> <em>Os ciganos nos registros policiais mineiros (1907-1920).</em> 2016. Brasília, DF: Universidade de Brasília, 2016.</li>
                                                    <li class="list-group-item"><strong>DELEUZE, Gilles; GUATTARI, Félix.</strong> <em>Mil platôs: capitalismo e esquizofrenia.</em> Tradução de Flávio I. K. B. Soares. São Paulo: Editora 34, 2000.</li>
                                                    <li class="list-group-item"><strong>DELEUZE, Gilles; GUATTARI, Félix.</strong> <em>O anti-Édipo: capitalismo e esquizofrenia.</em> Tradução de Flávio I. K. B. Soares. São Paulo: Editora 34, 2000.</li>
                                                    <li class="list-group-item"><strong>DESCARTES, René.</strong> <em>Meditações metafísicas.</em> Lisboa: Edições 70, 2002.</li>
                                                    <li class="list-group-item"><strong>FOUCAULT, Michel.</strong> <em>A arqueologia do saber.</em> Rio de Janeiro: Forense Universitária, 2005. A edição de 2005 é identificada como 7. ed., 1. reimpr. em catálogo da UFRJ.</li>
                                                    <li class="list-group-item"><strong>HERÁCLITO.</strong> <em>Fragmentos.</em> Tradução e comentário de Maria Helena da Rocha Pereira. São Paulo: Edusp, 2004.</li>
                                                    <li class="list-group-item"><strong>HUME, David.</strong> <em>Tratado da natureza humana.</em> São Paulo: Editora Unesp, 2004.</li>
                                                    <li class="list-group-item"><strong>LOCKE, John.</strong> <em>Ensaio sobre o entendimento humano.</em> São Paulo: Martins Fontes, 2001.</li>
                                                    <li class="list-group-item"><strong>LORCA, Federico García.</strong> <em>Romance da lua.</em> Tradução de Amelinha. In: <em>Romanceiro cigano.</em> [S. l.: s. n.], 1983.</li>
                                                    <li class="list-group-item"><strong>MACÊDO, Sara.</strong> Romanipen nas margens: o triângulo marrom, diáspora e a movimentação de mulheres romani. In: SAMYN, Henrique Marques; ARAO, Lina (org.). <em>Feminismos dissidentes: perspectivas interseccionais.</em> São Paulo: Jandaíra, 2021. p. 101-115.</li>
                                                    <li class="list-group-item"><strong>MARTINEZ, Nicole.</strong> <em>Os ciganos.</em> Campinas, SP: Papirus, 1989.</li>
                                                    <li class="list-group-item"><strong>MELLO, Marco Antonio da Silva; VEIGA, Felipe Berocan.</strong> <em>Os ciganos e as políticas de reconhecimento: desafios contemporâneos.</em> Rio de Janeiro: Associação Brasileira de Antropologia; IFCS-UFRJ, 2020.</li>
                                                    <li class="list-group-item"><strong>MENINI, Natally Chris da Rocha.</strong> Do Reino para o ultramar: o degredo dos ciganos no Império Português. In: ENCONTRO REGIONAL DE HISTÓRIA DA ANPUH-RIO, 16., 2014, Rio de Janeiro. <em>Anais [...]: saberes e práticas científicas.</em> Rio de Janeiro: Casa de Oswaldo Cruz; Fiocruz, 2014. Disponível em: <a href="http://www.encontro2014.rj.anpuh.org/resources/anais/28/1400554747_ARQUIVO_ARTIGOANPUH-NATALLYMENINI.pdf" target="_blank" rel="noopener noreferrer">http://www.encontro2014.rj.anpuh.org/resources/anais/28/1400554747_ARQUIVO_ARTIGOANPUH-NATALLYMENINI.pdf</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item"><strong>MONTEIRO, E. N. J.; GOLDFARB, M. P. L.; MONTEIRO, R. J.; FERREIRA, H. C. O.</strong> Entre os caminhos e as rotas dos ciganos do Vale do Mamanguape. In: REUNIÃO BRASILEIRA DE ANTROPOLOGIA, 29., 2014, Natal, RN. <em>Anais [...].</em> Natal, RN: Associação Brasileira de Antropologia, 2014. Disponível em: <a href="http://www.29rba.abant.org.br/resources/anais/1/1402015556_ARQUIVO_RBAFINA" target="_blank" rel="noopener noreferrer">http://www.29rba.abant.org.br/resources/anais/1/1402015556_ARQUIVO_RBAFINA</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item"><strong>MOONEN, Frans.</strong> <em>Anticiganismo: os ciganos na Europa e no Brasil.</em> Recife, PE: [s. n.], 2011. Disponível em: <a href="http://www.dhnet.org.br/direitos/sos/ciganos/a_pdf/1_fmanticiganismo2011" target="_blank" rel="noopener noreferrer">http://www.dhnet.org.br/direitos/sos/ciganos/a_pdf/1_fmanticiganismo2011</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item"><strong>MORAES FILHO, Mello.</strong> <em>Os ciganos no Brasil e cancioneiro dos ciganos.</em> Belo Horizonte: Itatiaia; São Paulo: Editora da Universidade de São Paulo, 1981. (Coleção Reconquista do Brasil, 59). A autoria e os dados editoriais aparecem também em catálogos bibliográficos e referências acadêmicas.</li>
                                                    <li class="list-group-item"><strong>NIETZSCHE, Friedrich.</strong> <em>Além do bem e do mal.</em> São Paulo: Companhia das Letras, 1998.</li>
                                                    <li class="list-group-item"><strong>NIETZSCHE, Friedrich.</strong> <em>Assim falou Zaratustra.</em> São Paulo: Martin Claret, 2007.</li>
                                                    <li class="list-group-item"><strong>PARMÊNIDES.</strong> <em>Sobre a natureza.</em> Tradução e comentário de Alípio de Medeiros. São Paulo: Edusp, 2007.</li>
                                                    <li class="list-group-item"><strong>PLATÃO.</strong> <em>Apologia de Sócrates.</em> Tradução e comentário de Adauto Novaes. São Paulo: Edusp, 2002.</li>
                                                    <li class="list-group-item"><strong>PLATÃO.</strong> <em>O banquete.</em> Tradução e comentário de Renato Janine Ribeiro. São Paulo: Edusp, 1995.</li>
                                                    <li class="list-group-item"><strong>SARTRE, Jean-Paul.</strong> <em>O ser e o nada.</em> São Paulo: Abril Cultural, 1987.</li>
                                                    <li class="list-group-item"><strong>SILVA, Rosana Maria Ferreira da.</strong> <em>O olhar de si e o olhar dos outros: um itinerário através das tradições e da identidade cigana.</em> 2011. 222 f. Dissertação (Mestrado em Ciências Sociais) – Pontifícia Universidade Católica do Rio Grande do Sul, Porto Alegre, 2011. Disponível em: <a href="https://tede2.pucrs.br/tede2/handle/tede/2410" target="_blank" rel="noopener noreferrer">https://tede2.pucrs.br/tede2/handle/tede/2410</a>. Acesso em: 26 mar. 2025.</li>
                                                    <li class="list-group-item"><strong>SILVA JÚNIOR, Aluízio de Azevedo.</strong> <em>A liberdade na aprendizagem ambiental cigana dos mitos e ritos Kalon.</em> 2009. 267 p. Dissertação (Mestrado em Educação) – Instituto de Educação, Universidade Federal de Mato Grosso, Cuiabá, 2009.</li>
                                                    <li class="list-group-item"><strong>SILVA JÚNIOR, Aluízio de Azevedo.</strong> <em>Ciganos em Portugal, Espanha e Brasil: analisando contextos, demandas e processos identitários. Será possível a decolonização dos Estudos Ciganos? Um ensaio sobre a relação ciganos e ciência.</em> 2020. Disponível em: <a href="https://repositorio.iscte-iul.pt/handle/10071/21055" target="_blank" rel="noopener noreferrer">https://repositorio.iscte-iul.pt/handle/10071/21055</a>. Acesso em: 29 abr. 2021.</li>
                                                    <li class="list-group-item"><strong>SILVA JÚNIOR, Aluízio de Azevedo.</strong> <em>Produção social dos sentidos em processos interculturais de comunicação e saúde: a apropriação das políticas públicas de saúde para ciganos no Brasil e em Portugal.</em> 2018. 504 f. Tese (Doutorado em Informação e Comunicação em Saúde) – Instituto de Comunicação e Informação Científica e Tecnológica em Saúde, Fundação Oswaldo Cruz, Rio de Janeiro, 2018.</li>
                                                    <li class="list-group-item"><strong>TYLOR, Edward Burnett.</strong> <em>Primitive culture: researches into the development of mythology, philosophy, religion, language, art and custom.</em> London: John Murray, 1871.</li>
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
                                                    <li class="list-group-item">APARICIO GERVÁS, Jesús María; TILLEY BILBAO, Charles David. Ciganos e educação: um desafio para a construção da sociedade espanhola do século XXI. <em>OPSIS</em>, Goiânia, v. 14, n. 2, p. 240-254, jul./dez. 2014. DOI: <a href="https://doi.org/10.5216/o.v14i2.30132" target="_blank" rel="noopener noreferrer">https://doi.org/10.5216/o.v14i2.30132</a>. Disponível em: <a href="https://periodicos.ufcat.edu.br/index.php/Opsis/article/view/30132" target="_blank" rel="noopener noreferrer">https://periodicos.ufcat.edu.br/index.php/Opsis/article/view/30132</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">AURÉLIO. <em>Dicionário eletrônico Aurélio da língua portuguesa</em>. Rio de Janeiro, 2024. Disponível em: <a href="https://www.dicio.com.br/cigano/" target="_blank" rel="noopener noreferrer">https://www.dicio.com.br/cigano/</a>. Acesso em: out. 2024.</li>
                                                    <li class="list-group-item">BRASIL DE FATO. Ciganos no Brasil: uma história de múltiplas discriminações, invisibilidade e ódio. <em>Brasil de Fato</em>, 7 out. 2021. Disponível em: <a href="https://www.brasildefato.com.br/2021/10/07/ciganos-no-brasil-uma-historia-de-multiplas-discriminacoes-invisibilidade-e-odio" target="_blank" rel="noopener noreferrer">https://www.brasildefato.com.br/2021/10/07/ciganos-no-brasil-uma-historia-de-multiplas-discriminacoes-invisibilidade-e-odio</a>. Acesso em: 30 nov. 2024.</li>
                                                    <li class="list-group-item">COUTO, Laise Duarte. <em>A ascensão antidemocrática na atualidade: aspectos históricos e constitucionais</em>. Salvador: Defensoria Pública do Estado da Bahia, 2022. Disponível em: <a href="https://www.defensoria.ba.def.br/wp-content/uploads/2022/04/A-ascensao-antidemocratica-na-atualidade-aspectos-historicos.pdf" target="_blank" rel="noopener noreferrer">https://www.defensoria.ba.def.br/wp-content/uploads/2022/04/A-ascensao-antidemocratica-na-atualidade-aspectos-historicos.pdf</a>. Acesso em: 30 nov. 2024.</li>
                                                    <li class="list-group-item">CENTRO DE REFERÊNCIAS EM EDUCAÇÃO INTEGRAL. Educação de ciganos no Brasil é marcada por preconceito e exclusão. <em>Centro de Referências em Educação Integral</em>, [s. d.]. Disponível em: <a href="https://educacaointegral.org.br/reportagens/educacao-de-ciganos-no-brasil-marcada-preconceito-e-exclusao/" target="_blank" rel="noopener noreferrer">https://educacaointegral.org.br/reportagens/educacao-de-ciganos-no-brasil-marcada-preconceito-e-exclusao/</a>. Acesso em: 30 nov. 2024.</li>
                                                    <li class="list-group-item">FANON, Frantz. <em>Pele negra, máscaras brancas</em>. 1952. Disponível em: <a href="https://edisciplinas.usp.br/pluginfile.php/8269273/mod_resource/content/1/FANON_PELES%20NEGRAS%20MASCARAS%20BRANCAS.pdf" target="_blank" rel="noopener noreferrer">https://edisciplinas.usp.br/pluginfile.php/8269273/mod_resource/content/1/FANON_PELES%20NEGRAS%20MASCARAS%20BRANCAS.pdf</a>. Acesso em: set. 2024.</li>
                                                    <li class="list-group-item">FONSECA, Isabel Allende. <em>Enterrem-me de pé: os ciganos e suas jornadas</em>. Tradução de Paula Reis. Lisboa: Editorial Teorema, 2003.</li>
                                                    <li class="list-group-item">HOOKS, bell. <em>Olhares negros: raça e representação</em>. 1992. Disponível em: <a href="https://cpdel.ifcs.ufrj.br/wp-content/uploads/2020/10/bell-hooks-Olhares-Negros.pdf" target="_blank" rel="noopener noreferrer">https://cpdel.ifcs.ufrj.br/wp-content/uploads/2020/10/bell-hooks-Olhares-Negros.pdf</a>. Acesso em: set. 2024.</li>
                                                    <li class="list-group-item">HOUAISS, Antônio. <em>Dicionário eletrônico Houaiss da língua portuguesa</em>. Rio de Janeiro: Objetiva, 2009.</li>
                                                    <li class="list-group-item">HUGO, Victor. <em>Notre-Dame de Paris</em>. Tradução de M. de S. Costa. São Paulo: Editora XYZ, 2010.</li>
                                                    <li class="list-group-item">LOCATELLI, Moacir Antônio. <em>O caso de uma cultura: uma análise antropológica dos ciganos</em>. Santa Rosa: Barreto Livreiro e Editor, 1981. p. 32.</li>
                                                    <li class="list-group-item">MACHADO DE ASSIS. <em>Obra completa</em>. Rio de Janeiro: Nova Aguilar, 1994.</li>
                                                    <li class="list-group-item">MORAES FILHO, Mello. <em>Os ciganos no Brasil e cancioneiro dos ciganos</em>. Belo Horizonte: Itatiaia, 1981.</li>
                                                    <li class="list-group-item">NIETZSCHE, Friedrich. Sobre verdade e mentira no sentido extramoral. In: NIETZSCHE, Friedrich. <em>Vida e obra</em>. Tradução de Rubens Rodrigues Torres Filho. São Paulo: Nova Cultural, 1983. (Os Pensadores).</li>
                                                    <li class="list-group-item">PARANÁ. Departamento da Diversidade. Coordenação Escolar do Campo, Indígena e Cigana. <em>Os povos ciganos e o direito à educação básica</em>. Curitiba: Secretaria de Estado da Educação do Paraná, 2017. Disponível em: <a href="http://www.educadores.diaadia.pr.gov.br/arquivos/File/formacao_acao/2semestre2017/ciganos.pdf" target="_blank" rel="noopener noreferrer">http://www.educadores.diaadia.pr.gov.br/arquivos/File/formacao_acao/2semestre2017/ciganos.pdf</a>. Acesso em: 30 nov. 2024.</li>
                                                    <li class="list-group-item">ROCHA, Islânia Lima; PINHO, Luana Cavalcante; SANTOS, Bárbara Bento. A inserção do pensamento conservador no Brasil e seus reflexos no enfrentamento às expressões da “questão social”. In: ENCONTRO NACIONAL DE PESQUISADORES EM SERVIÇO SOCIAL, 16., [s. d.]. <em>Anais [...].</em> Disponível em: <a href="https://periodicos.ufes.br/abepss/article/view/22679/15161" target="_blank" rel="noopener noreferrer">https://periodicos.ufes.br/abepss/article/view/22679/15161</a>. Acesso em: 30 nov. 2024.</li>
                                                    <li class="list-group-item">SPINOZA, Baruch. <em>Ética</em>. Tradução de Marilena Chauí. São Paulo: Companhia das Letras, 2002.</li>
                                                    <li class="list-group-item">VARIKAS, Eline. Os refugos do mundo: figuras do pária. <em>Estudos Avançados</em>, São Paulo, 2010. Disponível em: <a href="https://www.scielo.br/j/ea/a/4Yn6WvZNKZjGyDm5Ddxyg3N/" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/ea/a/4Yn6WvZNKZjGyDm5Ddxyg3N/</a>. Acesso em: nov. 2024.</li>
                                                    <li class="list-group-item">VASCONCELOS, Marcia; RIBEIRO, José; COSTA, Elisa. <em>Dados oficiais sobre os povos romani (ciganos) no Brasil: 2013</em>. Brasília, DF: AMSK/Brasil, 2013. Disponível em: <a href="https://www.amsk.org.br/imagem/publicacao/Publicacao1_AMSK_2013.pdf" target="_blank" rel="noopener noreferrer">https://www.amsk.org.br/imagem/publicacao/Publicacao1_AMSK_2013.pdf</a>. Acesso em: 21 set. 2026.</li>
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
                                                    <li class="list-group-item">BRASIL. Secretaria de Políticas de Promoção da Igualdade Racial. <em>Brasil Cigano: guia de políticas públicas para povos ciganos</em>. Brasília, DF: Secretaria de Políticas de Promoção da Igualdade Racial, 2013.</li>
                                                    <li class="list-group-item">FECHT, Daniel; COCKINGS, Samantha; HODGSON, Susan; PIEL, Frederic B.; MARTIN, David; WALLER, Lance A. Advances in mapping population and demographic characteristics at small-area levels. <em>International Journal of Epidemiology</em>, [S. l.], v. 49, n. 1, p. i15-i25, 2020.</li>
                                                    <li class="list-group-item">HAESBAERT, Rogério. <em>O mito da desterritorialização: do “fim dos territórios” à multiterritorialidade</em>. Rio de Janeiro: Bertrand Brasil, 2004.</li>
                                                    <li class="list-group-item">HAESBAERT, Rogério. A global sense of place and multi-territoriality: notes for dialogue from a “peripheral” point of view. In: FEATHERSTONE, David; PAINTER, Joe (ed.). <em>Spatial politics: essays for Doreen Massey</em>. Oxford: Wiley-Blackwell, 2013. p. 146-157.</li>
                                                    <li class="list-group-item">HARDWICK, Susan. Place, space, and pattern: geographical theories in international migration. In: BRETTELL, Caroline B.; HOLLIFIELD, James F. (ed.). <em>Migration theory: talking across disciplines</em>. 2. ed. New York: Routledge, 2008. p. 161-182.</li>
                                                    <li class="list-group-item">IBGE – INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. <em>Censo 2022: panorama</em>. Rio de Janeiro: IBGE, 2022. Disponível em: <a href="https://censo2022.ibge.gov.br/panorama/" target="_blank" rel="noopener noreferrer">https://censo2022.ibge.gov.br/panorama/</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">IBGE – INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. <em>MUNIC: Pesquisa de Informações Básicas Municipais 2013</em>. Rio de Janeiro: IBGE, 2013. Disponível em: <a href="https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?view=detalhes&amp;id=287957&amp;utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Biblioteca do IBGE</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">KALAYDJIEVA, Luba; GRESHAM, David; CALAFELL, Francesc. Genetic studies of the Roma (Gypsies): a review. <em>BMC Medical Genetics</em>, London, v. 2, art. 5, 2001. Disponível em: <a href="https://bmcmedgenet.biomedcentral.com/articles/10.1186/1471-2350-2-5?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">BMC Medical Genetics</a>. Acesso em: 21 set. 2026.</li>
                                                    <li class="list-group-item">LEVITT, Peggy. Transnational migrants: when “home” means more than one country. <em>Migration Policy Institute</em>, Washington, DC, 2004.</li>
                                                    <li class="list-group-item">PAINTER, Joe. Territory-network. In: <em>ASSOCIATION OF AMERICAN GEOGRAPHERS ANNUAL MEETING</em>, 2006, Chicago. <em>Anais [...].</em> Chicago: Association of American Geographers, 2006.</li>
                                                    <li class="list-group-item">REDE INTERAGENCIAL DE INFORMAÇÕES PARA A SAÚDE. <em>Demografia e saúde: contribuição para análise de situação e tendências</em>. Brasília, DF: Organização Pan-Americana da Saúde, 2009.</li>
                                                    <li class="list-group-item">SCHENSUL, Jean J.; LECOMPTE, Margaret D. <em>Essential ethnographic methods: a mixed methods approach</em>. Lanham: AltaMira Press, 2012.</li>
                                                    <li class="list-group-item">SILVA JÚNIOR, Aluízio de Azevedo. <em>Produção social dos sentidos em processos interculturais de comunicação e saúde: a apropriação das políticas públicas de saúde para ciganos no Brasil e em Portugal</em>. 2018. Tese (Doutorado em [área não informada]) – Fundação Oswaldo Cruz, Instituto de Comunicação e Informação Científica e Tecnológica em Saúde, Rio de Janeiro, 2018.</li>
                                                    <li class="list-group-item">SILVERMAN, Carol. <em>Romani routes: cultural politics &amp; Balkan music in diaspora</em>. New York: Oxford University Press, 2012.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula5" aria-expanded="false" aria-controls="collapse-m1-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m1-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><strong>ALMEIDA, M. G. De.</strong> Diáspora: Viver entre-territórios e entre-culturas? In: SAQUET, M. A.; SPOSITO, E. S. (Orgs.). <em>Territórios e Territorialidades: Teorias, processos e conflitos</em>. São Paulo: Expressão Popular, 2009.</li>
                                                    <li class="list-group-item"><strong>AZEVEDO, A. De.</strong> <em>A liberdade na aprendizagem ambiental cigana dos mitos e ritos kalon</em>. 2009. 271 f. Dissertação de mestrado (PROGRAMA DE PÓS-GRADUAÇÃO EM EDUCAÇÃO) - UNIVERSIDADE FEDERAL DE MATO GROSSO, [S. l.], 2009. Disponível em: <a href="http://livros01.livrosgratis.com.br/cp100264.pdf" target="_blank" rel="noopener noreferrer">http://livros01.livrosgratis.com.br/cp100264.pdf</a>. Acesso em: 25 ago. 2024.</li>
                                                    <li class="list-group-item"><strong>BISPO, Nego.</strong> A difícil arte da confluência. <em>Culturgest</em>, [S. l.], p. 1-1, 28 out. 2020. Disponível em: <a href="https://www.culturgest.pt/pt/media/dificil-arte-da-confluencia/#nos-terra" target="_blank" rel="noopener noreferrer">https://www.culturgest.pt/pt/media/dificil-arte-da-confluencia/#nos-terra</a>. Acesso em: 4 nov. 2023.</li>
                                                    <li class="list-group-item"><strong>BHABHA, Homi K.</strong> <em>O Local da Cultura</em>. Belo Horizonte: Ed. UFMG, 2005.</li>
                                                    <li class="list-group-item"><strong>FIGUEIREDO et al., Marcilânia Gomes Alcântara.</strong> "NADA DE NÓS, SEM NÓS!": AS ANDANÇAS E LUTAS DA COMUNIDADE CIGANA CALON NO ALTO SERTÃO DA PARAÍBA. <em>Territórios de identidade e políticas públicas: perspectivas teóricas, relatos e experiências no enfretamento à COVID-19 com comunidades e movimentos sociais</em>: Grupo de Trabalho Cigano, Apoio Editorial, p. 33-38, 31 ago. 2022. Disponível em: <a href="https://www.researchgate.net/profile/Jose-Ferreira-8/publication/365051146_Territorios_de_Identidade_e_politicas_publicas_perspectivas_teoricas_relatos_de_experiencias_no_enfrentamento_a_COVID-19_com_comunidades_e_movimentos_sociais/links/6363faed2f4bca7fd02b3835/Territorios-de-Identidade-e-politicas-publicas-perspectivas-teoricas-relatos-de-experiencias-no-enfrentamento-a-COVID-19-com-comunidades-e-movimentos-sociais.pdf#page=33" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/.../Territorios-de-Identidade-e-politicas-publicas...pdf#page=33</a>. Acesso em: 2 maio 2024.</li>
                                                    <li class="list-group-item"><strong>GUIMARAIS, Marcos Toyansk Silva.</strong> <em>O associativismo transnacional cigano: identidades, diásporas e territórios</em>. 2012. Tese (Doutorado em Geografia Humana) - Faculdade de Filosofia, Letras e Ciências Humanas, Universidade de São Paulo, São Paulo, 2012. doi:10.11606/T.8.2012.tde-22022013-124150. Acesso em: 26 ago. 2024.</li>
                                                    <li class="list-group-item"><strong>HANCOCK, Ian.</strong> <em>We are the romani people</em>. University. Hertfordshire Press, 2012.</li>
                                                    <li class="list-group-item"><strong>HAESBAERT, Rogério.</strong> Território(s) numa perspectiva latino-americana. In: <em>Journal of Latin American Geography</em>, Volume 19, Number 1, January 2020a.</li>
                                                    <li class="list-group-item"><strong>HARVEY, David.</strong> <em>Os limites do capital</em>. São Paulo: Boitempo, 2013a.</li>
                                                    <li class="list-group-item"><strong>JÚNIOR, Aluízio de Azevedo Silva; TOYANSK, Marcos.</strong> SAÚDE DAS COMUNIDADES CIGANAS NO BRASIL: CONTEXTOS E POLÍTICAS PÚBLICAS. <em>REVISTA DO CENTRO DE PESQUISA E FORMAÇÃO</em>, n. 10, agosto, 2020.</li>
                                                    <li class="list-group-item"><strong>LESSA, Luma; NUÑEZ, Geni.</strong> Luta e pensamento anticolonial: Uma entrevista com Geni Núñez. <em>Revista Epistemologias do Sul: Feminismos latino-americanos, ativismos e insurgências – Parte 1</em>, [s. l.], v. 5, ed. 2, 17 maio 2022. Disponível em: <a href="https://revistas.unila.edu.br/epistemologiasdosul/article/view/3482" target="_blank" rel="noopener noreferrer">https://revistas.unila.edu.br/epistemologiasdosul/article/view/3482</a>. Acesso em: 11 ago. 2024.</li>
                                                    <li class="list-group-item"><strong>MACÊDO DE PAULA, Sara.</strong> Elipse territorial: encruzilhadas do direito na movimentação dos povos Calón no Brasil. <em>XIV Reunião de Antropologia do Mercosul: reconexões e desafios a partir do sul global</em>: [livro eletrônico]: anais eletrônicos / coordenação Renata de Sá Gonçalves, Deborah Bronz, Felipe Berocan Veiga., São Paulo, ano 2023, 20 set. 2023. ISBN 978-65-993851-8-6. Disponível em: <a href="https://www.ram2023.sinteseeventos.com.br/anais/trabalhos/lista?simposio=231#S" target="_blank" rel="noopener noreferrer">https://www.ram2023.sinteseeventos.com.br/anais/trabalhos/lista?simposio=231#S</a>. Acesso em: 2 set. 2024.</li>
                                                    <li class="list-group-item"><strong>MACÊDO DE PAULA, S.; JOSÉ FERREIRA, A.</strong> A identidade transnacional Romani: território vivido, marginalidade e diáspora. <em>Ateliê Geográfico</em>, Goiânia, v. 16, n. 2, p. 221–243, 2022. DOI: 10.5216/ag.v16i2.68831. Disponível em: <a href="https://revistas.ufg.br/atelie/article/view/68831" target="_blank" rel="noopener noreferrer">https://revistas.ufg.br/atelie/article/view/68831</a>. Acesso em: 26 set. 2024.</li>
                                                    <li class="list-group-item"><strong>MEDEIROS, Jéssica Cunha de; BATISTA, Mércia Rejane Rangel.</strong> Nomadismo e Diáspora: sugestões para se estudar os ciganos. <em>Revista ANTHROPOLÓGICAS</em>, [s. l.], 25 ago. 2015. Disponível em: <a href="https://periodicos.ufpe.br/revistas/revistaanthropologicas/article/viewFile/23910/19465" target="_blank" rel="noopener noreferrer">https://periodicos.ufpe.br/revistas/revistaanthropologicas/article/viewFile/23910/19465</a>. Acesso em: 29 nov. 2020.</li>
                                                    <li class="list-group-item"><strong>NUÑEZ, Geni.</strong> Opinião - Geni Nuñez: O pecado do nomadismo e seus marcos culturais. <em>Liga Democrática</em>, [S. l.], p. 1-1, 7 maio 2023. Disponível em: <a href="https://ligademocratica.com/publicacao/306665/opiniao-geni-nunez-o-pecado-do-nomadismo-e-seus-marcos-culturais.htm" target="_blank" rel="noopener noreferrer">https://ligademocratica.com/publicacao/306665/opiniao-geni-nunez-o-pecado-do-nomadismo-e-seus-marcos-culturais.htm</a>. Acesso em: 28 maio 2023.</li>
                                                    <li class="list-group-item"><strong>O QUE é folclore?</strong> por Edson Kayapó. [S. l.: s. n.], 2020. Disponível em: <a href="https://www.youtube.com/watch?v=ZiXNbC3Z9Ss" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=ZiXNbC3Z9Ss</a>. Acesso em: 12 dez. 2020.</li>
                                                    <li class="list-group-item"><strong>O TRADUTOR do pensamento mágico.</strong> <em>Revista Cult</em>, [S. l.], p. 1-1, 4 nov. 2019. Disponível em: <a href="https://revistacult.uol.com.br/home/ailton-krenak-entrevista/" target="_blank" rel="noopener noreferrer">https://revistacult.uol.com.br/home/ailton-krenak-entrevista/</a>. Acesso em: 6 fev. 2024.</li>
                                                    <li class="list-group-item"><strong>SCHOLZ, Roswitha.</strong> <em>Homo Sacer e os ciganos: o anticiganismo – reflexões sobre uma variante essencial e por isso esquecida do racismo moderno</em>. Lisboa: Antígona, 2014.</li>
                                                    <li class="list-group-item"><strong>THOMPSON, E.P.</strong> <em>Costumes em comum: estudos sobre a cultura popular tradicional</em>. São Paulo: Companhia das Letras, 1998.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula6" aria-expanded="false" aria-controls="collapse-m1-aula6">Aula 6</button>
                                    <div id="collapse-m1-aula6" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula6" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><strong>AIRES, Raquel Henrique; TELES, Glauciana Alves.</strong> Um estudo geográfico sobre o saneamento básico em Sobral‐CE. <em>Revista OKARA: Geografia em debate</em>, v. 15, n. 2, p. 265-277, 2021. ISSN: 1982-3878.</li>
                                                    <li class="list-group-item"><strong>AYACH, Lucy R.; GUIMARÃES, Solange T. L.; CAPPI, Nanci; AYACH, Carlos.</strong> Saúde, saneamento e percepção de riscos ambientais urbanos. <em>Caderno de Geografia</em>, v. 22, n. 37, 2012.</li>
                                                    <li class="list-group-item"><strong>DOLABELA, Helena.</strong> Ciganos como povos e comunidades tradicionais: reconhecimento e direitos territoriais. <em>Civitas</em>, v. 23, p. 1-12, jan.-dez. 2023 | e-43113.</li>
                                                    <li class="list-group-item"><strong>FIOCRUZ.</strong> Comunidades ciganas sofrem preconceito, desabastecimento de energia e especulação imobiliária. In: <em>Mapa de Conflitos envolvendo Injustiça Ambiental e Saúde no Brasil</em>. Disponível em: <a href="https://mapadeconflitos.ensp.fiocruz.br/conflito/comunidades-ciganas-sofrem-compreconceito-desabastecimento-de-energia-e-especulacao-imobiliaria/" target="_blank" rel="noopener noreferrer">https://mapadeconflitos.ensp.fiocruz.br/conflito/comunidades-ciganas-sofrem-compreconceito-desabastecimento-de-energia-e-especulacao-imobiliaria/</a>. Acesso em: 3 nov. 2024.</li>
                                                    <li class="list-group-item"><strong>FIOCRUZ.</strong> Ciganos lutam por regularização fundiária em favor da comunidade Calon, do bairro São Gabriel. In: <em>Mapa de Conflitos envolvendo Injustiça Ambiental e Saúde no Brasil</em>. Disponível em: <a href="https://mapadeconflitos.ensp.fiocruz.br/conflito/mg-ciganos-lutam-por-regularizacao-fundiaria-em-favor-da-comunidade-calon-do-bairro-sao-gabriel/#:~:text=No%20dia%2019%20de%20dezembro,%C3%A9%20conclu%C3%ADdo%20o%20processo%20de" target="_blank" rel="noopener noreferrer">https://mapadeconflitos.ensp.fiocruz.br/conflito/mg-ciganos-lutam-por-regularizacao-fundiaria-em-favor-da-comunidade-calon-do-bairro-sao-gabriel/</a>. Acesso em: 3 nov. 2024.</li>
                                                    <li class="list-group-item"><strong>FRANCO, A. O.; PEREIRA, J. S.; MESQUITA, A. A.; SERRANO, R. O. P.; FARIAS, C. S. F.; MOREIRA, J. G. V.</strong> Saúde e saneamento básico: algumas reflexões. <em>UÁQUIRI - Revista do Programa de Pós-Graduação em Geografia</em>, v. 06, n. 01, p. 92-106, 2024.</li>
                                                    <li class="list-group-item"><strong>FUNDAÇÃO EUROPEIA PARA A MELHORIA DAS CONDIÇÕES DE VIDA E TRABALHO.</strong> <em>Condições de vida das pessoas de etnia cigana: habitação e saúde precárias</em>, 2021.</li>
                                                    <li class="list-group-item"><strong>LEONETI, A. B.; PRADO, E. L. do; OLIVEIRA, S. V. W. B.</strong> Saneamento básico no Brasil: considerações sobre investimentos e sustentabilidade para o século XXI. <em>Revista de Administração Pública</em>, FGV, Rio de Janeiro, v. 45, n. 2, p. 331-348, mar./abr. 2011.</li>
                                                    <li class="list-group-item"><strong>ORGANIZAÇÃO DAS NAÇÕES UNIDAS.</strong> <em>Seminario regional sobre la situación del Pueblo Rom en las Américas</em>. Consejo de Derechos Humanos, 2016.</li>
                                                    <li class="list-group-item"><strong>PEREIRA, Izete Soares da Silva Dantas; CARVALHO, Fabiana Lúcia da Silva; PEREIRA, João Dantas.</strong> Famílias Ciganas: um estudo sobre suas condições de vida. <em>Revista Interface</em>, v. 16, n. 2, jul./dez. 2019. ISSN 2237-7506.</li>
                                                    <li class="list-group-item"><strong>RODRIGUES, Karla Cristina Tyskowski Teodoro.</strong> <em>Estrutura do saneamento básico no Brasil: receita, dispêndio de gastos e atenção básica à saúde</em>. 2020. Tese (Doutorado em Desenvolvimento Regional e Agronegócio) – Universidade Estadual do Oeste do Paraná, 2020.</li>
                                                    <li class="list-group-item"><strong>SANTOS, Helaine M. N.</strong> <em>Saneamento e saúde ambiental em Araguari-MG</em>. 2014. Tese (Doutorado em Geografia) – Programa de Pós-Graduação em Geografia, Universidade Federal de Uberlândia, 2014.</li>
                                                    <li class="list-group-item"><strong>SILVA JÚNIOR, Aluízio de Azevedo; AMORIM, Priscilla Mona de.</strong> Natureza, povos ciganos e justiça climática: relações interculturais e ambientais. <em>Revista Ambiente &amp; Educação</em>, Programa de Pós-Graduação em Educação Ambiental – PPGEA/FURG, v. 27, n. 2, dez. 2022.</li>
                                                    <li class="list-group-item"><strong>SIQUEIRA, R. A.</strong> <em>Os Calon do município de Sousa-PB: dinâmicas ciganas e transformações culturais</em>. 2012. Dissertação (Mestrado em Antropologia) – Programa de Pós-Graduação em Antropologia, CFCH, Universidade Federal de Pernambuco, 2012.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula7">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula7" aria-expanded="false" aria-controls="collapse-m1-aula7">Aula 7</button>
                                    </h5>
                                    <div id="collapse-m1-aula7" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula7" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><strong>BHABHA, Homi K.</strong> <em>O Local da Cultura</em>. Belo Horizonte: Ed. UFMG, 2005.</li>
                                                    <li class="list-group-item"><strong>BRASIL.</strong> [Constituição (1988)]. <em>Constituição da República Federativa do Brasil de 1988</em>. Brasília, DF: Presidente da República, [2024].</li>
                                                    <li class="list-group-item"><strong>BRASIL.</strong> <em>Decreto nº 8.750, de 9 de maio de 2016</em>. Institui o Conselho Nacional dos Povos e Comunidades Tradicionais. Brasília, DF: Presidência da República, [2016]. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8750.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8750.htm</a>. Acesso em: 15 jul. 2026.</li>
                                                    <li class="list-group-item"><strong>BRASIL.</strong> <em>Lei nº 8.080, de 19 de setembro de 1990</em>. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. Brasília, DF: Presidência da República, [1990]. Disponível em: <a href="http://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">http://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a>. Acesso em: 15 jul. 2026.</li>
                                                    <li class="list-group-item"><strong>BRASIL. Ministério da Saúde.</strong> <em>Portaria de Consolidação nº 1, de 28 de setembro de 2017</em>. Consolidação das normas sobre os direitos e deveres dos usuários da saúde, a organização e o funcionamento do Sistema Único de Saúde. Brasília, DF: Ministério da Saúde, 2017. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0001_03_10_2017.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0001_03_10_2017.html</a>. Acesso em: 15 jul. 2026.</li>
                                                    <li class="list-group-item"><strong>DECRETO nº 6.040, de 7 de fevereiro 2007.</strong> Institui a Política Nacional de Desenvolvimento Sustentável dos Povos e Comunidades Tradicionais. Disponível em: <a href="http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6040.htm" target="_blank" rel="noopener noreferrer">http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6040.htm</a>. Acesso em: 02 out. 2024.</li>
                                                    <li class="list-group-item"><strong>DECRETO nº 5.051, de 19 de abril de 2004.</strong> Promulga a Convenção nº 169 da Organização Internacional do Trabalho - OIT sobre Povos Indígenas e Tribais. Disponível em: <a href="http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5051.htm" target="_blank" rel="noopener noreferrer">http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5051.htm</a>. Acesso em: 02 out. 2024.</li>
                                                    <li class="list-group-item"><strong>GUIMARAIS, Marcos Toyansk Silva.</strong> <em>O associativismo transnacional cigano: identidades, diásporas e territórios</em>. 2012. Tese (Doutorado em Geografia Humana) - Faculdade de Filosofia, Letras e Ciências Humanas, Universidade de São Paulo, São Paulo, 2012. doi:10.11606/T.8.2012.tde-22022013-124150. Acesso em: 26 ago. 2024.</li>
                                                    <li class="list-group-item"><strong>MACEDO, S. P.</strong> “Feito de guerra”, o instituto da execução sumária: uma faceta violenta do direito no massacre em Pau D’Arco. 2021. 113 f. Dissertação (Mestrado em Direito Agrário) - Universidade Federal de Goiás, Goiânia, 2021.</li>
                                                    <li class="list-group-item"><strong>MACÊDO DE PAULA, S.; JOSÉ FERREIRA, A.</strong> A identidade transnacional Romani: território vivido, marginalidade e diáspora. <em>Ateliê Geográfico</em>, Goiânia, v. 16, n. 2, p. 221–243, 2022. DOI: 10.5216/ag.v16i2.68831. Disponível em: <a href="https://revistas.ufg.br/atelie/article/view/68831" target="_blank" rel="noopener noreferrer">https://revistas.ufg.br/atelie/article/view/68831</a>. Acesso em: 26 set. 2024.</li>
                                                    <li class="list-group-item"><strong>MOONEN, Frans.</strong> <em>Anticiganismo e políticas ciganas na Europa e no Brasil</em>. Recife: Dhnet, 2013.</li>
                                                    <li class="list-group-item"><strong>SILVA JÚNIOR, Aluízio de Azevedo.</strong> <em>Produção social dos sentidos em processos interculturais de comunicação e saúde: a apropriação das políticas públicas de saúde para ciganos no Brasil e em Portugal</em>. 2018. 504 f. Tese (Doutorado em Informação e Comunicação em Saúde) - Instituto de Comunicação e Informação Científica e Tecnológica em Saúde, Fundação Oswaldo Cruz, Rio de Janeiro, 2018.</li>
                                                    <li class="list-group-item"><strong>TOURINHO, Eduardo.</strong> Os primeiros ciganos na Bahia e no Rio de Janeiro. Disponível em: <a href="http://jangadabrasil.com.br/revista/marco76/pa76003b.asp" target="_blank" rel="noopener noreferrer">http://jangadabrasil.com.br/revista/marco76/pa76003b.asp</a>. Acesso em: 7 out. 2024.</li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula4" aria-expanded="false" aria-controls="collapse-m2-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m2-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula4" data-bs-parent="">
                                        <div class="accordion-body">
										    <div class="list mb-5">
										        <ul class="list-group">
										            <li class="list-group-item">AZEVEDO SILVA JÚNIOR, Aluízio de; TOYANSK, Marcos. Saúde das comunidades ciganas no Brasil: contextos e políticas públicas. Revista do Centro de Pesquisa e Formação, n. 10, ago. 2020.</li>

										            <li class="list-group-item">COSTA, Elisa; JUAREZ ROLIM, José Daniel. Redução das desigualdades em saúde nas comunidades ciganas no Brasil: subsídios para discussão. 1. ed. Brasília, DF: AMSK/Brasil, 2014.</li>

										            <li class="list-group-item">GUIMARAIS, M. T. S. O associativismo transnacional cigano: identidades, diásporas e territórios. 2012. 231 f. Tese (Doutorado em Geografia) – Departamento de Geografia da Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo, São Paulo (SP), 2012.</li>

										            <li class="list-group-item">MOONEN, Frans. Políticas ciganas no Brasil e na Europa: subsídios para encontros e congressos ciganos no Brasil. 2. ed. rev. e ampl. Recife: [s.n.], 2013.</li>

										            <li class="list-group-item">SILVA JÚNIOR, A. A. Produção social dos sentidos em processos interculturais de comunicação e saúde: a apropriação das políticas públicas de saúde para ciganos no Brasil e em Portugal. 2018. 522 f. Tese (Doutorado em Informação e Comunicação da Saúde) – Instituto de Comunicação e Informação Científica e Tecnológica em Saúde, Fundação Oswaldo Cruz, Rio de Janeiro/RJ, 2018. Disponível em: https://www.icict.fiocruz.br/sites/www.icict.fiocruz.br/files/Tese%20PPGICS%20Aluizio %20de%20Azevedo%20Silva%20Junior_2018.pdf. Acesso em: 04 out. 2024.</li>

										            <li class="list-group-item">SILVA JÚNIOR, Aluízio de Azevedo; TOYANSK, Marcos. Saúde das comunidades ciganas no Brasil: contextos e políticas públicas. Revista do Centro de Pesquisa e Formação, n. 10, ago. 2020.</li>

										            <li class="list-group-item">SILVA JÚNIOR, A. A. Comunidades ciganas e a pandemia: desafios étnico-raciais e perspectivas comunicacionais. Revista Comunicação, Cultura e Sociedade, [S. l.], v. 7, n. 1, p. 042–061, 2020. Disponível em: https://periodicos.unemat.br/index.php/ccs/article/view/5097. Acesso em: 5 out. 2024.</li>

										            <li class="list-group-item">SILVA JÚNIOR, A. A.; GONÇALVES, G. M. A Pandemia da COVID-19 e a Potencialização das Desigualdades: Comunidades Ciganas e Meios de Comunicação. Comunicação e sociedade [online], 42 | 2022, posto online no dia 16 dezembro 2022. Disponível em: http://journals.openedition.org/cs/8284. Acesso em: 05 out 2024.</li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula4" aria-expanded="false" aria-controls="collapse-m3-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m3-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m4-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m4-aula3" aria-expanded="false" aria-controls="collapse-m4-aula3">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m4-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m4-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>

                                                    <li class="list-group-item"></li>
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

<!-- Material complementar -->
<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-10 col-lg-10">

        

        <div class="mb-5">
            <p>
                BRASIL. Conselho Federal de Enfermagem. Resolução COFEN nº 564, de 6 de novembro de 2017. Aprova o novo Código de Ética dos Profissionais de Enfermagem. Brasília, DF: COFEN, 2017. Disponível em:
                <a href="https://www.cofen.gov.br/resolucao-cofen-no-5642017/" target="_blank" rel="noopener noreferrer">https://www.cofen.gov.br/resolucao-cofen-no-5642017/</a>.
                Acesso em: 5 nov. 2026.
            </p>

            <p>
                BRASIL. Conselho Federal de Medicina. Código de Ética Médica. Resolução CFM nº 2.217, de 27 de setembro de 2018. Brasília, DF: CFM, 2019. Disponível em:
                <a href="https://portal.cfm.org.br/images/stories/biblioteca/codigo%20de%20etica%20medica.pdf" target="_blank" rel="noopener noreferrer">https://portal.cfm.org.br/images/stories/biblioteca/codigo%20de%20etica%20medica.pdf</a>.
                Acesso em: 5 nov. 2026.
            </p>

            <p>
                BRASIL. Conselho Federal de Odontologia. Resolução CFO nº 118, de 11 de maio de 2012. Aprova o Código de Ética Odontológica. Brasília, DF: CFO, 2012. Disponível em:
                <a href="https://website.cfo.org.br/wp-content/uploads/2018/03/codigo_etica.pdf" target="_blank" rel="noopener noreferrer">https://website.cfo.org.br/wp-content/uploads/2018/03/codigo_etica.pdf</a>.
                Acesso em: 5 nov. 2026.
            </p>

            <p>
                BRASIL. Ministério da Saúde. Código de Conduta Ética dos agentes públicos no âmbito do Ministério da Saúde. Portaria GM/MS nº 947, de 26 de abril de 2022. Brasília, DF: Ministério da Saúde, 2022. Disponível em:
                <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2022/prt0947_28_04_2022.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/2022/prt0947_28_04_2022.html</a>.
                Acesso em: 5 nov. 2026.
            </p>

            <p>
                BRASIL. Ministério da Saúde. Guia de conduta ética do Ministério da Saúde. Brasília, DF: Ministério da Saúde, [s. d.]. Disponível em:
                <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_conduta_etica_ministerio_saude.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/guia_conduta_etica_ministerio_saude.pdf</a>.
                Acesso em: 5 nov. 2026.
            </p>

            <p>
                CONFEDERAÇÃO NACIONAL DOS AGENTES COMUNITÁRIOS DE SAÚDE (CONACS). Código de ética. [S. l.], [s. d.]. Disponível em:
                <a href="https://contacs.org.br/codigo-de-etica" target="_blank" rel="noopener noreferrer">https://contacs.org.br/codigo-de-etica</a>.
                Acesso em: 5 nov. 2026.
            </p>

            <p>
                GLOBOPLAY. Veja algumas ações da escola. Vídeo. Disponível em:
                <a href="https://globoplay.globo.com/v/12169403/" target="_blank" rel="noopener noreferrer">https://globoplay.globo.com/v/12169403/</a>.
                Acesso em: 2 fev. 2026.
            </p>
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
