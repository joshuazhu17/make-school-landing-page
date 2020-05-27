
function rightHamburgerMenu() {
    const navitems = document.querySelectorAll('.right-items > .nav-item');

    navitems.forEach(nav => nav.classList.toggle('toggle-show'));
}

function resetView() {
    const navitems = document.querySelectorAll('.right-items > .nav-item');

    navitems.forEach(nav => nav.classList.toggle('toggle-show', false));
}

function korok() {
    alert("YAHAHA! YOU FOUND ME!");
    // my go-to quick debugging function
}

document.querySelector('.right-menu').addEventListener('click', rightHamburgerMenu);
window.addEventListener('resize', resetView);