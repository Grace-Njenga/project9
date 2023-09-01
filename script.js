// const navbarToggle = document.querySelector('.menu');
// navbarToggle.addEventListener('click', () => {
//   const navbarMenu = document.querySelector('nav_container');
//   navbarMenu.classList.toggle('active');
// });

const toggleButton = document.getElementsByClassName('menu')[0];
const navbarlinks = document.getElementsByClassName('nav_container')[0];

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
});
