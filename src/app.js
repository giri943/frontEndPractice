const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')



function showMenu() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', showMenu)