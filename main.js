const menuActive = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    toggle.addEventListener('click', () => {       
        menu.classList.toggle('menu-active');
    })
}

menuActive("buttonToggler", "navbarMenu");