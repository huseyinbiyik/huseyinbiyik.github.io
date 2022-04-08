// Full page navigation menu
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
// Full page navigation menu

// Dynamic works section

// objects
const portfolioWork1 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
};
const portfolioWork2 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
};
const portfolioWork3 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
};
const portfolioWork4 = {
  portfolio_image: 'assets/portfolio-image.jpeg',
  portfolio_title: 'Multi-Post Stories',
  portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
  tech_tag1: 'HTML',
  tech_tag2: 'CSS',
  tech_tag3: 'bootstrap',
  tech_tag4: 'Ruby',
  button_text: 'See Project',
};

// dynamic content function
function dynamicContent(worknumber, portfolioWork) {
  const portfolioImage = worknumber.querySelector('.portfolio-work-image');
  const portfolioTitle = worknumber.querySelector('.portfolio-title');
  const portfolioDescription = worknumber.querySelector('.descriptive-text');
  const techTag1 = worknumber.querySelector('.tech-tag1');
  const techTag2 = worknumber.querySelector('.tech-tag2');
  const techTag3 = worknumber.querySelector('.tech-tag3');
  const techTag4 = worknumber.querySelector('.tech-tag4');

  portfolioImage.src = portfolioWork.portfolio_image;
  portfolioTitle.innerHTML = portfolioWork.portfolio_title;
  portfolioDescription.innerHTML = portfolioWork.portfolio_description;
  techTag1.innerHTML = portfolioWork.tech_tag1;
  techTag2.innerHTML = portfolioWork.tech_tag2;
  techTag3.innerHTML = portfolioWork.tech_tag3;
  techTag4.innerHTML = portfolioWork.tech_tag4;
}
const work1 = document.querySelector('.work1');
const work2 = document.querySelector('.work2');
const work3 = document.querySelector('.work3');
const work4 = document.querySelector('.work4');

dynamicContent(work1, portfolioWork1);
dynamicContent(work2, portfolioWork2);
dynamicContent(work3, portfolioWork3);
dynamicContent(work4, portfolioWork4);

// Modal Object
const modalObject = {
  modal_header: 'Multi - Post Stories',
  modal_image: 'assets/modal-photo-desktop.jpeg',
  modal_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  first_modal_tag: 'html',
  second_modal_tag: 'Ruby on Rails',
  third_modal_tag: 'css',

};

// Modal Selectors
const modalHeader = document.querySelector('.modal-header');
const modalImage = document.querySelector('.modal-image');
const modalText = document.querySelector('.modal-text');
const modalsFirstTag = document.querySelector('.modal-tech-tag-1');
const modalsSecondTag = document.querySelector('.modal-tech-tag-2');
const modalsThirdTag = document.querySelector('.modal-tech-tag-3');

// Dynamic
modalHeader.innerHTML = modalObject.modal_header;
modalImage.src = modalObject.modal_image;
modalText.innerHTML = modalObject.modal_text;
modalsFirstTag.innerHTML = modalObject.first_modal_tag;
modalsSecondTag.innerHTML = modalObject.second_modal_tag;
modalsThirdTag.innerHTML = modalObject.third_modal_tag;

// button selector
const seeProjectBtn1 = document.querySelector('.btn-1');
const seeProjectBtn2 = document.querySelector('.btn-2');
const seeProjectBtn3 = document.querySelector('.btn-3');
const seeProjectBtn4 = document.querySelector('.btn-4');

// Modal button
seeProjectBtn1.addEventListener('click', () => {
  // show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  // close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});
seeProjectBtn2.addEventListener('click', () => {
  // show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  // close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});
seeProjectBtn3.addEventListener('click', () => {
  // show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  // close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});
seeProjectBtn4.addEventListener('click', () => {
  // show dialog
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  // close dialog
  dialog.querySelector('.modal-close').addEventListener('click', () => {
    dialog.close();
  });
});

// form validation

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const warningMessage = document.getElementById('warning-message');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    warningMessage.style.visibility = 'visible';
    warningMessage.innerHTML = 'Email must include only small letter';
    warningMessage.style.color = 'tomato';
    setTimeout(() => {
      warningMessage.style.visibility = 'hidden';
    }, 5000);
  } else {
    warningMessage.style.visibility = 'hidden';
  }
});

// Local storage
const usName = document.getElementById('name');
const usEmail = document.getElementById('email');
const usMessage = document.getElementById('msg');

function populateStorage() {
  // create visitor object
  const visitor = {
    userName: usName.value,
    userEmail: usEmail.value,
    userMessage: usMessage.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

// Trigger for populating local storage
usName.addEventListener('focusout', populateStorage);
usEmail.addEventListener('focusout', populateStorage);
usMessage.addEventListener('focusout', populateStorage);
localStorage.clear();
// Parse data from local storage
const userDataObject = JSON.parse(localStorage.getItem('visitor'));

// Refilling form inputs
usName.value = userDataObject.userName;
usEmail.value = userDataObject.userEmail;
usMessage.value = userDataObject.userMessage;