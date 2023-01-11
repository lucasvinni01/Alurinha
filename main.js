const menuButton = document.getElementById('burguer')

function toggleMenu () {
    const navbar = document.getElementById('cabecalhoPrincipal-navbar')
    navbar.classList.toggle('active')
}

menuButton.addEventListener('click', toggleMenu)