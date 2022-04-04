const menuBtn = document.querySelector('.hamburger-menu')
const mobileNav = document.querySelector('.nav-bar')

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('overflow-disabled')
})

const navlinks = document.getElementsByClassName('link');

for (i = 0; i < navlinks.length; i++){
    navlinks[i].addEventListener('click', () => {
        mobileNav.classList.toggle('active'); 
        document.body.classList.toggle('overflow-disabled')
    })
}