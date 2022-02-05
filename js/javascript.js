function scrollAnimInit() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const halfWindow = window.innerHeight * 0.85;

        function scrollAnim() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - halfWindow;
                if (sectionTop < 0) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        scrollAnim()
        window.addEventListener('scroll', scrollAnim);
    }

    window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            sections.forEach((section) => {
                section.classList.add('ativo');
            });
        }
    };
}

scrollAnimInit();

function showTabInit() {
    const headerButton = document.querySelectorAll(".menu a[href^='#']");
    const mains = document.querySelectorAll('.js-menu');

    function changeMain(event) {
        event.preventDefault();
        const antigo = document.querySelector('.activeTab').getBoundingClientRect().x;

        headerButton.forEach((button) => {
            button.classList.remove('activeTab');
        });
        this.classList.add('activeTab');
        const ativo = document.querySelector('.activeTab').getBoundingClientRect().x;

        const href = event.currentTarget.getAttribute('href');
        const main = document.querySelector(href);

        mains.forEach((main) => {
            main.classList.remove('js-menu-ativo');
        });

        if (window.innerWidth > 600) {
            if (ativo < antigo) { // Checa se o botão clicado está a direita ou a esquerda do ativo
                main.classList.add('js-menu-ativo');
                main.style.animation = 'showLeft 0.5s'; // Adiciona a animação para a esquerda

            } else if (ativo > antigo) {
                main.classList.add('js-menu-ativo');
                main.style.animation = 'showRight 0.5s'; // Adiciona a animação a direita

            } else {
                main.classList.add('js-menu-ativo'); // Não faz a animação caso tenha clicado no mesmo botão
            }
        } else {
            main.classList.add('js-menu-ativo');
        }

    }

    document.querySelector("#main-home").classList.add('js-menu-ativo');
    document.querySelector("a[href='#main-home']").classList.add('activeTab');


    headerButton.forEach((button) => {
        button.addEventListener('click', changeMain);
    });
}
showTabInit();

function menuHamburguerInit() {
    const btnMobile = document.querySelector('.btn-mobile');
    const hamburguerButton = document.querySelectorAll(".menu a[href^='#']");
    const nav = document.querySelector('.nav');


    function toggleMenu(event) {
        if (event.type === 'touchstart') {
            event.preventDefault();
        }
        nav.classList.toggle('activeMobileNav');

        const ariaExpanded = nav.classList.contains('activeMobileNav');
        this.setAttribute('aria-expanded', ariaExpanded);
        if (ariaExpanded) {
            this.setAttribute('aria-label', 'Fechar menu')
        } else {
            this.setAttribute('aria-label', 'Abrir menu')
        }

    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);

    function shrinkMenu() {
        nav.classList.remove('activeMobileNav');
    }

    hamburguerButton.forEach((button) => {
        button.addEventListener('click', shrinkMenu);
    });

}

menuHamburguerInit();