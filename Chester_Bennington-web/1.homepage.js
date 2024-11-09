const navBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('close-button');
const sideNav = document.getElementById('nav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('blank');
});
