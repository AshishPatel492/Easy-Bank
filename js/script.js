console.log("hello world");
// let navLinks=document.getElementsByClassName('nav-links'); /* not working */
let navLinks=document.querySelector('.nav-links');
// let hamburgerBtn=document.getElementsByClassName('hamburger-btn'); /* not working */
let hamburgerBtn=document.querySelector('.hamburger-btn');
let toggleImg=document.querySelector('#toggle-img');
hamburgerBtn.addEventListener('click', () => {
navLinks.classList.toggle('open');
isOpen=navLinks.classList.contains('open');
if(isOpen){
toggleImg.src='./img/icon-close.svg';
}
else{
    toggleImg.src='./img/icon-hamburger.svg';
}
});