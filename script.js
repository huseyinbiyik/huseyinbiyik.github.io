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
  portfolio_image = worknumber.querySelector('.portfolio-work-image');
  portfolio_title = worknumber.querySelector('.portfolio-title');
  portfolio_description = worknumber.querySelector('.descriptive-text');
  tech_tag1 = worknumber.querySelector('.tech-tag1');
  tech_tag2 = worknumber.querySelector('.tech-tag2');
  tech_tag3 = worknumber.querySelector('.tech-tag3');
  tech_tag4 = worknumber.querySelector('.tech-tag4');

  portfolio_image.src = portfolio_work.portfolio_image;
  portfolio_title.innerHTML = portfolio_work.portfolio_title;
  portfolio_description.innerHTML = portfolio_work.portfolio_description;
  tech_tag1.innerHTML = portfolio_work.tech_tag1;
  tech_tag2.innerHTML = portfolio_work.tech_tag2;
  tech_tag3.innerHTML = portfolio_work.tech_tag3;
  tech_tag4.innerHTML = portfolio_work.tech_tag4;
}
let work1 = document.querySelector('.work1');
let work2 = document.querySelector('.work2');
let work3 = document.querySelector('.work3');
let work4 = document.querySelector('.work4');
let modal = document.querySelector('.modal');

dynamicContent(work1, portfolio_work1);
dynamicContent(work2, portfolio_work2);
dynamicContent(work3, portfolio_work3);
dynamicContent(work4, portfolio_work4);

//Modal Object
modalObject = {
  modal_header: 'Multi - Post Stories',
  modal_image: 'assets/modal-photo-desktop.jpeg',
  modal_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  first_modal_tag: 'html',
  second_modal_tag: 'Ruby on Rails',
  third_modal_tag: 'css',

}

//Modal Selectors
let modal_header = document.querySelector('.modal-header');
let modal_image = document.querySelector('.modal-image');
let modal_text = document.querySelector('.modal-text');
let modals_first_tag = document.querySelector('.modal-tech-tag-1');
let modals_second_tag = document.querySelector('.modal-tech-tag-2');
let modals_third_tag = document.querySelector('.modal-tech-tag-3');



//Dynamic
modal_header.innerHTML = modalObject.modal_header;
modal_image.src = modalObject.modal_image;
modal_text.innerHTML = modalObject.modal_text;
modals_first_tag.innerHTML = modalObject.first_modal_tag;
modals_second_tag.innerHTML = modalObject.second_modal_tag;
modals_third_tag.innerHTML = modalObject.third_modal_tag;




//button selector
let see_project_btn_1 = document.querySelector('.btn-1');
let see_project_btn_2 = document.querySelector('.btn-2');
let see_project_btn_3 = document.querySelector('.btn-3');
let see_project_btn_4 = document.querySelector('.btn-4');


//Modal button
see_project_btn_1.addEventListener('click', () => {
  //show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  //close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});
see_project_btn_2.addEventListener('click', () => {
  //show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  //close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});
see_project_btn_3.addEventListener('click', () => {
  //show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  //close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});
see_project_btn_4.addEventListener('click', () => {
  //show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  //close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});