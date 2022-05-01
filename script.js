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
let worksArray = [{
    portfolio_image: 'assets/portfolio-image.jpeg',
    portfolio_title: 'Multi-Post Stories',
    portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'bootstrap',
    tech_tag4: 'Ruby',
    button_text: 'See Project',
    //modal data
    modal_header: 'Multi - Post Stories',
    modal_image: 'assets/modal-photo-desktop.jpeg',
    modal_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    first_modal_tag: 'html',
    second_modal_tag: 'Ruby on Rails',
    third_modal_tag: 'css',
  },
  {
    portfolio_image: 'assets/portfolio-image.jpeg',
    portfolio_title: 'Multi-Post Stories',
    portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'bootstrap',
    tech_tag4: 'Ruby',
    button_text: 'See Project',
    //modal data
    modal_header: 'Multi - Post Stories2',
    modal_image: 'assets/modal-photo-desktop.jpeg',
    modal_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    first_modal_tag: 'html',
    second_modal_tag: 'Ruby on Rails',
    third_modal_tag: 'css',
  },
  {
    portfolio_image: 'assets/portfolio-image.jpeg',
    portfolio_title: 'Multi-Post Stories',
    portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'bootstrap',
    tech_tag4: 'Ruby',
    button_text: 'See Project',
    //modal data
    modal_header: 'Multi - Post Stories',
    modal_image: 'assets/modal-photo-desktop.jpeg',
    modal_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    first_modal_tag: 'html',
    second_modal_tag: 'Ruby on Rails',
    third_modal_tag: 'css',
  }, {
    portfolio_image: 'assets/portfolio-image.jpeg',
    portfolio_title: 'Multi-Post Stories',
    portfolio_description: ' A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry \'s standard dummy text ever since the 1500 s, when an unknown printer took a standard dummy text.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'bootstrap',
    tech_tag4: 'Ruby',
    button_text: 'See Project',
    //modal data
    modal_header: 'Multi - Post Stories',
    modal_image: 'assets/modal-photo-desktop.jpeg',
    modal_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    first_modal_tag: 'html',
    second_modal_tag: 'Ruby on Rails',
    third_modal_tag: 'css',
  }
]

// dynamic content function
const portfolioContainer = document.getElementById('portfolio-works');
for (let i = 0; i < worksArray.length; i++) {
  portfolioContainer.innerHTML += ` <article class="portfolio-post work1">
 <div class="portfolio-image-container">    <img class="portfolio-work-image portfolio-img" src="${worksArray[i].portfolio_image}" alt="work section project image" />
 </div>
 <div class="portfolio-description-section">
    <div class="portfolio-header">
      <h3 class="portfolio-title">${worksArray[i].portfolio_title}</h3>
   </div>
    <p class="descriptive-text">${worksArray[i].portfolio_description}</p>
    <div class="portfolio-tags">
      <ul>
       <li>
       <p class="tech-tag1">${worksArray[i].tech_tag1}</p>
        </li>
        <li>
         <p class="tech-tag2">${worksArray[i].tech_tag2}</p>
       </li>
       <li>
        <p class="tech-tag3">${worksArray[i].tech_tag3}</p>
        </li>
      <li>
        <p class="tech-tag4">${worksArray[i].tech_tag4}</p>
      </li>     </ul>
    </div>
    <button type="button" id="${[i]}"class="see-project-btn btn-1">
      ${worksArray[i].button_text}
    </button>
  </div>
</article>`;
}

//creating dynamic modal
const projectBtns = document.querySelectorAll('.see-project-btn');
projectBtns.forEach((element) => {
  element.addEventListener('click', () => {
    let dialogBox = document.createElement('dialog');
    dialogBox.classList.add('modal')
    dialogBox.innerHTML = `
   <article class="portfolio-post modal1">
     <h3 class="modal-header">
${worksArray[element.id].modal_header}
     </h3> 
     <img src="assets/cancelicon.svg" class="modal-close">
    
     <img class="modal-image" src="${worksArray[element.id].modal_image}" alt="" />
     
     <p class="modal-text">
     ${worksArray[element.id].modal_text}
     </p>
     <ul class="modal-tags">
       <li>
         <p class="modal-tech-tag-1 modal-long-desc"> 
         ${worksArray[element.id].first_modal_tag} 
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-2 modal-long-desc">
         ${worksArray[element.id].second_modal_tag}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-3 modal-long-desc">
         ${worksArray[element.id].third_modal_tag}
         </p>
       </li>
     </ul>
     <div class="modal-button-container">
       <button type="button">
         See Live
         <img src="assets/outerlink.svg" alt="" />
       </button> <button type="button">
         See Source
         <img src="assets/githubicon.svg" alt="" />
       </button> </div>
   </article>
   `

    document.body.appendChild(dialogBox);
    dialogBox.showModal();
    //modal close
    let modalCloseBtns = document.querySelectorAll(".modal-close");
    modalCloseBtns.forEach((el) => {
      el.addEventListener('click', () => {
        dialogBox.close();
      })
    })
  })
})



// form validation
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const warningMessage = document.getElementById('warning-message');
const reg = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;


form.addEventListener('submit', (event) => {
  if (!reg.test(email.value)) {
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
// Parse data from local storage
const userDataObject = JSON.parse(localStorage.getItem('visitor'));

// Refilling form inputs
if(userDataObject){
 usName.value = userDataObject.userName;
usEmail.value = userDataObject.userEmail;
 usMessage.value = userDataObject.userMessage;
}