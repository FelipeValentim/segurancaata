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

const headerButton = document.querySelectorAll(".menu a[href^='#']");
const mains = document.querySelectorAll('.js-menu');

function changeMain(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const main = document.querySelector(href);
    mains.forEach((main) => {
        main.classList.remove('js-menu-ativo');
    });
    // console.log(main);
    main.classList.add('js-menu-ativo');
}

document.querySelector("#main-home").classList.add('js-menu-ativo');

headerButton.forEach((button) => {
    button.addEventListener('click', changeMain);
});




// // console.log(button.getBoundingClientRect().x);
// console.log('');