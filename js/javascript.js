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

scrollAnimInit()