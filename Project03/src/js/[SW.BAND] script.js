window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.fixmenu_list'),
    menuItem = document.querySelectorAll('.fixmenu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('fixmenu_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('fixmenu_list_active');
        })
    })
})