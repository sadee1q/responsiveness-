document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.fa-bars');
    const navBar = document.querySelector('.nav-bar');

    menuIcon.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
});
