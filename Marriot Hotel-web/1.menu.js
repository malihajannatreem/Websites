const navBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('close-button');
const sideNav = document.getElementById('nav');
//const modal = document.getElementById('modal');
const explore = document.getElementsByClassName('head-button')

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
   
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    
});