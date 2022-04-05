//Full page navigation menu
const menuBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('overflow-disabled');
});

const navlinks = document.getElementsByClassName('link');

for (let i = 0; i < navlinks.length; i += 1) {
  navlinks[i].addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('overflow-disabled');
  });
}
//Full page navigation menu

//Dynamic works section
let portfolio_work1 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
}