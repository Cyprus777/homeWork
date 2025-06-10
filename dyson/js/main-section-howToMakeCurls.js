export function enableLastChildSvg760px() {
    if (window.innerWidth <= 760) {
        const firstChildSvg = document.querySelector('.howToMakeCurls__show-img-controls svg:first-child')
        firstChildSvg.style.display = 'none'

        const lastChildSvg = document.querySelector('.howToMakeCurls__show-img-controls svg:last-child')
        lastChildSvg.style.display = 'inline'
    }
}