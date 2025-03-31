(function () {
    //Бургер----------------------------------------------------------------------------------
    function burgerInit(event) {
        const target = event.target;
        const burgerIcon = target.closest('.burger-icon');
        //Метод Element.closest() ищет и возвращает ближайший (начиная с самого элемента) родительский элемент, соответствующий указанному CSS-селектору. Если ни один элемент не соответствует указанному CSS-селектору, возвращается null.
        const burgerNavLink = target.closest('.header__top-nav-link');

        if (document.documentElement.clientWidth > 900) return
        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');

        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }
    document.addEventListener('click', burgerInit)

    //Модалка----------------------------------------------------------------------------------
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.about__img-button');

    function openModal(event) {
        event.preventDefault();
        document.body.classList.toggle('body--opened-modal');
    };
    function closeModal(event) {
        event.preventDefault();
        const target = event.target;
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal');
        };
    };
    modal.addEventListener('click', closeModal);
    modalButton.addEventListener('click', openModal);

    //Табы-----------------------------------------------------------------------------------
    const tabControls = document.querySelector('.tab__controls');
    function toggleTab(event) {
        const tabControl = event.target.closest('.tab__controls-link');

        if (!tabControl) {
            return
        }
        event.preventDefault();
        if (tabControl.classList.contains('tab__controls-link--active')) {
            return
        }

        const tabContentId = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab__controls-link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab__controls-link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab__controls-link--active')
        tabContent.classList.add('tab-content--show')
    }

    tabControls.addEventListener('click', toggleTab);

    //Аккордион------------------------------------------------------------------------------------
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(element => {
        element.addEventListener('click', event => {

            const accordionList = event.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')//
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = event.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })

    })

    // ---------Слайдер-галерея--------------------------------------------------------------
    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,
        pagination: {
            type: 'fraction',
            el: '.gallery__pagination',
        },
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 3
            },
            801: {
                spaceBetween: 32
            },
            1101: {
                slidesPerView: 4
            }
        }
    });
})()
