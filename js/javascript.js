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


const emailValidation = /( ? : [a - z0 - 9!#$ % & '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const inputs = document.querySelectorAll('input, textarea');
const submit = document.querySelector('.formulario button');

let index = 0;

console.log(inputs)

function enviarEmail() {
    inputs.forEach((input) => {
        if (input.value.length != 0) {
            index += 1;
            console.log(input.value.length)
        }
    });

    console.log(index);

    if (index === 5) {
        // inputs.forEach((input) => {
        //     input.value = '';
        // });
        document.querySelector('.mensagemForm').classList.add('mensagemEnviada');
        index = 0;
    } else {
        index = 0;
    }

}

submit.addEventListener('click', enviarEmail);