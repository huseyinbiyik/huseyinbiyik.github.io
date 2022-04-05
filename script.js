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

//objects
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
let portfolio_work2 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
}
let portfolio_work3 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
}
let portfolio_work4 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
}

//dynamic content function
function dynamicContent(worknumber, portfolio_work) {
  let portfolio_image = worknumber.querySelector('.portfolio-work-image');
  let portfolio_title = worknumber.querySelector('.portfolio-title');
  let portfolio_description = worknumber.querySelector('.descriptive-text');
  let tech_tag1 = worknumber.querySelector('.tech-tag1');
  let tech_tag2 = worknumber.querySelector('.tech-tag2');
  let tech_tag3 = worknumber.querySelector('.tech-tag3');
  let tech_tag4 = worknumber.querySelector('.tech-tag4');
  let see_project_btn = worknumber.querySelector('.see-project-btn');

  portfolio_image.src = portfolio_work.portfolio_image;
  portfolio_title.innerHTML = portfolio_work.portfolio_title;
  portfolio_description.innerHTML = portfolio_work.portfolio_description;
  tech_tag1.innerHTML = portfolio_work.tech_tag1;
  tech_tag2.innerHTML = portfolio_work.tech_tag2;
  tech_tag3.innerHTML = portfolio_work.tech_tag3;
  tech_tag4.innerHTML = portfolio_work.tech_tag4;
  see_project_btn.innerHTML = portfolio_work.button_text;
}
let work1 = document.querySelector('.work1');
let work2 = document.querySelector('.work2');
let work3 = document.querySelector('.work3');
let work4 = document.querySelector('.work4');

dynamicContent(work1, portfolio_work1);
dynamicContent(work2, portfolio_work2);
dynamicContent(work3, portfolio_work3);
dynamicContent(work4, portfolio_work4);



