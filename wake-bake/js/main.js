(function () {
    function burgerInit(event) {
        const target = event.target;
        const burgerIcon = target.closest('.burger-icon');
        //Метод Element.closest() ищет и возвращает ближайший (начиная с самого элемента) родительский элемент, соответствующий указанному CSS-селектору. Если ни один элемент не соответствует указанному CSS-селектору, возвращается null.
        const burgerNavLink = target.closest('.header__top-nav-link');

        if (document.documentElement.clientWidth > 900) return
        if (!burgerIcon && !burgerNavLink) return

        // if(burgerIcon) {
        //     event.preventDefault();
        // }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');

        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }
    document.addEventListener('click', burgerInit)
})()
